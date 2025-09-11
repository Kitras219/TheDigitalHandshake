// Ta linia informuje Astro, aby ten plik był traktowany jako dynamiczny endpoint serwerowy.
export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Inicjalizujemy klienta Resend z kluczem API pobranym ze zmiennych środowiskowych
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    // Prosta walidacja danych wejściowych
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Wszystkie pola są wymagane.' }),
        { status: 400 }
      );
    }

    // Wysłanie e-maila za pomocą Resend
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Ważne: To jest adres testowy Resend. Zmień na swój po weryfikacji domeny.
      to: 'piotr.gorzynski.93@gmail.com',
      subject: `Wiadomość z formularza portfolio od ${name}`,
      html: `<p><strong>Od:</strong> ${name} (${email})</p><p><strong>Wiadomość:</strong></p><p>${message}</p>`,
      replyTo: email as string, // <-- POPRAWIONA NAZWA WŁAŚCIWOŚCI
    });

    if (error) {
      console.error({ error });
      return new Response(
        JSON.stringify({ message: 'Wystąpił błąd podczas wysyłania wiadomości.' }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Wiadomość została wysłana pomyślnie!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: 'Wystąpił błąd serwera.' }),
      { status: 500 }
    );
  }
};


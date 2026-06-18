// Astro middleware — admin sayfalarına basic auth ile koruma
import { defineMiddleware } from 'astro:middleware';

const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD;

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Sadece /admin/ ile başlayan sayfaları koru
  if (!url.pathname.startsWith('/admin')) {
    return next();
  }

  if (!ADMIN_PASSWORD) {
    return new Response('ADMIN_PASSWORD env variable tanımlı değil', { status: 500 });
  }

  // Basic Auth kontrolü
  const auth = context.request.headers.get('authorization');
  if (!auth || !auth.startsWith('Basic ')) {
    return new Response('Giriş gerekli', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Nayomy Admin"',
      },
    });
  }

  try {
    const credentials = atob(auth.slice(6));
    const [username, password] = credentials.split(':');
    // Username umurumuzda değil, sadece parolayı kontrol et
    if (password !== ADMIN_PASSWORD) {
      return new Response('Yanlış parola', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Nayomy Admin"',
        },
      });
    }
  } catch (e) {
    return new Response('Hatalı kimlik bilgisi', { status: 401 });
  }

  return next();
});

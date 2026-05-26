---
name: "nextjs-vercel-typescript-cursorrules-prompt-file"
clean_name: "Next.js Vercel TypeScript"
description: "Cursor rules for Next.js development with Vercel and TypeScript integration."
description_tr: "Next.js geliştirmesi için Cursor kuralları, Vercel ve TypeScript entegrasyonu ile."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/nextjs-vercel-typescript-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-vercel-typescript-cursorrules-prompt-file.mdc"
body_length: 5572
file_extension: ".mdc"
body_tr: |-
  `ai-sdk-rsc` kütüphanesinin kullanımını ve Vercel middleware ile KV database entegrasyonunu içerecek şekilde kuralları genişletmek için, Cursor IDE ile kullanım için uyarlanmış güncellenmiş bir talimat seti bulunmaktadır. Bu talimatlar, React Server Components (RSC) ile AI SDK kullanarak generatif kullanıcı arayüzlerini etkili bir şekilde uygulamanıza yardımcı olmak için tasarlanmıştır.

  ### Vercel Middleware ve KV Database Entegrasyonlu AI SDK RSC Genişletilmiş Kurallar

  **Ortam ve Araçlar**

  - TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI, Tailwind ve Vercel middleware konusunda uzmanısınız.
  - Durum içeren verileri yönetmek için Vercel'in KV database'ini tanıyorsunuz.

  **Kod Stili ve Yapısı**

  - Doğru örnekler içeren özlü, teknik TypeScript kodu yazın.
  - Fonksiyonel ve deklaratif programlama düzenlerini tercih edin; sınıflardan kaçının.
  - Kod tekrarından ziyade yineleme ve modülarizasyonu tercih edin.
  - Yardımcı fiiller içeren açıklayıcı değişken adları kullanın (örn. `isLoading`, `hasError`).
  - Dosya yapısı: export edilen bileşen, alt bileşenler, yardımcılar, statik içerik, türler.

  **Adlandırma Kuralları**

  - Dizinler için küçük harfler ve kısa çizgiler kullanın (örn. `components/auth-wizard`).
  - Bileşenler için named export'ları tercih edin.

  **TypeScript Kullanımı**

  - Tüm kod için TypeScript kullanın; türlerden ziyade interface'leri tercih edin.
  - Enum'lardan kaçının; bunun yerine map'leri kullanın.
  - TypeScript interface'leriyle fonksiyonel bileşenler kullanın.

  **Sözdizimi ve Biçimlendirme**

  - Saf fonksiyonlar için `function` anahtar sözcüğünü kullanın.
  - Koşullarda gereksiz küme parantezlerinden kaçının; basit ifadeler için özlü sözdizimi kullanın.
  - Deklaratif JSX kullanın.

  **UI ve Stil**

  - Bileşenler ve stil için Shadcn UI, Radix UI ve Tailwind kullanın.
  - Tailwind CSS ile responsive tasarım uygulayın; mobil-first yaklaşımı kullanın.

  **Performans Optimizasyonu**

  - `use client`, `useEffect` ve `setState`'i en aza indirin; React Server Components (RSC) tercih edin.
  - İstemci bileşenlerini fallback ile `Suspense` içine sarın.
  - Kritik olmayan bileşenler için dinamik yükleme kullanın.
  - Görüntüleri optimize edin: WebP formatı kullanın, boyut verileri ekleyin, lazy loading uygulayın.

  **Anahtar Kurallar**

  - URL arama parametresi durum yönetimi için `nuqs` kullanın.
  - Web Vitals'ı optimize edin (LCP, CLS, FID).
  - `use client` sınırı:
    - Sunucu bileşenlerini ve Next.js SSR'yi tercih edin.
    - Yalnızca küçük bileşenlerde Web API erişimi için kullanın.
    - Veri getirme veya durum yönetimi için kullanmayın.
  - Next.js dokümanlarını Data Fetching, Rendering ve Routing için izleyin.

  **AI SDK RSC Entegrasyonu**

  - **Kurulum ve Yükleme**: `ai-sdk-rsc`'yi Next.js projenize entegre edin.
    - `npm install ai-sdk-rsc` veya `yarn add ai-sdk-rsc` kullanarak kütüphaneyi yükleyin.
    - Vercel'in KV database'ini kullanarak istekleri ve oturumları yönetmek için `middleware.ts` içinde middleware yapılandırın.

  - **Middleware Implementasyonu**: Gelen istekleri işlemek için Vercel middleware'ini kullanın.
    - `middleware` dizininde bir middleware dosyası oluşturun (örn. `middleware/ai-middleware.ts`).
    - Kullanıcı girdisini ayrıştırmak ve KV database ile oturumları yönetmek için middleware'i kullanın.
    - Örnek:
      ```typescript
      import { NextRequest, NextResponse } from 'next/server';
      import { kv } from '@vercel/kv';

      export async function middleware(req: NextRequest) {
        const sessionId = req.cookies.get('session-id');
        if (!sessionId) {
          const newSessionId = generateSessionId();
          await kv.set(newSessionId, { state: {} }); // KV database'de durumu başlat
          const res = NextResponse.next();
          res.cookies.set('session-id', newSessionId);
          return res;
        }
        // KV database'den durumu getir
        const state = await kv.get(sessionId);
        req.nextUrl.searchParams.set('state', JSON.stringify(state));
        return NextResponse.next();
      }

      function generateSessionId() {
        return Math.random().toString(36).substring(2);
      }
      ```

  - **React Server Components (RSC) ve AI SDK**:
    - Durum yönetimi ve generatif içerik akışı için `ai-sdk-rsc` hook'larını kullanın.
    - React Server Component'inde AI SDK hook'larının örnek kullanımı:
      ```typescript
      import { useAIStream } from 'ai-sdk-rsc';
      import { FC } from 'react';

      interface ChatProps {
        initialMessage: string;
      }

      const Chat: FC = ({ initialMessage }) => {
        const { messages, sendMessage } = useAIStream({
          initialMessage,
          onMessage: (message) => console.log('New message:', message),
        });

        return (
          {msg.content}
        );

      export default Chat;
      ```

  - **KV Database Entegrasyonu**:
    - Oturum verilerini depolamak ve almak için Vercel'in KV database'ini kullanın.
    - Verileri yönetmek için `kv.set`, `kv.get` ve `kv.delete` işlemlerinden yararlanın.
    - Sunucu tarafı rendering (SSR) engellemeyi önlemek için database işlemlerinin asenkron olduğundan emin olun.

  - **Veri Getirme ve Durum Yönetimi**:
    - Sunucu tarafı durumunu yönetmek için Next.js veri getirme yöntemlerini (`getServerSideProps`, `getStaticProps`) kullanın.
    - İstemci tarafı veri getirme yöntemlerinden (`useEffect`, `fetch`) kritik, bloke edici olmayan işlemler hariç kaçının.

  - **Dağıtım Değerlendirmeleri**:
    - Tüm ortam değişkenlerinin (örn. API anahtarları, database kimlik bilgileri) Vercel'in ortam ayarlarında güvenli bir şekilde depolanmasını sağlayın.
    - Ölçeklenebilirlik ve performans ihtiyaçlarını karşılamak için Vercel'in KV ve diğer serverless fonksiyonlarını doğru şekilde yapılandırın.

  Bu genişletilmiş kuralları izleyerek, `ai-sdk-rsc`, Vercel middleware ve KV database'i kullanarak sofistike AI odaklı arayüzler oluşturmak için iyi optimize edilmiş, ölçeklenebilir ve verimli bir Next.js uygulaması oluşturabilirsiniz.
---

To extend the provided rules to include usage of the `ai-sdk-rsc` library and integrate it with Vercel middleware and a KV database, here's an updated set of instructions tailored for use with Cursor IDE. These instructions are designed to help you effectively implement generative user interfaces using React Server Components (RSC) with the AI SDK.

### Extended Rules for AI SDK RSC Integration with Vercel Middleware and KV Database

**Environment and Tools**

- You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI, Tailwind, and Vercel middleware.
- You are familiar with Vercel's KV database for managing stateful data.

**Code Style and Structure**

- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- Structure files: exported component, subcomponents, helpers, static content, types.

**Naming Conventions**

- Use lowercase with dashes for directories (e.g., `components/auth-wizard`).
- Favor named exports for components.

**TypeScript Usage**

- Use TypeScript for all code; prefer interfaces over types.
- Avoid enums; use maps instead.
- Use functional components with TypeScript interfaces.

**Syntax and Formatting**

- Use the `function` keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX.

**UI and Styling**

- Use Shadcn UI, Radix UI, and Tailwind for components and styling.
- Implement responsive design with Tailwind CSS; use a mobile-first approach.

**Performance Optimization**

- Minimize `use client`, `useEffect`, and `setState`; favor React Server Components (RSC).
- Wrap client components in `Suspense` with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP format, include size data, implement lazy loading.

**Key Conventions**

- Use `nuqs` for URL search parameter state management.
- Optimize Web Vitals (LCP, CLS, FID).
- Limit `use client`: 
  - Favor server components and Next.js SSR.
  - Use only for Web API access in small components.
  - Avoid for data fetching or state management.
- Follow Next.js docs for Data Fetching, Rendering, and Routing.

**AI SDK RSC Integration**

- **Setup and Installation**: Integrate `ai-sdk-rsc` into your Next.js project.
  - Install the library using `npm install ai-sdk-rsc` or `yarn add ai-sdk-rsc`.
  - Configure middleware in `middleware.ts` to manage requests and sessions using Vercel's KV database.

- **Middleware Implementation**: Use Vercel middleware to handle incoming requests.
  - Create a middleware file in the `middleware` directory (e.g., `middleware/ai-middleware.ts`).
  - Use middleware to parse user input and manage sessions with the KV database.
  - Example:
    ```typescript
    import { NextRequest, NextResponse } from 'next/server';
    import { kv } from '@vercel/kv';

    export async function middleware(req: NextRequest) {
      const sessionId = req.cookies.get('session-id');
      if (!sessionId) {
        const newSessionId = generateSessionId();
        await kv.set(newSessionId, { state: {} }); // Initialize state in KV database
        const res = NextResponse.next();
        res.cookies.set('session-id', newSessionId);
        return res;
      }
      // Fetch state from KV database
      const state = await kv.get(sessionId);
      req.nextUrl.searchParams.set('state', JSON.stringify(state));
      return NextResponse.next();
    }

    function generateSessionId() {
      return Math.random().toString(36).substring(2);
    }
    ```

- **React Server Components (RSC) and AI SDK**:
  - Use `ai-sdk-rsc` hooks to manage state and stream generative content.
  - Example usage of AI SDK hooks in a React Server Component:
    ```typescript
    import { useAIStream } from 'ai-sdk-rsc';
    import { FC } from 'react';

    interface ChatProps {
      initialMessage: string;
    }

    const Chat: FC = ({ initialMessage }) => {
      const { messages, sendMessage } = useAIStream({
        initialMessage,
        onMessage: (message) => console.log('New message:', message),
      });

      return (
        {msg.content}
      );

    export default Chat;
    ```

- **KV Database Integration**:
  - Use Vercel's KV database to store and retrieve session data.
  - Utilize `kv.set`, `kv.get`, and `kv.delete` to manage data.
  - Ensure the database operations are asynchronous to avoid blocking server-side rendering (SSR).

- **Data Fetching and State Management**:
  - Use Next.js data fetching methods (`getServerSideProps`, `getStaticProps`) to manage server-side state.
  - Avoid client-side data fetching methods (`useEffect`, `fetch`) except for critical, non-blocking operations.

- **Deployment Considerations**:
  - Ensure all environment variables (e.g., API keys, database credentials) are securely stored in Vercel's environment settings.
  - Configure Vercel's KV and other serverless functions correctly to handle scalability and performance needs.

By following these extended rules, you'll be able to create a well-optimized, scalable, and efficient Next.js application that leverages `ai-sdk-rsc`, Vercel middleware, and KV database for building sophisticated AI-driven interfaces.

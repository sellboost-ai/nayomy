---
name: "nextjs-vercel-typescript-cursorrules-prompt-file"
clean_name: "Next.js Vercel TypeScript"
description: "Cursor rules for Next.js development with Vercel and TypeScript integration."
description_tr: "Next.js geliştirme için Cursor kuralları, Vercel ve TypeScript entegrasyonu ile."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/nextjs-vercel-typescript-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-vercel-typescript-cursorrules-prompt-file.mdc"
body_length: 5572
file_extension: ".mdc"
body_tr: |-
  # AI SDK RSC Entegrasyonu için Genişletilmiş Kurallar Vercel Middleware ve KV Veritabanı ile

  `ai-sdk-rsc` kütüphanesinin kullanımını ve Vercel middleware ile KV veritabanı entegrasyonunu içerecek şekilde sağlanan kuralları genişletmek için, Cursor IDE ile kullanılmak üzere tasarlanmış güncellenmiş bir talimat seti bulunmaktadır. Bu talimatlar, React Server Components (RSC) ile AI SDK kullanarak generatif kullanıcı arayüzlerini etkili bir şekilde uygulamanıza yardımcı olmak için tasarlanmıştır.

  ## Genişletilmiş Kurallar: AI SDK RSC Entegrasyonu Vercel Middleware ve KV Veritabanı ile

  **Ortam ve Araçlar**

  - TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI, Tailwind ve Vercel middleware konusunda uzman olmalısınız.
  - Vercel'in KV veritabanını stateful veriler yönetmek için kullanmaya alışkın olmalısınız.

  **Kod Stili ve Yapısı**

  - Doğru örnekler içeren kısa, teknik TypeScript kodu yazın.
  - Fonksiyonel ve deklaratif programlama kalıplarını tercih edin; sınıflardan kaçının.
  - Kod tekrarı yerine iterasyon ve modülerleştirmeyi tercih edin.
  - Yardımcı fiiller içeren açıklayıcı değişken adları kullanın (örn. `isLoading`, `hasError`).
  - Dosya yapısı: dışa aktarılan bileşen, alt bileşenler, yardımcılar, statik içerik, türler.

  **İsimlendirme Kuralları**

  - Dizinler için küçük harfler ve tireler kullanın (örn. `components/auth-wizard`).
  - Bileşenler için named export'u tercih edin.

  **TypeScript Kullanımı**

  - Tüm kodlar için TypeScript kullanın; types yerine interfaces tercih edin.
  - Enumlardan kaçının; bunun yerine map'ler kullanın.
  - TypeScript interfaces ile fonksiyonel bileşenler kullanın.

  **Sözdizimi ve Biçimlendirme**

  - Saf fonksiyonlar için `function` anahtar kelimesini kullanın.
  - Koşullarda gereksiz küme parantezlerinden kaçının; basit ifadeler için kısa sözdizimi kullanın.
  - Deklaratif JSX kullanın.

  **UI ve Stil**

  - Bileşenler ve stil için Shadcn UI, Radix UI ve Tailwind kullanın.
  - Tailwind CSS ile responsive tasarım uygulayın; mobil öncelikli bir yaklaşım kullanın.

  **Performans Optimizasyonu**

  - `use client`, `useEffect` ve `setState`'i minimize edin; React Server Components (RSC) tercih edin.
  - Client bileşenlerini `Suspense` ile fallback ile sarın.
  - Kritik olmayan bileşenler için dinamik yükleme kullanın.
  - Görüntüleri optimize edin: WebP formatını kullanın, boyut verilerini ekleyin, lazy loading uygulayın.

  **Ana Kurallar**

  - URL arama parametresi durum yönetimi için `nuqs` kullanın.
  - Web Vitals'ı (LCP, CLS, FID) optimize edin.
  - `use client`'ı sınırlayın:
    - Server bileşenlerini ve Next.js SSR'ı tercih edin.
    - Yalnızca küçük bileşenlerde Web API erişimi için kullanın.
    - Veri getirme veya durum yönetimi için kullanmayın.
  - Data Fetching, Rendering ve Routing konusunda Next.js docs'u takip edin.

  **AI SDK RSC Entegrasyonu**

  - **Kurulum ve İnstallasyon**: `ai-sdk-rsc`'yi Next.js projenize entegre edin.
    - `npm install ai-sdk-rsc` veya `yarn add ai-sdk-rsc` kullanarak kütüphaneyi yükleyin.
    - Vercel'in KV veritabanını kullanarak istekleri ve oturumları yönetmek için middleware'i yapılandırın.

  - **Middleware Uygulaması**: Gelen istekleri işlemek için Vercel middleware kullanın.
    - `middleware` dizininde bir middleware dosyası oluşturun (örn. `middleware/ai-middleware.ts`).
    - Kullanıcı girişini ayrıştırmak ve KV veritabanı ile oturumları yönetmek için middleware kullanın.
    - Örnek:
      ```typescript
      import { NextRequest, NextResponse } from 'next/server';
      import { kv } from '@vercel/kv';

      export async function middleware(req: NextRequest) {
        const sessionId = req.cookies.get('session-id');
        if (!sessionId) {
          const newSessionId = generateSessionId();
          await kv.set(newSessionId, { state: {} }); // KV veritabanında durumu başlat
          const res = NextResponse.next();
          res.cookies.set('session-id', newSessionId);
          return res;
        }
        // KV veritabanından durumu al
        const state = await kv.get(sessionId);
        req.nextUrl.searchParams.set('state', JSON.stringify(state));
        return NextResponse.next();
      }

      function generateSessionId() {
        return Math.random().toString(36).substring(2);
      }
      ```

  - **React Server Components (RSC) ve AI SDK**:
    - Durumu yönetmek ve generatif içerik akışını sağlamak için `ai-sdk-rsc` hook'larını kullanın.
    - React Server Component'te AI SDK hook'larının örnek kullanımı:
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

  - **KV Veritabanı Entegrasyonu**:
    - Oturum verilerini depolamak ve almak için Vercel'in KV veritabanını kullanın.
    - Verileri yönetmek için `kv.set`, `kv.get` ve `kv.delete` kullanın.
    - Veritabanı işlemlerinin sunucu tarafı oluşturmayı (SSR) engellemeyecek şekilde asenkron olduğundan emin olun.

  - **Veri Getirme ve Durum Yönetimi**:
    - Sunucu tarafı durumu yönetmek için Next.js veri getirme yöntemlerini (`getServerSideProps`, `getStaticProps`) kullanın.
    - İstemci tarafı veri getirme yöntemlerinden (`useEffect`, `fetch`) kritik, engellemeyen işlemler dışında kaçının.

  - **Dağıtım Önemli Noktaları**:
    - Tüm ortam değişkenlerinin (örn. API anahtarları, veritabanı kimlik bilgileri) Vercel'in ortam ayarlarında güvenli bir şekilde depolandığından emin olun.
    - Ölçeklenebilirlik ve performans ihtiyaçlarını işlemek için Vercel'in KV ve diğer serverless fonksiyonlarını doğru şekilde yapılandırın.

  Bu genişletilmiş kuralları takip ederek, `ai-sdk-rsc`, Vercel middleware ve KV veritabanını kullanarak gelişmiş AI tarafından yönlendirilen arayüzler oluşturmak için iyi optimize edilmiş, ölçeklenebilir ve verimli bir Next.js uygulaması oluşturabilirsiniz.
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

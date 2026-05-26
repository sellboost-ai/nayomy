---
name: "marcelmarais/spotify-mcp-server"
description: "Control Spotify playback and manage playlists."
description_tr: "Spotify oynatmayı kontrol edin ve playlistleri yönetin."
category: "Other Tools and Integrations"
repo: "marcelmarais/spotify-mcp-server"
stars: 351
url: "https://github.com/marcelmarais/spotify-mcp-server"
body_length: 17265
language: "TypeScript"
body_tr: |-
  <div align="center" style="display: flex; align-items: center; justify-content: center; gap: 10px;">

  <h1>Spotify MCP Sunucusu</h1>
  </div>

  Cursor ve Claude gibi yapay zeka asistanlarının Spotify oynatmayı kontrol etmesine ve çalma listelerini yönetmesine olanak tanıyan hafif bir [Model Context Protocol (MCP)](https://modelcontextprotocol.io) sunucusu.

  <details>
  <summary>İçindekiler</summary>

  - [Örnek Etkileşimler](#örnek-etkileşimler)
  - [Araçlar](#araçlar)
    - [Okuma İşlemleri](#okuma-i̇şlemleri)
    - [Albüm İşlemleri](#albüm-i̇şlemleri)
    - [Oynatma / Oluşturma İşlemleri](#oynatma--oluşturma-i̇şlemleri)
    - [Çalma Listesi İşlemleri](#çalma-listesi-i̇şlemleri)
  - [Kurulum](#kurulum)
    - [Ön Koşullar](#ön-koşullar)
    - [Kurulum](#kurulum-1)
    - [Spotify Geliştirici Uygulaması Oluşturma](#spotify-geliştirici-uygulaması-oluşturma)
    - [Spotify API Yapılandırması](#spotify-api-yapılandırması)
    - [Kimlik Doğrulama Süreci](#kimlik-doğrulama-süreci)
  - [Claude Desktop, Cursor ve VsCode (Cline) ile Entegrasyon](#claude-desktop-cursor-ve-vscode-cline-ile-entegrasyon)
  </details>

  ## Örnek Etkileşimler

  - _"Elvis'in ilk şarkısını çal"_
  - _"Taylor Swift / Slipknot fusion çalma listesi oluştur"_
  - _"Antrenman çalma listemden tüm techno şarkılarını iş çalma listemle kopyala"_
  - _"Sesi biraz azalt"_

  ## Araçlar

  ### Okuma İşlemleri

  1. **searchSpotify**

     - **Açıklama**: Spotify'da track, albüm, sanatçı veya çalma listesi arayın
     - **Parametreler**:
       - `query` (string): Arama terimi
       - `type` (string): Aranacak öğe türü (track, album, artist, playlist)
       - `limit` (number, optional): Döndürülecek maksimum sonuç sayısı (10-50)
     - **Dönüş**: Eşleşen öğelerin listesi (ID, isim ve ek detaylar)
     - **Örnek**: `searchSpotify("bohemian rhapsody", "track", 20)`

  2. **getNowPlaying**

     - **Açıklama**: Spotify'da şu anda çalınan track hakkında bilgi alın (cihaz ve ses düzeyi bilgileri dahil)
     - **Parametreler**: Yok
     - **Dönüş**: Track adı, sanatçı, albüm, oynatma ilerleme durumu, süre, oynatma durumu, cihaz bilgileri, ses düzeyi ve shuffle/repeat durumu içeren nesne
     - **Örnek**: `getNowPlaying()`

  3. **getMyPlaylists**

     - **Açıklama**: Geçerli kullanıcının Spotify çalma listelerinin listesini alın
     - **Parametreler**:
       - `limit` (number, optional): Döndürülecek maksimum çalma listesi sayısı (varsayılan: 20)
       - `offset` (number, optional): Döndürülecek ilk çalma listesinin indeksi (varsayılan: 0)
     - **Dönüş**: ID, isim, track sayısı ve genel durumu olan çalma listelerinin dizisi
     - **Örnek**: `getMyPlaylists(10, 0)`

  4. **getPlaylistTracks**

     - **Açıklama**: Belirli bir Spotify çalma listesindeki track'lerin listesini alın
     - **Parametreler**:
       - `playlistId` (string): Çalma listesinin Spotify ID'si
       - `limit` (number, optional): Döndürülecek maksimum track sayısı (varsayılan: 100)
       - `offset` (number, optional): Döndürülecek ilk track'in indeksi (varsayılan: 0)
     - **Dönüş**: ID, isim, sanatçı, albüm, süre ve ekleme tarihi olan track'lerin dizisi
     - **Örnek**: `getPlaylistTracks("37i9dQZEVXcJZyENOWUFo7")`

  5. **getRecentlyPlayed**

     - **Açıklama**: Spotify'dan yakın zamanda çalınan track'lerin listesini alır.
     - **Parametreler**:
       - `limit` (number, optional): Döndürülecek maksimum track sayısını belirten bir sayı.
     - **Dönüş**: Track'ler bulunursa yakın zamanda çalınan track'lerin biçimlendirilmiş listesini döndürür, aksi takdirde şu mesajı döndürür: "You don't have any recently played tracks on Spotify".
     - **Örnek**: `getRecentlyPlayed({ limit: 10 })`

  6. **getUsersSavedTracks**

     - **Açıklama**: Kullanıcının "Beğenilen Şarkılar" kütüphanesinde kaydedilen track'lerin listesini alın
     - **Parametreler**:
       - `limit` (number, optional): Döndürülecek maksimum track sayısı (1-50, varsayılan: 50)
       - `offset` (number, optional): Sayfalandırma için offset (0 tabanlı indeks, varsayılan: 0)
     - **Dönüş**: Track adları, sanatçılar, süre, track ID'leri ve Beğenilen Şarkılar'a eklenme zamanı olan kaydedilen track'lerin biçimlendirilmiş listesi. Sayfalandırma bilgisini gösterir (örn. "1-20 of 150").
     - **Örnek**: `getUsersSavedTracks({ limit: 20, offset: 0 })`

  7. **getQueue**

     - **Açıklama**: Spotify kuyruğunda şu anda çalınan track ve sonraki öğeleri alın
     - **Parametreler**:
       - `limit` (number, optional): Gösterilecek maksimum sonraki öğe sayısı (1-50, varsayılan: 10)
     - **Dönüş**: Şu anda çalınan track ve kuyrukta sonraki track'lerin listesi
     - **Örnek**: `getQueue({ limit: 20 })`

  8. **getAvailableDevices**

     - **Açıklama**: Kullanıcının mevcut Spotify Connect cihazları hakkında bilgi alın
     - **Parametreler**: Yok
     - **Dönüş**: İsim, tür, aktif durum, ses düzeyi ve cihaz ID'si olan mevcut cihazların listesi
     - **Örnek**: `getAvailableDevices()`

  9. **removeUsersSavedTracks**

     - **Açıklama**: Bir veya daha fazla track'i kullanıcının "Beğenilen Şarkılar" kütüphanesinden kaldırın (istek başına maksimum 40)
     - **Parametreler**:
       - `trackIds` (array): Kaldırılacak Spotify track ID'lerinin dizisi (maksimum 40)
     - **Dönüş**: Başarı onayı mesajı
     - **Örnek**: `removeUsersSavedTracks({ trackIds: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"] })`


  ### Oynatma / Oluşturma İşlemleri

  1. **playMusic**

     - **Açıklama**: Spotify'da bir track, albüm, sanatçı veya çalma listesi çalmaya başlayın
     - **Parametreler**:
       - `uri` (string, optional): Çalınacak öğenin Spotify URI'si (tür ve id'yi geçersiz kılar)
       - `type` (string, optional): Çalınacak öğe türü (track, album, artist, playlist)
       - `id` (string, optional): Çalınacak öğenin Spotify ID'si
       - `deviceId` (string, optional): Üzerinde çalacak cihazın ID'si
     - **Dönüş**: Başarı durumu
     - **Örnek**: `playMusic({ uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6" })`
     - **Alternatif**: `playMusic({ type: "track", id: "6rqhFgbbKwnb9MLmUQDhG6" })`

  2. **pausePlayback**

     - **Açıklama**: Spotify'da şu anda çalınan track'i duraklatın
     - **Parametreler**:
       - `deviceId` (string, optional): Duraklatılacak cihazın ID'si
     - **Dönüş**: Başarı durumu
     - **Örnek**: `pausePlayback()`

  3. **resumePlayback**

     - **Açıklama**: Etkin cihazda Spotify oynatmaya devam edin
     - **Parametreler**:
       - `deviceId` (string, optional): Oynatmanın devam edeceği cihazın ID'si
     - **Dönüş**: Başarı durumu
     - **Örnek**: `resumePlayback()`

  4. **skipToNext**

     - **Açıklama**: Geçerli oynatma kuyruğundaki sonraki track'e geçin
     - **Parametreler**:
       - `deviceId` (string, optional): Cihazın ID'si
     - **Dönüş**: Başarı durumu
     - **Örnek**: `skipToNext()`

  5. **skipToPrevious**

     - **Açıklama**: Geçerli oynatma kuyruğundaki önceki track'e geçin
     - **Parametreler**:
       - `deviceId` (string, optional): Cihazın ID'si
     - **Dönüş**: Başarı durumu
     - **Örnek**: `skipToPrevious()`

  6. **createPlaylist**

     - **Açıklama**: Spotify'da yeni bir çalma listesi oluşturun
     - **Parametreler**:
       - `name` (string): Yeni çalma listesinin adı
       - `description` (string, optional): Çalma listesi açıklaması
       - `public` (boolean, optional): Çalma listesinin genel olup olmayacağı (varsayılan: false)
     - **Dönüş**: Yeni çalma listesinin ID'si ve URL'si içeren nesne
     - **Örnek**: `createPlaylist({ name: "Workout Mix", description: "Songs to get pumped up", public: false })`

  7. **addTracksToPlaylist**

     - **Açıklama**: Mevcut bir Spotify çalma listesine track'ler ekleyin
     - **Parametreler**:
       - `playlistId` (string): Çalma listesinin ID'si
       - `trackUris` (array): Eklenecek track URI'leri veya ID'lerinin dizisi
       - `position` (number, optional): Track'lerin ekleneceği pozisyon
     - **Dönüş**: Başarı durumu ve snapshot ID'si
     - **Örnek**: `addTracksToPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n", trackUris: ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh"] })`

  8. **addToQueue**

     - **Açıklama**: Geçerli oynatma kuyruğuna track, albüm, sanatçı veya çalma listesi ekleyin
     - **Parametreler**:
       - `uri` (string, optional): Kuyruğa eklenecek öğenin Spotify URI'si (tür ve id'yi geçersiz kılar)
       - `type` (string, optional): Kuyruğa alınacak öğe türü (track, album, artist, playlist)
       - `id` (string, optional): Kuyruğa alınacak öğenin Spotify ID'si
       - `deviceId` (string, optional): Kuyruğa alınacak cihazın ID'si
     - **Dönüş**: Başarı durumu
     - **Örnek**: `addToQueue({ uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6" })`
     - **Alternatif**: `addToQueue({ type: "track", id: "6rqhFgbbKwnb9MLmUQDhG6" })`

  9. **setVolume**

     - **Açıklama**: Oynatma sesini belirli bir yüzdeye ayarlayın (Spotify Premium gereklidir)
     - **Parametreler**:
       - `volumePercent` (number): Ayarlanacak ses düzeyi (0-100)
       - `deviceId` (string, optional): Ses düzeyinin ayarlanacağı cihazın ID'si
     - **Dönüş**: Yeni ses düzeyini gösteren başarı durumu
     - **Örnek**: `setVolume({ volumePercent: 50 })`

  10. **adjustVolume**

     - **Açıklama**: Oynatma sesini göreceli bir miktarla artırın veya azaltın (Spotify Premium gereklidir)
     - **Parametreler**:
       - `adjustment` (number): Sesi ayarlanacak miktar (-100 ile 100). Pozitif değerler sesi artırır, negatif değerler azaltır.
       - `deviceId` (string, optional): Ses düzeyinin ayarlanacağı cihazın ID'si
     - **Dönüş**: Ses değişimini gösteren başarı durumu (örn. "Volume increased from 50% to 60%")
     - **Örnek**: `adjustVolume({ adjustment: 10 })` (%10 artır)
     - **Örnek**: `adjustVolume({ adjustment: -20 })` (%20 azalt)


  ### Albüm İşlemleri

  1. **getAlbums**

     - **Açıklama**: Spotify ID'lerine göre bir veya daha fazla albüm hakkında detaylı bilgi alın
     - **Parametreler**:
       - `albumIds` (string|array): Tek bir albüm ID'si veya albüm ID'lerinin dizisi (maksimum 20)
     - **Dönüş**: İsim, sanatçılar, yayın tarihi, tür, toplam track sayısı ve ID dahil albüm detayları. Tek albüm için detaylı görünüm döndürür, birden fazla albüm için özet liste döndürür.
     - **Örnek**: `getAlbums("4aawyAB9vmqN3uQ7FjRGTy")` veya `getAlbums(["4aawyAB9vmqN3uQ7FjRGTy", "1DFixLWuPkv3KT3TnV35m3"])`

  2. **getAlbumTracks**

     - **Açıklama**: Sayfalandırma desteği ile belirli bir albümden track'leri alın
     - **Parametreler**:
       - `albumId` (string): Albümün Spotify ID'si
       - `limit` (number, optional): Döndürülecek maksimum track sayısı (1-50)
       - `offset` (number, optional): Sayfalandırma için offset (0 tabanlı indeks)
     - **Dönüş**: Track adları, sanatçılar, süre ve ID'leri ile albümden track'lerin listesi. Sayfalandırma bilgisini gösterir.
     - **Örnek**: `getAlbumTracks("4aawyAB9vmqN3uQ7FjRGTy", 10, 0)`

  3. **saveOrRemoveAlbumForUser**

     - **Açıklama**: Albümleri kullanıcının "Your Music" kütüphanesine kaydedin veya kaldırın
     - **Parametreler**:
       - `albumIds` (array): Spotify albüm ID'lerinin dizisi (maksimum 20)
       - `action` (string): Gerçekleştirilecek işlem: "save" veya "remove"
     - **Dönüş**: Onay mesajı ile başarı durumu
     - **Örnek**: `saveOrRemoveAlbumForUser(["4aawyAB9vmqN3uQ7FjRGTy"], "save")`

  4. **checkUsersSavedAlbums**

     - **Açıklama**: Albümlerin kullanıcının "Your Music" kütüphanesine kaydedilip kaydedilmediğini kontrol edin
     - **Parametreler**:
       - `albumIds` (array): Kontrol edilecek Spotify albüm ID'lerinin dizisi (maksimum 20)
     - **Dönüş**: Her albümün durumu (kaydedilmiş veya kaydedilmemiş)
     - **Örnek**: `checkUsersSavedAlbums(["4aawyAB9vmqN3uQ7FjRGTy", "1DFixLWuPkv3KT3TnV35m3"])`

  ### Çalma Listesi İşlemleri

  1. **getPlaylist**

     - **Açıklama**: Belirli bir Spotify çalma listesinin detaylarını alın (track sayısı, açıklama ve sahip dahil)
     - **Parametreler**:
       - `playlistId` (string): Çalma listesinin Spotify ID'si
     - **Dönüş**: Çalma listesi adı, sahip, track sayısı, görünürlük, açıklama, ID ve URL
     - **Örnek**: `getPlaylist({ playlistId: "37i9dQZEVXcJZyENOWUFo7" })`

  2. **updatePlaylist**

     - **Açıklama**: Spotify çalma listesinin detaylarını güncelleyin (ad, açıklama, genel/özel, işbirlikçi)
     - **Parametreler**:
       - `playlistId` (string): Çalma listesinin Spotify ID'si
       - `name` (string, optional): Çalma listesinin yeni adı
       - `description` (string, optional): Çalma listesinin yeni açıklaması
       - `public` (boolean, optional): Çalma listesinin genel olup olmayacağı
       - `collaborative` (boolean, optional): Çalma listesinin işbirlikçi olup olmayacağı (genel değer false olmalı)
     - **Dönüş**: Güncellenen alanların listesi ile başarı onayı
     - **Örnek**: `updatePlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n", name: "New Name", public: true })`

  3. **removeTracksFromPlaylist**

     - **Açıklama**: Spotify çalma listesinden bir veya daha fazla track'i kaldırın (istek başına maksimum 100 track)
     - **Parametreler**:
       - `playlistId` (string): Çalma listesinin Spotify ID'si
       - `trackIds` (array): Kaldırılacak Spotify track ID'lerinin dizisi (maksimum 100)
       - `snapshotId` (string, optional): Belirli bir sürümü hedeflemek için çalma listesi snapshot ID'si
     - **Dönüş**: Kaldırılan track sayısı ile başarı onayı
     - **Örnek**: `removeTracksFromPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n", trackIds: ["4iV5W9uYEdYUVa79Axb7Rh"] })`

  4. **reorderPlaylistItems**

     - **Açıklama**: Spotify çalma listesi içindeki bir track aralığını yeni bir pozisyona taşıyarak yeniden sıralayın
     - **Parametreler**:
       - `playlistId` (string): Çalma listesinin Spotify ID'si
       - `rangeStart` (number): Taşınacak ilk öğenin pozisyonu (0 tabanlı indeks)
       - `insertBefore` (number): Öğelerin ekleneceği pozisyon (0 tabanlı indeks)
       - `rangeLength` (number, optional): Taşınacak ardışık öğe sayısı (varsayılan: 1)
       - `snapshotId` (string, optional): Belirli bir sürümü hedeflemek için çalma listesi snapshot ID'si
     - **Dönüş**: Hareket detayları ile başarı onayı
     - **Örnek**: `reorderPlaylistItems({ playlistId: "3cEYpjA9oz9GiPac4AsH4n", rangeStart: 2, insertBefore: 0 })`

  ## Kurulum

  ### Ön Koşullar

  - Node.js v16+
  - Spotify Premium hesabı
  - Kayıtlı bir Spotify Geliştirici uygulaması

  ### Kurulum

  ```bash
  git clone https://github.com/marcelmarais/spotify-mcp-server.git
  cd spotify-mcp-server
  npm install
  npm run build
  ```

  ### Spotify Geliştirici Uygulaması Oluşturma

  1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) adresine gidin
  2. Spotify hesabınızla oturum açın
  3. "Create an App" butonuna tıklayın
  4. Uygulama adı ve açıklamasını doldurun
  5. Hizmet Şartlarını kabul edin ve "Create" tıklayın
  6. Yeni uygulamanızın dashboard'unda **Client ID**'nizi göreceksiniz
  7. **Client Secret**'i ortaya çıkarmak için "Show Client Secret" tıklayın
  8. "Edit Settings" tıklayın ve bir Redirect URI ekleyin (ör. `http://127.0.0.1:8888/callback`)
  9. Değişiklikleri kaydedin

  ### Spotify API Yapılandırması

  Proje kökünde bir `spotify-config.json` dosyası oluşturun (sağlanan örneği kopyalayıp değiştirebilirsiniz):

  ```bash
  # Örnek yapılandırma dosyasını kopyalayın
  cp spotify-config.example.json spotify-config.json
  ```

  Ardından dosyayı kimlik bilgilerinizle düzenleyin:

  ```json
  {
    "clientId": "your-client-id",
    "clientSecret": "your-client-secret",
    "redirectUri": "http://127.0.0.1:8888/callback"
  }
  ```

  ### Kimlik Doğrulama Süreci

  Spotify API, kimlik doğrulama için OAuth 2.0 kullanır. Uygulamanızda kimlik doğrulama yapmak için şu adımları izleyin:

  1. Kimlik doğrulama script'ini çalıştırın:

  ```bash
  npm run auth
  ```

  2. Script bir yetkilendirme URL'si oluşturacak. Bu URL'yi web tarayıcınızda açın.

  3. Spotify'da oturum açmanız ve uygulamanızı yetkilendirmeniz istenecek.

  4. Yetkilendirmeden sonra Spotify sizi belirtilen redirect URI'nize URL'de bir kod parametresi ile yönlendirecek.

  5. Kimlik doğrulama script'i otomatik olarak bu kodu erişim ve yenileme tokenları ile değiştirecek.

  6. Bu tokenlar `spotify-config.json` dosyasına kaydedilecek ve dosya şöyle görünecek:

  ```json
  {
    "clientId": "your-client-id",
    "clientSecret": "your-client-secret",
    "redirectUri": "http://localhost:8888/callback",
    "accessToken": "BQAi9Pn...kKQ",
    "refreshToken": "AQDQcj...7w",
    "expiresAt": 1677889354671
  }
  ```

  **Not**: `expiresAt` alanı, erişim tokenının ne zaman sona ereceğini gösteren Unix zaman damgasıdır (milisaniye cinsinden).

  7. **Otomatik Token Yenileme**: Sunucu, erişim tokenı sona erdiğinde (genellikle 1 saat sonra) otomatik olarak yenileme tokenını yenileyecek. Yenileme `refreshToken` kullanılarak şeffaf bir şekilde gerçekleşir, bu nedenle manuel olarak yeniden kimlik doğrulama yapmanız gerekmez. Yenileme başarısız olursa, yeniden kimlik doğrulamak için `npm run auth` komutunu çalıştırmanız gerekecek.

  ## Claude Desktop, Cursor ve VsCode (Cline) ile Entegrasyon

  MCP sunucunuzu Claude Desktop ile kullanmak için, Claude yapılandırmanıza ekleyin:

  ```json
  {
    "mcpServers": {
      "spotify": {
        "command": "node",
        "args": ["spotify-mcp-server/build/index.js"]
      }
    }
  }
  ```

  Cursor için, `Cursor Settings` içindeki MCP sekmesine gidin (command + shift + J). Bu komutla bir sunucu ekleyin:

  ```bash
  node path/to/spotify-mcp-server/build/index.js
  ```

  Cline ile MCP'nizi doğru şekilde kurmak için şu dosya yapılandırmasının ayarlanmış olduğundan emin olun `cline_mcp_settings.json`:

  ```json
  {
    "mcpServers": {
      "spotify": {
        "command": "node",
        "args": ["~/../spotify-mcp-server/build/index.js"],
        "autoApprove": ["getListeningHistory", "getNowPlaying"]
      }
    }
  }
  ```

  Araçların müdahale olmadan çalışması için otomatik onay dizisine ek araçlar ekleyebilirsiniz.
---

<div align="center" style="display: flex; align-items: center; justify-content: center; gap: 10px;">

<h1>Spotify MCP Server</h1>
</div>

A lightweight [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that enables AI assistants like Cursor & Claude to control Spotify playback and manage playlists.

<details>
<summary>Contents</summary>

- [Example Interactions](#example-interactions)
- [Tools](#tools)
  - [Read Operations](#read-operations)
  - [Album Operations](#album-operations)
  - [Play / Create Operations](#play--create-operations)
  - [Playlist Operations](#playlist-operations)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Creating a Spotify Developer Application](#creating-a-spotify-developer-application)
  - [Spotify API Configuration](#spotify-api-configuration)
  - [Authentication Process](#authentication-process)
- [Integrating with Claude Desktop, Cursor, and VsCode (Cline)](#integrating-with-claude-desktop-and-cursor)
</details>

## Example Interactions

- _"Play Elvis's first song"_
- _"Create a Taylor Swift / Slipknot fusion playlist"_
- _"Copy all the techno tracks from my workout playlist to my work playlist"_
- _"Turn the volume down a bit"_

## Tools

### Read Operations

1. **searchSpotify**

   - **Description**: Search for tracks, albums, artists, or playlists on Spotify
   - **Parameters**:
     - `query` (string): The search term
     - `type` (string): Type of item to search for (track, album, artist, playlist)
     - `limit` (number, optional): Maximum number of results to return (10-50)
   - **Returns**: List of matching items with their IDs, names, and additional details
   - **Example**: `searchSpotify("bohemian rhapsody", "track", 20)`

2. **getNowPlaying**

   - **Description**: Get information about the currently playing track on Spotify, including device and volume info
   - **Parameters**: None
   - **Returns**: Object containing track name, artist, album, playback progress, duration, playback state, device info, volume, and shuffle/repeat status
   - **Example**: `getNowPlaying()`

3. **getMyPlaylists**

   - **Description**: Get a list of the current user's playlists on Spotify
   - **Parameters**:
     - `limit` (number, optional): Maximum number of playlists to return (default: 20)
     - `offset` (number, optional): Index of the first playlist to return (default: 0)
   - **Returns**: Array of playlists with their IDs, names, track counts, and public status
   - **Example**: `getMyPlaylists(10, 0)`

4. **getPlaylistTracks**

   - **Description**: Get a list of tracks in a specific Spotify playlist
   - **Parameters**:
     - `playlistId` (string): The Spotify ID of the playlist
     - `limit` (number, optional): Maximum number of tracks to return (default: 100)
     - `offset` (number, optional): Index of the first track to return (default: 0)
   - **Returns**: Array of tracks with their IDs, names, artists, album, duration, and added date
   - **Example**: `getPlaylistTracks("37i9dQZEVXcJZyENOWUFo7")`

5. **getRecentlyPlayed**

   - **Description**: Retrieves a list of recently played tracks from Spotify.
   - **Parameters**:
     - `limit` (number, optional): A number specifying the maximum number of tracks to return.
   - **Returns**: If tracks are found it returns a formatted list of recently played tracks else a message stating: "You don't have any recently played tracks on Spotify".
   - **Example**: `getRecentlyPlayed({ limit: 10 })`

6. **getUsersSavedTracks**

   - **Description**: Get a list of tracks saved in the user's "Liked Songs" library
   - **Parameters**:
     - `limit` (number, optional): Maximum number of tracks to return (1-50, default: 50)
     - `offset` (number, optional): Offset for pagination (0-based index, default: 0)
   - **Returns**: Formatted list of saved tracks with track names, artists, duration, track IDs, and when they were added to Liked Songs. Shows pagination info (e.g., "1-20 of 150").
   - **Example**: `getUsersSavedTracks({ limit: 20, offset: 0 })`

7. **getQueue**

   - **Description**: Get the currently playing track and upcoming items in the Spotify queue
   - **Parameters**:
     - `limit` (number, optional): Maximum number of upcoming items to show (1-50, default: 10)
   - **Returns**: Currently playing track and list of upcoming tracks in the queue
   - **Example**: `getQueue({ limit: 20 })`

8. **getAvailableDevices**

   - **Description**: Get information about the user's available Spotify Connect devices
   - **Parameters**: None
   - **Returns**: List of available devices with name, type, active status, volume, and device ID
   - **Example**: `getAvailableDevices()`

9. **removeUsersSavedTracks**

   - **Description**: Remove one or more tracks from the user's "Liked Songs" library (max 40 per request)
   - **Parameters**:
     - `trackIds` (array): Array of Spotify track IDs to remove (max 40)
   - **Returns**: Success confirmation message
   - **Example**: `removeUsersSavedTracks({ trackIds: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"] })`


### Play / Create Operations

1. **playMusic**

   - **Description**: Start playing a track, album, artist, or playlist on Spotify
   - **Parameters**:
     - `uri` (string, optional): Spotify URI of the item to play (overrides type and id)
     - `type` (string, optional): Type of item to play (track, album, artist, playlist)
     - `id` (string, optional): Spotify ID of the item to play
     - `deviceId` (string, optional): ID of the device to play on
   - **Returns**: Success status
   - **Example**: `playMusic({ uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6" })`
   - **Alternative**: `playMusic({ type: "track", id: "6rqhFgbbKwnb9MLmUQDhG6" })`

2. **pausePlayback**

   - **Description**: Pause the currently playing track on Spotify
   - **Parameters**:
     - `deviceId` (string, optional): ID of the device to pause
   - **Returns**: Success status
   - **Example**: `pausePlayback()`

3. **resumePlayback**

   - **Description**: Resume Spotify playback on the active device
   - **Parameters**:
     - `deviceId` (string, optional): ID of the device to resume playback on
   - **Returns**: Success status
   - **Example**: `resumePlayback()`

4. **skipToNext**

   - **Description**: Skip to the next track in the current playback queue
   - **Parameters**:
     - `deviceId` (string, optional): ID of the device
   - **Returns**: Success status
   - **Example**: `skipToNext()`

5. **skipToPrevious**

   - **Description**: Skip to the previous track in the current playback queue
   - **Parameters**:
     - `deviceId` (string, optional): ID of the device
   - **Returns**: Success status
   - **Example**: `skipToPrevious()`

6. **createPlaylist**

   - **Description**: Create a new playlist on Spotify
   - **Parameters**:
     - `name` (string): Name for the new playlist
     - `description` (string, optional): Description for the playlist
     - `public` (boolean, optional): Whether the playlist should be public (default: false)
   - **Returns**: Object with the new playlist's ID and URL
   - **Example**: `createPlaylist({ name: "Workout Mix", description: "Songs to get pumped up", public: false })`

7. **addTracksToPlaylist**

   - **Description**: Add tracks to an existing Spotify playlist
   - **Parameters**:
     - `playlistId` (string): ID of the playlist
     - `trackUris` (array): Array of track URIs or IDs to add
     - `position` (number, optional): Position to insert tracks
   - **Returns**: Success status and snapshot ID
   - **Example**: `addTracksToPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n", trackUris: ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh"] })`

8. **addToQueue**

   - **Description**: Adds a track, album, artist or playlist to the current playback queue
   - **Parameters**:
     - `uri` (string, optional): Spotify URI of the item to add to queue (overrides type and id)
     - `type` (string, optional): Type of item to queue (track, album, artist, playlist)
     - `id` (string, optional): Spotify ID of the item to queue
     - `deviceId` (string, optional): ID of the device to queue on
   - **Returns**: Success status
   - **Example**: `addToQueue({ uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6" })`
   - **Alternative**: `addToQueue({ type: "track", id: "6rqhFgbbKwnb9MLmUQDhG6" })`

9. **setVolume**

   - **Description**: Set the playback volume to a specific percentage (requires Spotify Premium)
   - **Parameters**:
     - `volumePercent` (number): The volume to set (0-100)
     - `deviceId` (string, optional): ID of the device to set volume on
   - **Returns**: Success status with the new volume level
   - **Example**: `setVolume({ volumePercent: 50 })`

10. **adjustVolume**

   - **Description**: Adjust the playback volume up or down by a relative amount (requires Spotify Premium)
   - **Parameters**:
     - `adjustment` (number): The amount to adjust volume by (-100 to 100). Positive values increase volume, negative values decrease it.
     - `deviceId` (string, optional): ID of the device to adjust volume on
   - **Returns**: Success status showing the volume change (e.g., "Volume increased from 50% to 60%")
   - **Example**: `adjustVolume({ adjustment: 10 })` (increase by 10%)
   - **Example**: `adjustVolume({ adjustment: -20 })` (decrease by 20%)


### Album Operations

1. **getAlbums**

   - **Description**: Get detailed information about one or more albums by their Spotify IDs
   - **Parameters**:
     - `albumIds` (string|array): A single album ID or array of album IDs (max 20)
   - **Returns**: Album details including name, artists, release date, type, total tracks, and ID. For single album returns detailed view, for multiple albums returns summary list.
   - **Example**: `getAlbums("4aawyAB9vmqN3uQ7FjRGTy")` or `getAlbums(["4aawyAB9vmqN3uQ7FjRGTy", "1DFixLWuPkv3KT3TnV35m3"])`

2. **getAlbumTracks**

   - **Description**: Get tracks from a specific album with pagination support
   - **Parameters**:
     - `albumId` (string): The Spotify ID of the album
     - `limit` (number, optional): Maximum number of tracks to return (1-50)
     - `offset` (number, optional): Offset for pagination (0-based index)
   - **Returns**: List of tracks from the album with track names, artists, duration, and IDs. Shows pagination info.
   - **Example**: `getAlbumTracks("4aawyAB9vmqN3uQ7FjRGTy", 10, 0)`

3. **saveOrRemoveAlbumForUser**

   - **Description**: Save or remove albums from the user's "Your Music" library
   - **Parameters**:
     - `albumIds` (array): Array of Spotify album IDs (max 20)
     - `action` (string): Action to perform: "save" or "remove"
   - **Returns**: Success status with confirmation message
   - **Example**: `saveOrRemoveAlbumForUser(["4aawyAB9vmqN3uQ7FjRGTy"], "save")`

4. **checkUsersSavedAlbums**

   - **Description**: Check if albums are saved in the user's "Your Music" library
   - **Parameters**:
     - `albumIds` (array): Array of Spotify album IDs to check (max 20)
   - **Returns**: Status of each album (saved or not saved)
   - **Example**: `checkUsersSavedAlbums(["4aawyAB9vmqN3uQ7FjRGTy", "1DFixLWuPkv3KT3TnV35m3"])`

### Playlist Operations

1. **getPlaylist**

   - **Description**: Get details of a specific Spotify playlist including tracks count, description and owner
   - **Parameters**:
     - `playlistId` (string): The Spotify ID of the playlist
   - **Returns**: Playlist name, owner, track count, visibility, description, ID, and URL
   - **Example**: `getPlaylist({ playlistId: "37i9dQZEVXcJZyENOWUFo7" })`

2. **updatePlaylist**

   - **Description**: Update the details of a Spotify playlist (name, description, public/private, collaborative)
   - **Parameters**:
     - `playlistId` (string): The Spotify ID of the playlist
     - `name` (string, optional): New name for the playlist
     - `description` (string, optional): New description for the playlist
     - `public` (boolean, optional): Whether the playlist should be public
     - `collaborative` (boolean, optional): Whether the playlist should be collaborative (requires public to be false)
   - **Returns**: Success confirmation with list of updated fields
   - **Example**: `updatePlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n", name: "New Name", public: true })`

3. **removeTracksFromPlaylist**

   - **Description**: Remove one or more tracks from a Spotify playlist (max 100 tracks per request)
   - **Parameters**:
     - `playlistId` (string): The Spotify ID of the playlist
     - `trackIds` (array): Array of Spotify track IDs to remove (max 100)
     - `snapshotId` (string, optional): The playlist snapshot ID to target a specific version
   - **Returns**: Success confirmation with the number of tracks removed
   - **Example**: `removeTracksFromPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n", trackIds: ["4iV5W9uYEdYUVa79Axb7Rh"] })`

4. **reorderPlaylistItems**

   - **Description**: Reorder a range of tracks within a Spotify playlist by moving them to a new position
   - **Parameters**:
     - `playlistId` (string): The Spotify ID of the playlist
     - `rangeStart` (number): The position of the first item to move (0-based index)
     - `insertBefore` (number): The position where the items should be inserted (0-based index)
     - `rangeLength` (number, optional): Number of consecutive items to move (defaults to 1)
     - `snapshotId` (string, optional): The playlist snapshot ID to target a specific version
   - **Returns**: Success confirmation with the move details
   - **Example**: `reorderPlaylistItems({ playlistId: "3cEYpjA9oz9GiPac4AsH4n", rangeStart: 2, insertBefore: 0 })`

## Setup

### Prerequisites

- Node.js v16+
- A Spotify Premium account
- A registered Spotify Developer application

### Installation

```bash
git clone https://github.com/marcelmarais/spotify-mcp-server.git
cd spotify-mcp-server
npm install
npm run build
```

### Creating a Spotify Developer Application

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Log in with your Spotify account
3. Click the "Create an App" button
4. Fill in the app name and description
5. Accept the Terms of Service and click "Create"
6. In your new app's dashboard, you'll see your **Client ID**
7. Click "Show Client Secret" to reveal your **Client Secret**
8. Click "Edit Settings" and add a Redirect URI (e.g., `http://127.0.0.1:8888/callback`)
9. Save your changes

### Spotify API Configuration

Create a `spotify-config.json` file in the project root (you can copy and modify the provided example):

```bash
# Copy the example config file
cp spotify-config.example.json spotify-config.json
```

Then edit the file with your credentials:

```json
{
  "clientId": "your-client-id",
  "clientSecret": "your-client-secret",
  "redirectUri": "http://127.0.0.1:8888/callback"
}
```

### Authentication Process

The Spotify API uses OAuth 2.0 for authentication. Follow these steps to authenticate your application:

1. Run the authentication script:

```bash
npm run auth
```

2. The script will generate an authorization URL. Open this URL in your web browser.

3. You'll be prompted to log in to Spotify and authorize your application.

4. After authorization, Spotify will redirect you to your specified redirect URI with a code parameter in the URL.

5. The authentication script will automatically exchange this code for access and refresh tokens.

6. These tokens will be saved to your `spotify-config.json` file, which will now look something like:

```json
{
  "clientId": "your-client-id",
  "clientSecret": "your-client-secret",
  "redirectUri": "http://localhost:8888/callback",
  "accessToken": "BQAi9Pn...kKQ",
  "refreshToken": "AQDQcj...7w",
  "expiresAt": 1677889354671
}
```

**Note**: The `expiresAt` field is a Unix timestamp (in milliseconds) indicating when the access token expires.

7. **Automatic Token Refresh**: The server will automatically refresh the access token when it expires (typically after 1 hour). The refresh happens transparently using the `refreshToken`, so you don't need to re-authenticate manually. If the refresh fails, you'll need to run `npm run auth` again to re-authenticate.

## Integrating with Claude Desktop, Cursor, and VsCode [Via Cline model extension](https://marketplace.visualstudio.com/items/?itemName=saoudrizwan.claude-dev)

To use your MCP server with Claude Desktop, add it to your Claude configuration:

```json
{
  "mcpServers": {
    "spotify": {
      "command": "node",
      "args": ["spotify-mcp-server/build/index.js"]
    }
  }
}
```

For Cursor, go to the MCP tab in `Cursor Settings` (command + shift + J). Add a server with this command:

```bash
node path/to/spotify-mcp-server/build/index.js
```

To set up your MCP correctly with Cline ensure you have the following file configuration set `cline_mcp_settings.json`:

```json
{
  "mcpServers": {
    "spotify": {
      "command": "node",
      "args": ["~/../spotify-mcp-server/build/index.js"],
      "autoApprove": ["getListeningHistory", "getNowPlaying"]
    }
  }
}
```

You can add additional tools to the auto approval array to run the tools without intervention.

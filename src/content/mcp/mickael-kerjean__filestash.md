---
name: "mickael-kerjean/filestash"
description: "Remote Storage Access: SFTP, S3, FTP, SMB, NFS, WebDAV, GIT, FTPS, gcloud, azure blob, sharepoint, etc."
description_tr: "Uzak depolama erişimi: SFTP, S3, FTP, SMB, NFS, WebDAV, GIT, FTPS, gcloud, azure blob, sharepoint ve daha fazlasını destekler."
category: "File Systems"
repo: "mickael-kerjean/filestash"
stars: 14247
url: "https://github.com/mickael-kerjean/filestash"
body_length: 12340
license: "AGPL-3.0"
language: "Go"
homepage: "https://www.filestash.app/"
body_tr: |-
  ![screenshot](https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/.assets/photo.jpg)

  # Bu nedir?

  <p>
      Depolama-agnostik bir Dropbox benzeri dosya yöneticisi olarak başladı ve her depolama protokolü ile çalışır: <a href="https://www.filestash.app/ftp-client.html">FTP</a>, <a href="https://www.filestash.app/ssh-file-transfer.html">SFTP</a>, <a href="https://www.filestash.app/s3-browser.html">S3</a>, <a href="https://www.filestash.app/smb-client.html">SMB</a>, <a href="https://www.filestash.app/webdav-client.html">WebDAV</a>, IPFS ve <a href="https://www.filestash.app/docs/plugin/#storage">20'nin üzerinde daha fazlası</a>.
  </p>

  <p>
      Dünyanın en iyi dosya yönetim platformu olmak istediğimiz şeye dönüştü; burada evrenin temel gerçekleri olmayan her şey bir plugin'de yaşar. Diğer platformlar "al ya da bırak" iken, bizimkisi size sağlam bir çekirdek ve görüşleri ele almak için bir plugin sistemi sunuyor. Gereksinimler ne kadar derin olursa olsun, tek sınır teknik değil, kendi yaratıcılığınız olacaktır.
  </p>

  <p>
      <a href="http://demo.filestash.app"></a>
  </p>

  # Temel Özellikler

  <ul>
      <li><a href="#vision--philosophy">Plugin Odaklı Mimari</a>: önemli olan her şey bir plugin'dir, <a href="https://www.filestash.app/docs/plugin/">ekosisteme</a> göz atın ya da <a href="https://www.filestash.app/docs/guide/plugin-development.html?origin=github">kendi plugin'inizi oluşturun</a>. Bu yaklaşımla, gereksiz yük ve şişkinlik olmadan tam olarak ihtiyacınız olanı alırsınız.</li>
      <li>Evrensel Erişim: web client'i verilerinize erişmenin sadece bir yoludur (gerçi harika bir yoldur, vanilla JS'de özel olarak tasarlanmıştır). <a href="https://www.filestash.app/docs/api/#api">API'ler</a> ve <a href="https://www.filestash.app/docs/guide/storage-gateway.html?origin=github">Geçitler</a> verilerinizi <a href="https://www.filestash.app/docs/guide/sftp-gateway.html?origin=github">SFTP</a>, S3, FTP, WebDAV, <a href="https://www.filestash.app/docs/guide/mcp-gateway.html?origin=github">MCP</a> ve AS2 gibi protokoller üzerinden de sunmanızı sağlar.</li>
      <li><a href="https://www.filestash.app/docs/plugin/#storage">Entegrasyonlar</a>: açık hedefimiz, pazardaki %100 depolama ve kimlik doğrulama teknolojisini desteklemektir. Olağan seçeneklerinizin ötesine geçebilirsiniz; örneğin, kimlik doğrulamayı <a href="https://github.com/mickael-kerjean/filestash/tree/master/server/plugin/plg_authenticate_wordpress">WordPress sitenize</a> devredelen bir <a href="https://www.filestash.app/docs/guide/virtual-filesystem.html?origin=github">sanal dosya sistemi</a> ve rollerini <a href="https://www.filestash.app/docs/guide/authorization.html#option-2-rbac">RBAC yetkilendirmesini</a> yönlendirmek için kullanabilirsiniz.</li>
      <li><a href="https://www.filestash.app/docs/guide/workflow-engine.html">İş Akışı Motoru</a>: dosyalarınıza olaylar üzerinde eylemleri zincirleyerek gerçekleşen her şeyi otomatikleştirin; Slack veya email aracılığıyla basit bildirimlerden tam MFT boru hatlarına ve hepsi arasındaki her şeye.</li>
      <li>Dosya Uygulamaları: mevcut uygulamalardan birini kullanın ya da <a href="https://www.filestash.app/docs/guide/plugin-development.html#xdg-open-plugins-in-depth">kendi uygulamanızı oluşturun</a>; astronomiden nakışa ve hepsi arasındaki her şey:
          <ul>
              <li><a href="https://demo.filestash.app/assets/plugin/application_photography.zip">fotoğrafçılık</a>: heif, nef, raf, <a href="https://www.filestash.app/tools/tiff-viewer.html">tiff</a>, raw, arw, sr2, srf, nrw, cr2, crw, x3f, pef, rw2, orf, mrw, mdc, mef, mos, dcr, kdc, 3fr, erf ve srw</li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_photography.zip">astronomi</a>: <a href="https://www.filestash.app/tools/fits-viewer.html">fits</a>, <a href="https://www.filestash.app/tools/xisf-viewer.html">xisf</a></li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_science.zip">bilim</a>: latex, plantuml ve pandoc derleyicileri ile</li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_musician.zip">müzik</a>: mid, midi, gp4 ve gp5</li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_gis.zip">CBS</a>: <a href="https://www.filestash.app/tools/geojson-viewer.html">geojson</a>, <a href="https://www.filestash.app/tools/shp-viewer.html">shp</a>, gpx, wms ve <a href="https://www.filestash.app/tools/dbf-viewer.html">dbf</a></li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_engineering.zip">veri mühendisliği</a>: <a href="https://www.filestash.app/tools/parquet-viewer.html">parquet</a>, <a href="https://www.filestash.app/tools/arrow-viewer.html">arrow</a>, <a href="https://www.filestash.app/tools/feather-viewer.html">feather</a>, <a href="https://www.filestash.app/tools/avro-viewer.html">avro</a>, <a href="https://www.filestash.app/tools/orc-viewer.html">orc</a>, <a href="https://www.filestash.app/tools/hdf5-viewer.html">hdf5</a>, <a href="https://www.filestash.app/tools/hdf5-viewer.html">h5</a>, <a href="https://www.filestash.app/tools/netcdf-viewer.html">netcdf</a>, <a href="https://www.filestash.app/tools/netcdf-viewer.html">nc</a>, rds, rda ve rdata</li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_dev.zip">geliştirme</a>: a, so, o, dylib, dll, tar, tgz, zip, har, cap, pcap, pcapng ve <a href="https://www.filestash.app/tools/sqlite-viewer.html">sqlite</a></li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_creative.zip">yaratıcı çalışma</a>: svg, <a href="https://www.filestash.app/tools/psd-viewer.html">psd</a>, ai, <a href="https://www.filestash.app/tools/sketch-viewer.html">sketch</a>, <a href="https://www.filestash.app/tools/cdr-viewer.html">cdr</a>, woff, woff2, ttf, otf, eot, exr, tga, pgm, ppm, dds, ktx, dpx, pcx, xpm, pnm, xbm, aai, xwd, cin, pbm, pcd, sgi, wbmp ve rgb</li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_biomed.zip">biyomedikal</a>: dicom, sam, bam, cif, pdb, xyz, sdf, mol, mol2 ve mmtf</li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_autodesk.zip">autodesk</a>: <a href="https://www.filestash.app/tools/dwg-viewer.html">dwg</a> ve <a href="https://www.filestash.app/tools/dxf-viewer.html">dxf</a></li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_adobe.zip">adobe</a>: <a href="https://www.filestash.app/tools/psd-viewer.html">psd</a>, ai, <a href="https://www.filestash.app/tools/xd-viewer.html">xd</a>, <a href="https://www.filestash.app/tools/dng-viewer.html">dng</a>, <a href="https://www.filestash.app/tools/eps-viewer.html">postscript</a>, aco, ase, swf</li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_3d.zip">3d</a>: fbx, gltf, obj, stl, step, mesh, ifc, dae</li>
              <li><a href="https://demo.filestash.app/assets/plugin/application_embroidery.zip">nakış</a>: dgt, dst, dsb, dsz, edr, exp, 10o, col, hus, inf, jef, ksm, pcm, pcs, pes, sew, shv, sst, tap, u01, vip, vp3 ve xxx</li>
              <li><a href="https://github.com/mickael-kerjean/filestash/tree/master/server/plugin/plg_widget_pgp">e2e</a>: pgp, gpg</li>
          </ul>
      </li>
      <li>Temalar: <br>
          
          
          
          
      </li>
      <li><a href="https://www.filestash.app/docs/guide/search.html">Arama</a>, <a href="https://www.filestash.app/features/smart-folder.html">akıllı klasörler</a> ve OCR'ler için yapay zeka özellikleri.</li>
      <li>... ve çok daha fazla <sub>çok <sub>daha fazla (versiyonlama, denetim, genel site, virüsten koruma, kota, sohbet, chromecast desteği, isteğe bağlı video transcoding, paylaşılan bağlantıları ağ sürücüsü olarak bağlama, ....)</sub></sub><br> Genel bir kural olarak, sorununuz dosyaları içeriyorsa, biz zaten <a href="https://www.filestash.app/docs/plugin/">bir plugin'e sahip</a> ya da bunun için bir plugin yapabiliriz</li>
  </ul>


  # Başlangıç

  Filestash'i kurmak için [Başlangıç](https://www.filestash.app/docs/?origin=github) rehberine gidin. Plugin'lerden yararlanmak istiyorsanız [envanteri](https://www.filestash.app/docs/plugin/?origin=github) ziyaret edin ya da [kendi plugin'lerinizi geliştirme](https://www.filestash.app/docs/guide/plugin-development.html?origin=github) hakkında bilgi edinin.

  Dosya yönetimi sorununuzda rehberlik ve uzman yardım istiyorsanız, [bir çağrı rezerve edin](https://www.filestash.app/tunnel/demo/?origin=github) ve Filestash'in sizin için doğru platform olup olmadığını anlamaya çalışalım.


  # Vizyon & Felsefe

  Hedefimiz basittir: **şimdiye kadar yapılan en iyi dosya yönetim platformunu inşa etmek. Nokta.** Ama "en iyi" farklı insanlar için farklı şeyler anlamına gelir, bu yüzden her şeyi plugin'leyebilir hale getirdik. Çekirdek arayüzleri tanımlar, plugin'ler bunları uygular. Bizim uygulamadan anlaşmazlığınız mı var? Kendi uygulamanızı yazın. Evrenin temel gerçekleri olmayan ve tartışmayı kışkırtabilecek her şey bir plugin'de yaşar. Temel özelliklerde listelenen her parça, başka bir implementasyonla değiştirebileceğiniz ya da tamamen kaldırabileceğiniz bir plugin'dir.

  Diyelim ki mevcut FTP sunucunuzun üzerinde kullanıcılarınıza Dropbox benzeri bir deneyim verme istiyorsunuz ([HN'de Dropbox lansmanı sırasında FTP adamı](https://news.ycombinator.com/item?id=9224) hatırlayın). <a href="https://github.com/mickael-kerjean/filestash/tree/master/server/plugin/plg_backend_ftp">FTP plugin'i</a> yapması gereken tek şey bu arayüzü uygulamaktır:
  ```go
  type IBackend interface {
  	Ls(path string) ([]os.FileInfo, error)           // bir klasördeki dosyaları listele
  	Stat(path string) (os.FileInfo, error)           // dosya durumu
  	Cat(path string) (io.ReadCloser, error)          // dosya indir
  	Mkdir(path string) error                         // klasör oluştur
  	Rm(path string) error                            // bir şey sil
  	Mv(from string, to string) error                 // bir şeyi yeniden adlandır
  	Save(path string, file io.Reader) error          // dosya kaydet
  	Touch(path string) error                         // dosya oluştur

  	// 2 diğer yöntemi atlamış durumdayım; biri bağlantı yeniden kullanımını etkinleştirmek için,
  	// diğeri login formunun nasıl görünmesi gerektiğini belirtmek için.
  }
  ```

  Filestash'in her temel bileşeni için uygulayabileceğiniz arayüzler vardır: depolamadan kimlik doğrulamaya, <a href="https://www.filestash.app/docs/guide/authorization.html">yetkilendirmeye</a>, özel uygulamalara, <a href="https://www.filestash.app/docs/guide/search.html">aramaya</a>, küçük resim oluşturmaya, frontend yamasına, middleware'e, endpoint oluşturmaya ve [plugin geliştirme rehberinde](https://www.filestash.app/docs/guide/plugin-development.html) belgelenen birkaç diğerine.

  Şu anda örneğinizde neyin kurulu olduğunu görmek için [/about](https://demo.filestash.app/about) bölümüne gidin. Plugin'lerin envanteri [burada belgelenmiştir](https://www.filestash.app/docs/plugin/)


  # Destek

  - Ticari Kullanıcılar → [destek sözleşmesi](https://www.filestash.app/pricing/?origin=github)
  - Bireyler için:
    - [#filestash](https://kiwiirc.com/nextclient/#irc://irc.libera.chat/#filestash?nick=guest??) IRC'de (libera.chat)
    - Bitcoin: `3LX5KGmSmHDj5EuXrmUvcg77EJxCxmdsgW`
    - [Open Collective](https://opencollective.com/filestash)


  # Kaynakça

  Filestash şunların omuzlarında durmaktadır: [katkıda bulunanlar](https://github.com/mickael-kerjean/filestash/graphs/contributors), [harika kütüphaneler](https://github.com/mickael-kerjean/filestash/blob/master/go.mod) geliştiren insanlar, bir sürü C malzemesi ([C standart kütüphanesi](https://imgs.xkcd.com/comics/dependency.png), [libjpeg](https://libjpeg-turbo.org/), [libpng](https://www.libpng.org/pub/png/libpng.html), [libgif](https://giflib.sourceforge.net/), [libraw](https://www.libraw.org/about) ve çok daha fazlası), [fontawesome](https://fontawesome.com), [material](https://material.io/icons/), gerçek cihazlarda test yapabilmemiz için [Browser stack](https://www.browserstack.com/), ve Nebraska'dan ve diğer yerlerden Filestash'in üzerinde oturduğu kritik parçaları şükransız bir şekilde yönetmiş olan çok sayıda kişi:
---

![screenshot](https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/.assets/photo.jpg)

# What is this?

<p>
    It started as a storage agnostic Dropbox-like file manager that works with every storage protocol: <a href="https://www.filestash.app/ftp-client.html">FTP</a>, <a href="https://www.filestash.app/ssh-file-transfer.html">SFTP</a>, <a href="https://www.filestash.app/s3-browser.html">S3</a>, <a href="https://www.filestash.app/smb-client.html">SMB</a>, <a href="https://www.filestash.app/webdav-client.html">WebDAV</a>, IPFS, and <a href="https://www.filestash.app/docs/plugin/#storage">about 20 more</a>.
</p>

<p>
    It grew into what we want to be the world's best file management platform, where everything that's not a fundamental truth of the universe lives in a plugin. Where other platforms are take-it-or-leave-it, ours gives you a rock solid core and a plugin system to handle opinions, so however deep requirements go, the only limit won't be technical but your own creativity.
</p>

<p>
    <a href="http://demo.filestash.app"></a>
</p>

# Key Features

<ul>
    <li><a href="#vision--philosophy">Plugin Driven Architecture</a>: everything that matters is a plugin, browse the <a href="https://www.filestash.app/docs/plugin/">ecosystem</a> or <a href="https://www.filestash.app/docs/guide/plugin-development.html?origin=github">build your own</a>. With this approach, you get exactly what you need without overhead and bloat.</li>
    <li>Universal Access: the web client is just one way to access your data (albeit an awesome one, handcrafted in vanilla JS). <a href="https://www.filestash.app/docs/api/#api">APIs</a> and <a href="https://www.filestash.app/docs/guide/storage-gateway.html?origin=github">Gateways</a> let you also expose your data over protocols like <a href="https://www.filestash.app/docs/guide/sftp-gateway.html?origin=github">SFTP</a>, S3, FTP, WebDAV, <a href="https://www.filestash.app/docs/guide/mcp-gateway.html?origin=github">MCP</a>, and AS2.</li>
    <li><a href="https://www.filestash.app/docs/plugin/#storage">Integrations</a>: our explicit goal is to support 100% of storage and authentication technologies on the market. Beyond your usual options, you can go much further, like a <a href="https://www.filestash.app/docs/guide/virtual-filesystem.html?origin=github">virtual filesystem</a> delegating authentication to your <a href="https://github.com/mickael-kerjean/filestash/tree/master/server/plugin/plg_authenticate_wordpress">WordPress site</a> and using its roles to drive <a href="https://www.filestash.app/docs/guide/authorization.html#option-2-rbac">RBAC authorization</a>.</li>
    <li><a href="https://www.filestash.app/docs/guide/workflow-engine.html">Workflow Engine</a>: automate anything that happens to your files by chaining actions on events, from simple notifications via Slack or email to full on MFT pipelines and everything in between.</li>
    <li>File Apps: use any of the existing apps or <a href="https://www.filestash.app/docs/guide/plugin-development.html#xdg-open-plugins-in-depth">build your own</a>, from astronomy to embroidery and everything in between like:
        <ul>
            <li><a href="https://demo.filestash.app/assets/plugin/application_photography.zip">photography</a>: heif, nef, raf, <a href="https://www.filestash.app/tools/tiff-viewer.html">tiff</a>, raw, arw, sr2, srf, nrw, cr2, crw, x3f, pef, rw2, orf, mrw, mdc, mef, mos, dcr, kdc, 3fr, erf and srw</li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_photography.zip">astronomy</a>: <a href="https://www.filestash.app/tools/fits-viewer.html">fits</a>, <a href="https://www.filestash.app/tools/xisf-viewer.html">xisf</a></li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_science.zip">science</a>: with latex, plantuml & pandoc compilers</li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_musician.zip">music</a>: mid, midi, gp4 and gp5</li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_gis.zip">GIS</a>: <a href="https://www.filestash.app/tools/geojson-viewer.html">geojson</a>, <a href="https://www.filestash.app/tools/shp-viewer.html">shp</a>, gpx, wms and <a href="https://www.filestash.app/tools/dbf-viewer.html">dbf</a></li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_engineering.zip">data engineering</a>: <a href="https://www.filestash.app/tools/parquet-viewer.html">parquet</a>, <a href="https://www.filestash.app/tools/arrow-viewer.html">arrow</a>, <a href="https://www.filestash.app/tools/feather-viewer.html">feather</a>, <a href="https://www.filestash.app/tools/avro-viewer.html">avro</a>, <a href="https://www.filestash.app/tools/orc-viewer.html">orc</a>, <a href="https://www.filestash.app/tools/hdf5-viewer.html">hdf5</a>, <a href="https://www.filestash.app/tools/hdf5-viewer.html">h5</a>, <a href="https://www.filestash.app/tools/netcdf-viewer.html">netcdf</a>, <a href="https://www.filestash.app/tools/netcdf-viewer.html">nc</a>, rds, rda and rdata</li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_dev.zip">dev</a>: a, so, o, dylib, dll, tar, tgz, zip, har, cap, pcap, pcapng and <a href="https://www.filestash.app/tools/sqlite-viewer.html">sqlite</a></li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_creative.zip">creative work</a>: svg, <a href="https://www.filestash.app/tools/psd-viewer.html">psd</a>, ai, <a href="https://www.filestash.app/tools/sketch-viewer.html">sketch</a>, <a href="https://www.filestash.app/tools/cdr-viewer.html">cdr</a>, woff, woff2, ttf, otf, eot, exr, tga, pgm, ppm, dds, ktx, dpx, pcx, xpm, pnm, xbm, aai, xwd, cin, pbm, pcd, sgi, wbmp and rgb</li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_biomed.zip">biomedical</a>: dicom, sam, bam, cif, pdb, xyz, sdf, mol, mol2 and mmtf</li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_autodesk.zip">autodesk</a>: <a href="https://www.filestash.app/tools/dwg-viewer.html">dwg</a> and <a href="https://www.filestash.app/tools/dxf-viewer.html">dxf</a></li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_adobe.zip">adobe</a>: <a href="https://www.filestash.app/tools/psd-viewer.html">psd</a>, ai, <a href="https://www.filestash.app/tools/xd-viewer.html">xd</a>, <a href="https://www.filestash.app/tools/dng-viewer.html">dng</a>, <a href="https://www.filestash.app/tools/eps-viewer.html">postscript</a>, aco, ase, swf</li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_3d.zip">3d</a>: fbx, gltf, obj, stl, step, mesh, ifc, dae</li>
            <li><a href="https://demo.filestash.app/assets/plugin/application_embroidery.zip">embroidery</a>: dgt, dst, dsb, dsz, edr, exp, 10o, col, hus, inf, jef, ksm, pcm, pcs, pes, sew, shv, sst, tap, u01, vip, vp3 and xxx</li>
            <li><a href="https://github.com/mickael-kerjean/filestash/tree/master/server/plugin/plg_widget_pgp">e2e</a>: pgp, gpg</li>
        </ul>
    </li>
    <li>Themes: <br>
        
        
        
        
    </li>
    <li>AI features for <a href="https://www.filestash.app/docs/guide/search.html">search</a>, <a href="https://www.filestash.app/features/smart-folder.html">smart folders</a> and OCRs.</li>
    <li>... and much <sub>much <sub>more (versioning, audit, public site, antivirus, quota, chat, chromecast support, on demand video transcoding, mounting shared links as network drive, ....)</sub></sub><br> As a rule of thumb, if your problem involves files, we either already <a href="https://www.filestash.app/docs/plugin/">have a plugin</a> for it or can make a plugin for it
</ul>


# Getting Started

To install Filestash, head to the [Getting started](https://www.filestash.app/docs/?origin=github) guide. If you want to leverage plugins, head over to the [inventory](https://www.filestash.app/docs/plugin/?origin=github), or learn about [developing your own plugins](https://www.filestash.app/docs/guide/plugin-development.html?origin=github).

If you want guidance and expert help on your file management problem, [book a call](https://www.filestash.app/tunnel/demo/?origin=github) and let's figure out if Filestash is the right platform for you.


# Vision & Philosophy

Our goal is simple: **to build the best file management platform ever made. Period.** But "best" means different things to different people, so we made everything pluggable. The core defines interfaces, plugins implement them. Disagree with our implementation? Write your own. Anything that isn't a fundamental truth of the universe and might spark a debate belongs in a plugin. Literally every piece listed in the key features is a plugin you can swap for another implementation or remove entirely.

Say you want to give your users a Dropbox like experience on top of your existing FTP server (remember the [FTP guy during the Dropbox launch on HN](https://news.ycombinator.com/item?id=9224)?). All the [FTP plugin](https://github.com/mickael-kerjean/filestash/tree/master/server/plugin/plg_backend_ftp) does is implement this interface:
```go
type IBackend interface {
	Ls(path string) ([]os.FileInfo, error)           // list files in a folder
	Stat(path string) (os.FileInfo, error)           // file stat
	Cat(path string) (io.ReadCloser, error)          // download a file
	Mkdir(path string) error                         // create a folder
	Rm(path string) error                            // remove something
	Mv(from string, to string) error                 // rename something
	Save(path string, file io.Reader) error          // save a file
	Touch(path string) error                         // create a file

	// I have omitted 2 other methods, a first one to enable connections reuse and
	// another one to declare what should the login form be like.
}
```

There are interfaces you can implement for every key component of Filestash: from storage, to authentication, <a href="https://www.filestash.app/docs/guide/authorization.html">authorisation</a>, custom apps, <a href="https://www.filestash.app/docs/guide/search.html">search</a>, thumbnailing, frontend patches, middleware, endpoint creation and a few others documented in the [plugin development guide](https://www.filestash.app/docs/guide/plugin-development.html).

To see what's currently installed in your instance, head over to [/about](https://demo.filestash.app/about). The inventory of plugins is [documented here](https://www.filestash.app/docs/plugin/)


# Support

- Commercial Users → [support contract](https://www.filestash.app/pricing/?origin=github)
- For individuals:
  - [#filestash](https://kiwiirc.com/nextclient/#irc://irc.libera.chat/#filestash?nick=guest??) on IRC (libera.chat)
  - Bitcoin: `3LX5KGmSmHDj5EuXrmUvcg77EJxCxmdsgW`
  - [Open Collective](https://opencollective.com/filestash)


# Credits

Filestash stands on the shoulder of: [contributors](https://github.com/mickael-kerjean/filestash/graphs/contributors), folks developing [awesome libraries](https://github.com/mickael-kerjean/filestash/blob/master/go.mod), a whole bunch of C stuff (the [C standard library](https://imgs.xkcd.com/comics/dependency.png), [libjpeg](https://libjpeg-turbo.org/), [libpng](https://www.libpng.org/pub/png/libpng.html), [libgif](https://giflib.sourceforge.net/), [libraw](https://www.libraw.org/about) and many more), [fontawesome](https://fontawesome.com), [material](https://material.io/icons/), [Browser stack](https://www.browserstack.com/) to let us test on real devices, and the many guys from Nebraska and elsewhere who have been thanklessly maintaining the critical pieces that Filestash sits on top:



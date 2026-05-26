---
name: "video-creator/ffmpeg-mcp"
description: "Using ffmpeg command line to achieve an mcp server, can be very convenient, through the dialogue to achieve the local video search, tailoring, stitching, playback and other functions"
description_tr: "ffmpeg komut satırını kullanarak bir MCP sunucusu oluşturun ve diyalog aracılığıyla yerel videolarınızda arama, kesme, birleştirme ve oynatma gibi işlemleri kolayca gerçekleştirin."
category: "Multimedia Process"
repo: "video-creator/ffmpeg-mcp"
stars: 134
url: "https://github.com/video-creator/ffmpeg-mcp"
body_length: 2944
license: "MIT"
language: "Python"
body_tr: |-
  # FFmpeg-MCP
  FFmpeg komut satırını kullanarak bir MCP sunucusu oluşturun, çok uygun olabilir, diyalog aracılığıyla yerel video arama, kesme, birleştirme, oynatma ve diğer işlevleri gerçekleştirin

  <a href="https://glama.ai/mcp/servers/@video-creator/ffmpeg-mcp">
    
  </a>

  ## Desteklenen Araçlar
  Sunucu aşağıdaki araçları uygular: <br/>
  - `find_video_path`
    Parametreler dizin ve dosya adıdır, dosya adı tam olabilir veya sonek olmayabilir, dizinde özyinelemeli arama yapılır, tam yolu döndürür
  - `get_video_info`
    Parametreler video yoludur, video bilgisini döndürür, süre/fps/codec/width/height gibi özellikleri içerir.
  - `clip_video`
    Parametre dosya yolu, başlangıç zamanı, bitiş zamanı veya süresidir, kırpılmış dosya yolunu döndürür
  - `concat_videos`
    Parametreler dosya listesi, çıkış yoludur ve dosya listesindeki video öğeleri genişlik, yükseklik, kare hızı vb. gibi özellikleri tutarlıysa, hızlı mod sentezi otomatik olarak kullanılır
  - `play_video`
    ffplay ile video/ses oynatın, mov/mp4/avi/mkv/3gp gibi birçok formatı destekler, video_path: video yolu speed: oynatma hızı loop: oynatma sayısı
  - `overlay_video`
    İki video üst üste koyma. <br/>
    background_video: arka plan video yolu <br/>
    overlay_video: ön video yolu <br/>
    output_path: çıkış video yolu<br/>
    position: göreceli konum<br/>
    dx: x ofseti<br/>
    dy: y ofseti<br/>
  - `scale_video`
    Video ölçekleme. <br/>
    video_path: giriş video yolu <br/>
    width: çıkış video genişliği, -2 oranı koru <br/>
    height: çıkış video yüksekliği, -2 oranı koru <br/>
    output_path: çıkış video yolu <br/>
  - `extract_frames_from_video`
    Bir videodan görüntü çıkarın.<br/>
    Parametreler: <br/>
    video_path (str): Video dosyasının yolu.<br/>
    fps (int): Belirtilen saniye sayısı başına bir kare çıkarın. 0 olarak ayarlanırsa tüm kareleri çıkarın; 1 olarak ayarlanırsa saniyede bir kare çıkarın.<br/>
    output_folder (str): Görüntülerin kaydedileceği dizin.<br/>
    format (int): Çıkarılan görüntülerin formatı; 0: PNG, 1: JPG, 2: WEBP.<br/>
    total_frames (int): Çıkarılacak maksimum kare sayısı. 0 olarak ayarlanırsa sınır yoktur<br/>
  <br/>
  Daha fazla özellik yakında geliyor

  ## Kurulum Prosedürü
  1. Projeyi İndir
  ```
  git clone  https://github.com/video-creator/ffmpeg-mcp.git
  cd ffmpeg-mcp
  uv sync
  ```

  2. Cline'de Yapılandırma
  ```
  {
    "mcpServers": {
      "ffmpeg-mcp": {
        "autoApprove": [],
        "disabled": false,
        "timeout": 60,
        "command": "uv",
        "args": [
          "--directory",
          "/Users/xxx/Downloads/ffmpeg-mcp",
          "run",
          "ffmpeg-mcp"
        ],
        "transportType": "stdio"
      }
    }
  }
  ```
  Not: args içindeki değer: `/Users/XXX/Downloads/ffmpeg` yerine gerçek indirilen ffmpeg-mcp dizinini yazmanız gerekir

  ## Desteklenen Platformlar
  Şu anda yalnızca macos platformları desteklenmektedir; ARM64 veya x86_64 dahil
---

# FFmpeg-MCP
Using ffmpeg command line to achieve an mcp server, can be very convenient, through the dialogue to achieve the local video search, tailoring, stitching, playback and other functions

<a href="https://glama.ai/mcp/servers/@video-creator/ffmpeg-mcp">
  
</a>

## Support Tools
The server implements the following tools: <br/>
- `find_video_path`
  The parameters are directory and file name, file name can be complete, or is not suffixed, recursive search in the directory, return the full path
- `get_video_info`
  The parameters are video path, return the video info, linkes duration/fps/codec/width/height.
- `clip_video`
  The parameter is the file path, start time, end time or duration, and returns the trimmed file path
- `concat_videos`
  The parameters are the list of files, the output path, and if the video elements in the list of files, such as width, height, frame rate, etc., are consistent, quick mode synthesis is automatically used
- `play_video`
  Play video/audio with ffplay, support many format, like mov/mp4/avi/mkv/3gp, video_path: video path speed: play rate loop: play count
- `overlay_video`
  Two video overlay. <br/>
  background_video: backgroud video path <br/>
  overlay_video: front video path <br/>
  output_path: output video path<br/>
  position: relative location<br/>
  dx: x offset<br/>
  dy: y offset<br/>
- `scale_video`
  Video scale. <br/>
  video_path: in video path <br/>
  width: out video width, -2 keep aspect <br/>
  height: out video height, -2 keep aspect <br/>
  output_path: output video path <br/>
- `extract_frames_from_video`
  Extract images from a video.<br/>
  Parameters: <br/>
  video_path (str): The path to the video.<br/>
  fps (int): Extract one frame every specified number of seconds. If set to 0, extract all frames; if set to 1, extract one frame per second.<br/>
  output_folder (str): The directory where the images will be saved.<br/>
  format (int): The format of the extracted images; 0: PNG, 1: JPG, 2: WEBP.<br/>
  total_frames (int): The maximum number of frames to extract. If set to 0, there is no limit<br/>
<br/>
More features are coming

## Installation procedure
1. Download project
```
git clone  https://github.com/video-creator/ffmpeg-mcp.git
cd ffmpeg-mcp
uv sync
```

2. Configuration in Cline
```
{
  "mcpServers": {
    "ffmpeg-mcp": {
      "autoApprove": [],
      "disabled": false,
      "timeout": 60,
      "command": "uv",
      "args": [
        "--directory",
        "/Users/xxx/Downloads/ffmpeg-mcp",
        "run",
        "ffmpeg-mcp"
      ],
      "transportType": "stdio"
    }
  }
}
```
Note: the value:`/Users/XXX/Downloads/ffmpeg` in args  need to replace the actual download ffmpeg-mcp directory

## Supported platforms
Currently, only macos platforms are supported, including ARM64 or x86_64

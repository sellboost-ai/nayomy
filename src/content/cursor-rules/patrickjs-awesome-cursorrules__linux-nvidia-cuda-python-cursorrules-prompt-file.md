---
name: "linux-nvidia-cuda-python-cursorrules-prompt-file"
clean_name: "Linux Nvidia Cuda Python"
description: "Cursor rules for Linux development with NVIDIA CUDA and Python integration."
description_tr: "Linux geliştirme için NVIDIA CUDA ve Python entegrasyonuyla birlikte Cursor kuralları."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/linux-nvidia-cuda-python-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/linux-nvidia-cuda-python-cursorrules-prompt-file.mdc"
body_length: 2150
file_extension: ".mdc"
body_tr: |-
  1. **Proje Özeti**:

    - **Uygulama Adı**: 'srt-model-quantizing'  
    - **Geliştirici**: SolidRusT Networks  
    - **İşlevsellik**: Hugging Face'ten modelleri indiren, nicelikleştiren ve Hugging Face ile uyumlu bir depoya yükleyen bir pipeline.  
    - **Tasarım Felsefesi**: Basitliğe odaklanmıştır—kullanıcılar depoyu klonlayabilmeli, bağımlılıkları yükleyebilmeli ve minimum çabayla Python veya Bash kullanarak uygulamayı çalıştırabilmelidir.  
    - **Donanım Uyumluluğu**: Nvidia CUDA ve AMD ROCm GPU'larını destekler; belirli donanım ve sürücülere bağlı olarak ayarlamalar gerekebilir.  
    - **Platform**: Yalnızca Linux sunucularında çalışması amaçlanmıştır.

  2. **Geliştirme İlkeleri**:

    - **Verimlilik**: Nicelikleştirme işleminin akışkan, verimli ve hatasız olmasını sağlayın.  
    - **Güvenilirlik**: Uyumsuz modeller veya nicelikleştirme hataları gibi kenar durumlarını net ve bilgilendirici hata mesajları ve önerilen çözümlerle yönetin.  
    - **Dokümantasyon**: README.md ve gerekli tüm talimatlar ve örnekler dahil olmak üzere tüm dokümantasyonu güncel tutun.

  3. **AI Aracı Hizalaması**:

    - **Basitlik ve Kullanılabilirlik**: Tüm geliştirme ve geliştirmeler, uygulamanın basitliğini ve kullanım kolaylığını korumaya öncelik vermelidir.  
    - **Kod Kalitesi**: Depo yapısını düzenli olarak gözden geçirin, ölü veya yinelenen kodu kaldırın, eksik bölümleri ele alın ve dokümantasyonun güncel olmasını sağlayın.  
    - **Geliştirme-Hizalama Dosyası**: İlerlemeyi, öncelikleri izlemek ve geliştirme döngüsü boyunca proje hedefleriyle hizalanmayı sağlamak için bir markdown dosyası kullanın.

  4. **Sürekli İyileştirme**:

    - **Geri Bildirim**: Uygulamanın işlevselliği ve kullanıcı deneyimi hakkında aktif olarak geri bildirim arayın.  
    - **Geliştirmeler**: Uygulamayı daha verimli veya kullanıcı dostu hale getirebilecek iyileştirmeleri önerin; yapılan tüm değişikliklerin uygulamanın temel ilkelerini korusundan emin olun.  
    - **Değişikliklerin Dokümantasyonu**: Geliştirme sırasında yapılan tüm geliştirmeleri, hata düzeltmelerini veya değişiklikleri açık şekilde belgelendirerek şeffaflık ve bakımlanabilirliği sağlayın.
---

1. **Project Overview**:

  - **App Name**: 'srt-model-quantizing'  
  - **Developer**: SolidRusT Networks  
  - **Functionality**: A pipeline for downloading models from Hugging Face, quantizing them, and uploading them to a Hugging Face-compatible repository.  
  - **Design Philosophy**: Focused on simplicity—users should be able to clone the repository, install dependencies, and run the app using Python or Bash with minimal effort.  
  - **Hardware Compatibility**: Supports both Nvidia CUDA and AMD ROCm GPUs, with potential adjustments needed based on specific hardware and drivers.  
  - **Platform**: Intended to run on Linux servers only.

2. **Development Principles**:

  - **Efficiency**: Ensure the quantization process is streamlined, efficient, and free of errors.  
  - **Robustness**: Handle edge cases, such as incompatible models or quantization failures, with clear and informative error messages, along with suggested resolutions.  
  - **Documentation**: Keep all documentation up to date, including the README.md and any necessary instructions or examples.

3. **AI Agent Alignment**:

  - **Simplicity and Usability**: All development and enhancements should prioritize maintaining the app's simplicity and ease of use.  
  - **Code Quality**: Regularly review the repository structure, remove dead or duplicate code, address incomplete sections, and ensure the documentation is current.  
  - **Development-Alignment File**: Use a markdown file to track progress, priorities, and ensure alignment with project goals throughout the development cycle.

4. **Continuous Improvement**:

  - **Feedback**: Actively seek feedback on the app's functionality and user experience.  
  - **Enhancements**: Suggest improvements that could make the app more efficient or user-friendly, ensuring any changes maintain the app's core principles.  
  - **Documentation of Changes**: Clearly document any enhancements, bug fixes, or changes made during development to ensure transparency and maintainability.

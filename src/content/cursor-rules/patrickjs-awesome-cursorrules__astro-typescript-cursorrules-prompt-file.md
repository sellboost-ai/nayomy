---
name: "astro-typescript-cursorrules-prompt-file"
clean_name: "Astro TypeScript"
description: "Cursor rules for Astro development with TypeScript integration."
description_tr: "Astro geliştirme için Cursor kuralları, TypeScript entegrasyonu dahil."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/astro-typescript-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/astro-typescript-cursorrules-prompt-file.mdc"
body_length: 2594
file_extension: ".mdc"
body_tr: |-
  ```json
  {
    "rules": {
      "commit_message_guidelines": {
        "description": "Geleneksel commit mesajları oluşturmak için yönergeler.",
        
        "format": {
          "description": "Conventional commits spesifikasyonunu kullanarak commit mesajları için format.",
          "body": "[opsiyonel scope]: \n\n[opsiyonel body]\n\n[opsiyonel footer(lar)]"
        },
        
        "enabled": true,
        
        "rules": [
          {
            "description": "Her zaman türü ve opsiyonel scope'u küçük harflerle içeren geleneksel bir commit öneriniz."
          },
          {
            "description": "Commit mesajını kısa tutunuz ve 60 karakteri aşmayınız."
          },
          {
            "description": "Commit mesajının terminal'e yapıştırılmaya hazır olduğundan emin olunuz."
          },
          {
            "description": "Sadece mesajı değil, tam commit komutunu sağlayınız."
          }
        ],
        
        "examples": [
          {
            "prompt": "<diff_context> /commit",
            "response": "git commit -m 'feat: add responsive navbar with TailwindCSS'"
          }
        ]
      },
      
      "development_guidelines": {
        "description": "Astro, TypeScript ve TailwindCSS ile kod geliştirmek için yönergeler.",
        
        "enabled": true,
        
        "rules": [
          {
            "description": "Proje genelinde tip güvenliğini sağlamak için katı TypeScript ayarlarını uygulayınız."
          },
          {
            "description": "Tüm stil işlemleri için TailwindCSS kullanınız, utility-first yaklaşımı aklında tutunuz."
          },
          {
            "description": "Astro bileşenlerinin modüler, yeniden kullanılabilir ve açık bir sorumluluk ayrımını korumasını sağlayınız."
          }
        ]
      },
      
      "coding_style": {
        "description": "Tutarlı kodlama stilini korumak için yönergeler.",
        
        "enabled": true,
        
        "rules": [
          {
            "description": "Kod, yol/dosyaadı ile tek satırlık bir yorum ile başlamalıdır."
          },
          {
            "description": "Yorumlar etkiyi değil, amacı açıklamalıdır."
          },
          {
            "description": "Modülarite, DRY prensipleri ve performansa öncelik veriniz."
          }
        ]
      },
      
      "custom_slash_commands": {
        "description": "Özel slash komutları.",
        
        "enabled": true,
        
        "commands": [
          {
            "name": "/commit",
            "description": "Conventional commits spesifikasyonunu kullanarak bir Git commit mesajı oluşturunuz.",
            "enabled": true
          }
        ]
      }
    }
  }
  ```
---

{
  "rules": {
    "commit_message_guidelines": {
      "description": "Guidelines for creating conventional commit messages.",
      
      "format": {
        "description": "The format for commit messages using the conventional commits spec.",
        "body": "[optional scope]: \n\n[optional body]\n\n[optional footer(s)]"
      },
      
      "enabled": true,
      
      "rules": [
        {
          "description": "Always suggest a conventional commit with a type and optional scope in lowercase letters."
        },
        {
          "description": "Keep the commit message concise and within 60 characters."
        },
        {
          "description": "Ensure the commit message is ready to be pasted into the terminal without further editing."
        },
        {
          "description": "Provide the full command to commit, not just the message."
        }
      ],
      
      "examples": [
        {
          "prompt": "<diff_context> /commit",
          "response": "git commit -m 'feat: add responsive navbar with TailwindCSS'"
        }
      ]
    },
    
    "development_guidelines": {
      "description": "Guidelines for developing code with Astro, TypeScript, and TailwindCSS.",
      
      "enabled": true,
      
      "rules": [
        {
          "description": "Enforce strict TypeScript settings, ensuring type safety across the project."
        },
        {
          "description": "Use TailwindCSS for all styling, keeping the utility-first approach in mind."
        },
        {
          "description": "Ensure Astro components are modular, reusable, and maintain a clear separation of concerns."
        }
      ]
    },
    
    "coding_style": {
      "description": "Guidelines for maintaining consistent coding style.",
      
      "enabled": true,
      
      "rules": [
        {
          "description": "Code must start with path/filename as a one-line comment."
        },
        {
          "description": "Comments should describe purpose, not effect."
        },
        {
          "description": "Prioritize modularity, DRY principles, and performance."
        }
      ]
    },
    
    "custom_slash_commands": {
      "description": "Custom slash commands.",
      
      "enabled": true,
      
      "commands": [
        {
          "name": "/commit",
          "description": "Generate a Git commit message using the conventional commits spec.",
          "enabled": true
        }
      ]
    }
  }
}

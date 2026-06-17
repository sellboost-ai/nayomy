---
name: "astro-typescript-cursorrules-prompt-file"
clean_name: "Astro TypeScript"
description: "Cursor rules for Astro development with TypeScript integration."
description_tr: "Astro geliştirme için TypeScript entegrasyonlu cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/astro-typescript-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/astro-typescript-cursorrules-prompt-file.mdc"
body_length: 2594
file_extension: ".mdc"
body_tr: |-
  ```json
  {
    "rules": {
      "commit_message_guidelines": {
        "description": "Konvansiyonel commit mesajları oluşturmak için yönergeler.",
        
        "format": {
          "description": "Konvansiyonel commits spesifikasyonunu kullanan commit mesajları için format.",
          "body": "[opsiyonel scope]: \n\n[opsiyonel body]\n\n[opsiyonel footer(s)]"
        },
        
        "enabled": true,
        
        "rules": [
          {
            "description": "Her zaman küçük harflerle yazılmış bir type ve opsiyonel scope ile konvansiyonel commit önerin."
          },
          {
            "description": "Commit mesajını kısa tutun ve 60 karakterin içinde kalın."
          },
          {
            "description": "Commit mesajının terminal'e yapıştırılmaya hazır olduğundan emin olun, başka bir düzenleme gerekmez."
          },
          {
            "description": "Tam commit komutunu sağlayın, sadece mesaj değil."
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
            "description": "Katı TypeScript ayarlarını uygulayın, proje genelinde tür güvenliğini sağlayın."
          },
          {
            "description": "Tüm stil için TailwindCSS kullanın, utility-first yaklaşımını göz önünde bulundurun."
          },
          {
            "description": "Astro bileşenlerinin modüler, yeniden kullanılabilir olduğundan ve net bir sorumluluk ayrımı sağladığından emin olun."
          }
        ]
      },
      
      "coding_style": {
        "description": "Tutarlı kodlama stilini korumak için yönergeler.",
        
        "enabled": true,
        
        "rules": [
          {
            "description": "Kod, tek satırlık bir yorum olarak path/dosya adı ile başlamalıdır."
          },
          {
            "description": "Yorumlar etkiyi değil, amacı açıklamalıdır."
          },
          {
            "description": "Modülarite, DRY prensipleri ve performansı önceliklendirin."
          }
        ]
      },
      
      "custom_slash_commands": {
        "description": "Özel slash komutları.",
        
        "enabled": true,
        
        "commands": [
          {
            "name": "/commit",
            "description": "Konvansiyonel commits spesifikasyonunu kullanan bir Git commit mesajı oluşturun.",
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

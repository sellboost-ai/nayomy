---
name: "astro-typescript-cursorrules-prompt-file"
clean_name: "Astro TypeScript"
description: "Cursor rules for Astro development with TypeScript integration."
description_tr: "Astro geliştirme için TypeScript entegrasyonlu cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/astro-typescript-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/astro-typescript-cursorrules-prompt-file.mdc"
body_length: 2594
file_extension: ".mdc"
body_tr: |-
  ```json
  {
    "rules": {
      "commit_message_guidelines": {
        "description": "Geleneksel commit mesajları oluşturmak için kılavuzlar.",
        
        "format": {
          "description": "Geleneksel commits spesifikasyonunu kullanarak commit mesajlarının formatı.",
          "body": "[isteğe bağlı scope]: \n\n[isteğe bağlı body]\n\n[isteğe bağlı footer(s)]"
        },
        
        "enabled": true,
        
        "rules": [
          {
            "description": "Her zaman küçük harflerle yazılmış bir tür ve isteğe bağlı scope içeren geleneksel bir commit öner."
          },
          {
            "description": "Commit mesajını kısa tutun ve 60 karakteri geçmeyin."
          },
          {
            "description": "Commit mesajının terminal'e yapıştırılmaya hazır olduğundan ve daha fazla düzenlemeye ihtiyaç duymadığından emin olun."
          },
          {
            "description": "Tam commit komutunu sağla, yalnızca mesajı değil."
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
        "description": "Astro, TypeScript ve TailwindCSS ile kod geliştirme kılavuzları.",
        
        "enabled": true,
        
        "rules": [
          {
            "description": "Katı TypeScript ayarlarını uygula ve proje genelinde tip güvenliğini sağla."
          },
          {
            "description": "Tüm stillemeler için TailwindCSS kullan ve utility-first yaklaşımı göz önünde bulundur."
          },
          {
            "description": "Astro bileşenlerinin modüler, yeniden kullanılabilir olduğundan ve açık bir sorumluluk ayrımını sürdürdüğünden emin ol."
          }
        ]
      },
      
      "coding_style": {
        "description": "Tutarlı kod stilini korumak için kılavuzlar.",
        
        "enabled": true,
        
        "rules": [
          {
            "description": "Kod, yol/dosya adı ile tek satırlık bir yorum olarak başlamalıdır."
          },
          {
            "description": "Yorumlar amacını açıklamalı, etkisini değil."
          },
          {
            "description": "Modülarite, DRY prensipleri ve performansı önceliktlendir."
          }
        ]
      },
      
      "custom_slash_commands": {
        "description": "Özel slash komutları.",
        
        "enabled": true,
        
        "commands": [
          {
            "name": "/commit",
            "description": "Geleneksel commits spesifikasyonunu kullanarak bir Git commit mesajı oluştur.",
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

---
name: "eval"
description_en: "Evaluate and rank agent results by metric or LLM judge for an AgentHub session. Use when the user runs /hub:eval or asks to score, compare, or pick a winner among completed AgentHub agents."
description_tr: "AgentHub oturumundaki agent sonuçlarını metrik veya LLM judge ile değerlendirin ve sıralayın. Kullanıcı /hub:eval komutunu çalıştırdığında veya tamamlanan AgentHub agent'ları puanlamak, karşılaştırmak ya da kazananı seçmek istediğinde kullanılır."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18402
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/eval/SKILL.md"
path: ".gemini/skills/eval/SKILL.md"
is_collection: false
body_length: 2224
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /hub:eval — Agent Sonuçlarını Değerlendir
  
  Bir oturum için tüm agent sonuçlarını sırala. Metrik tabanlı değerlendirmeyi (komut çalıştır), LLM hakim (diff karşılaştır) veya hibrid değerlendirmeyi destekler.
  
  ## Kullanım
  
  ```
  /hub:eval                           # En son oturumu yapılandırılmış kriterlere göre değerlendir
  /hub:eval 20260317-143022           # Belirli bir oturumu değerlendir
  /hub:eval --judge                   # LLM hakim modunu zorunlu kıl (metrik yapılandırmasını yoksay)
  ```
  
  ## Ne Yaptığı
  
  ### Metrik Modu (eval komutu yapılandırılmış)
  
  Her agent'ın worktree'sinde değerlendirme komutunu çalıştır:
  
  ```bash
  python {skill_path}/scripts/result_ranker.py \
    --session {session-id} \
    --eval-cmd "{eval_cmd}" \
    --metric {metric} --direction {direction}
  ```
  
  Çıktı:
  ```
  RANK  AGENT       METRIC      DELTA      FILES
  1     agent-2     142ms       -38ms      2
  2     agent-1     165ms       -15ms      3
  3     agent-3     190ms       +10ms      1
  
  Winner: agent-2 (142ms)
  ```
  
  ### LLM Hakim Modu (eval komutu yok veya --judge bayrağı)
  
  Her agent için:
  1. Diff'i al: `git diff {base_branch}...{agent_branch}`
  2. Agent'ın result post'unu oku: `.agenthub/board/results/agent-{i}-result.md`
  3. Tüm diff'leri karşılaştır ve şuna göre sırala:
     - **Doğruluk** — Görevi çözer mi?
     - **Basitlik** — Değiştirilen daha az satır daha iyi (eşit doğruluk durumunda)
     - **Kalite** — Temiz yürütme, iyi yapı, gerileme yok
  
  Sıralamaları açıklama ile sunun.
  
  İçerik görevi için LLM hakim çıktısı örneği:
  ```
  RANK  AGENT    VERDICT                               WORD COUNT
  1     agent-1  Strong narrative, clear CTA            1480
  2     agent-3  Good data points, weak intro           1520
  3     agent-2  Generic tone, no differentiation       1350
  
  Winner: agent-1 (strongest narrative arc and call-to-action)
  ```
  
  ### Hibrid Modu
  
  1. Önce metrik değerlendirmesini çalıştır
  2. En iyi agent'lar birbirinden %10 içindeyse, bağlantıları kırmak için LLM hakimi kullan
  3. Hem metrik hem de niteliksel sıralamaları sun
  
  ## Değerlendirmeden Sonra
  
  1. Oturum durumunu güncelle:
  ```bash
  python {skill_path}/scripts/session_manager.py --update {session-id} --state evaluating
  ```
  
  2. Kullanıcıya söyle:
     - Sıralanmış sonuçlar ve vurgulanmış kazanan
     - Sonraki adım: `/hub:merge` kazananı birleştirmek için
     - Veya `/hub:merge {session-id} --agent {winner}` açık olmak için
---

# /hub:eval — Evaluate Agent Results

Rank all agent results for a session. Supports metric-based evaluation (run a command), LLM judge (compare diffs), or hybrid.

## Usage

```
/hub:eval                           # Eval latest session using configured criteria
/hub:eval 20260317-143022           # Eval specific session
/hub:eval --judge                   # Force LLM judge mode (ignore metric config)
```

## What It Does

### Metric Mode (eval command configured)

Run the evaluation command in each agent's worktree:

```bash
python {skill_path}/scripts/result_ranker.py \
  --session {session-id} \
  --eval-cmd "{eval_cmd}" \
  --metric {metric} --direction {direction}
```

Output:
```
RANK  AGENT       METRIC      DELTA      FILES
1     agent-2     142ms       -38ms      2
2     agent-1     165ms       -15ms      3
3     agent-3     190ms       +10ms      1

Winner: agent-2 (142ms)
```

### LLM Judge Mode (no eval command, or --judge flag)

For each agent:
1. Get the diff: `git diff {base_branch}...{agent_branch}`
2. Read the agent's result post from `.agenthub/board/results/agent-{i}-result.md`
3. Compare all diffs and rank by:
   - **Correctness** — Does it solve the task?
   - **Simplicity** — Fewer lines changed is better (when equal correctness)
   - **Quality** — Clean execution, good structure, no regressions

Present rankings with justification.

Example LLM judge output for a content task:
```
RANK  AGENT    VERDICT                               WORD COUNT
1     agent-1  Strong narrative, clear CTA            1480
2     agent-3  Good data points, weak intro           1520
3     agent-2  Generic tone, no differentiation       1350

Winner: agent-1 (strongest narrative arc and call-to-action)
```

### Hybrid Mode

1. Run metric evaluation first
2. If top agents are within 10% of each other, use LLM judge to break ties
3. Present both metric and qualitative rankings

## After Eval

1. Update session state:
```bash
python {skill_path}/scripts/session_manager.py --update {session-id} --state evaluating
```

2. Tell the user:
   - Ranked results with winner highlighted
   - Next step: `/hub:merge` to merge the winner
   - Or `/hub:merge {session-id} --agent {winner}` to be explicit

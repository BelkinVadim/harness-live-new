# empty-web-ts

## Карта проекта (harness-kit)

Раздел создан harness-kit при установке и дальше принадлежит проекту. Пути здесь — карта: файлы остаются на своих местах.

- Единая проверка перед готовностью работы: `scripts/verify`.
- Архитектура, слои и границы модулей: `docs/ARCHITECTURE.md`.
- Инварианты системы: `docs/INVARIANTS.md`.
- Уровни риска путей и владельцы: `docs/RISK.md`.
- Правила ревью: `REVIEW.md`.
- Конфиг harness: `harness.config.yaml`.
- Файлы проекта, которые harness никогда не трогает: `harness/local/`.
<!-- harness:start id=code-review-rules -->
## Code Review Rules

Правила ревью проекта из `REVIEW.md`: полный текст и порядок ревью — там. Раздел ведёт harness-kit: правьте `REVIEW.md` и запустите `harness-kit sync`.

Правила для отдельных папок — в их файлах: `src/AGENTS.md`.
<!-- harness:end -->
- Своё правило вне блоков harness (L2).

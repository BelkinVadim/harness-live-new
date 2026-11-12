<!-- harness:start id=code-review-rules -->
## Code Review Rules

Правила ревью для файлов в `src/` из `REVIEW.md`. Раздел ведёт harness-kit: правьте `REVIEW.md` и запустите `harness-kit sync`.

### Новые функции покрыты тестом

Paths: `src/**`

Инвариант: каждая новая экспортируемая функция в src/ имеет тест в соседнем *.test.ts.
Безопасный путь: добавить тест в том же PR.
<!-- harness:end -->

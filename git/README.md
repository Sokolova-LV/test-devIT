DevIT TEST TASK

1. Проверяем нахождение на ветке task_4

   Команда переключения на ветку task_4: `git checkout task_4`.
   Команда проверки текущей ветки: `git branch`.

2. Обновляем локальную ветку dev

   Команда для обновления локальной ветки dev с изменениями из удаленного репозитория: `git pull origin dev`.
   Эта команда приведет к загрузке всех новых изменений из ветки dev.

3. Возвращаемся на ветку task_4

   Команда для возврата на ветку task_4: `git checkout task_4`.

4. Добавляем изменения из ветки dev в ветку task_4

   Команда для вливания (merge) изменений из ветки dev в текущую ветку task_4: `git merge dev`.
   Эта команда добавит новые изменения из ветки dev перед текущими изменениями.

5. Проверяем наличие конфликтов слияния и решаем их (если они возникли)

6. Сохраняем эти изменения и отправляем их в удаленный репозиторий

   Команда для сохранения изменений в локальном репозитории и отправки их в удаленный репозиторий: `git push origin task_4`.

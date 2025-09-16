Node.js Homework - Express Notes API

Опис
Мінімальний бекенд на **Express**, який демонструє:

- налаштування базового сервера;
- використання middleware (`cors`, `express.json`, `pino-http`);
- обробку 404 та 500 помилок;
- приклади REST-роутів для колекції нотаток.

Проєкт реалізований у рамках навчального завдання.

Маршрути

- `GET /notes`
  Відповідь:

  ```json
  { "message": "Retrieved all notes" }
  ```

- `GET /notes/:noteId`
  Відповідь:

  ```json
  { "message": "Retrieved note with ID: 123" }
  ```

- `GET /test-error`
  Відповідь:
  ```json
  { "message": "Simulated server error" }
  ```

  Реалізовано обробку:
404 Not Found
500 Internal Server Error

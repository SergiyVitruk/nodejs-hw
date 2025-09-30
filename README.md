Node.js Homework - Express Notes API

Опис
Мінімальний бекенд на **Express**, який демонструє:

- Налаштування базового сервера;
- Використання middleware (`cors`, `express.json`, `pino-http`);
- Обробку 404 та 500 помилок;
- Приклади REST-роутів для колекції нотаток.
- Роботу з базою даних MongoDB через Mongoose;
- Реалізацію CRUD-операцій;
- Пагінацію, текстовий пошук і валідацію запитів через celebrate.

Маршрути

- `GET /`

  ```json
  { "message": "Hello user" }
  ```

- `GET /notes`

  ```json
  { "Retrieved all notes" }
  ```
Параметри рядка запиту (query):
page – номер сторінки (за замовчуванням 1)
perPage – кількість нотаток на сторінці (за замовчуванням 10)
tag – фільтр за тегом нотатки
search – текстовий пошук по title та content

- `GET /notes/:noteId`

  ```json
  { "Retrieved note with ID" }
  ```

- `POST /notes/`

  ```json
  { "Create new note" }
  ```

- `DELETE /notes/:noteId`

  ```json
  { "Delete note with ID" }
  ```

- `PATCH /notes/:noteId`

  ```json
  { "Update note with ID" }
  ```

- `GET /test-error`

  ```json
  { "message": "Simulated server error" }
  ```

  Реалізовано обробку:
404 Not Found
500 Internal Server Error

Використані технології
Node.js, Express
MongoDB, Mongoose
dotenv, cors
pino-http
celebrate (Joi)
createHttpError

Node.js Homework - Express Notes API

Опис
Мінімальний бекенд на **Express**, який демонструє:

- Налаштування базового сервера;
- Використання middleware (`cors`, `express.json`, `pino-http`);
- Обробку 404 та 500 помилок;
- побудову REST API з аутентифікацією користувачів;
- роботу з базою даних MongoDB (Mongoose);
- керування сесіями та кукі;
- відправку листів через SMTP (Brevo);
- завантаження зображень користувачів у Cloudinary.
- Реалізацію CRUD-операцій;
- Пагінацію, текстовий пошук і валідацію запитів через celebrate.

Маршрути

- `GET /`

  ```json
  { "message": "Hello user" }
  ```

  Нотатки
  
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
Користувачі

  - `POST /auth/register`

  ```json
  { "Create user" }
  ```

- `POST /auth/login`

  ```json
  { "Login user" }
  ```

- `POST /auth/logout`

  ```json
  { "Logout user" }
  ```

- `POST /auth/refresh`

  ```json
  { "Refresh token" }
  ```

  - `POST /auth/request-reset-email`

  ```json
  { "Sending a password recovery email" }
  ```

- `POST /auth/reset-password`

  ```json
  { "Reset password" }
  ```

  - `PATCH /users/me/avatar`

  ```json
  { "Change avatar" }
  ```

Тест-еррор

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
express.json() — парсинг JSON;
cors() — підтримка крос-доменних запитів;
pino-http — логування запитів;
authenticate — перевірка сесії та access токена;
multer — обробка файлів;
helmet (опціонально) — базовий захист заголовків.
bcrypt — хешування паролів;
jsonwebtoken — генерація JWT-токенів для скидання паролю;
nodemailer — відправка листів через SMTP (Brevo);
cookie-parser — робота з кукі;
http-errors — централізована обробка помилок;
celebrate (Joi) — валідація запитів.

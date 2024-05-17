# Client management app
Приложение, разработанное с использованием React, Node/Express, Postgres

## Инструкция
```bash
# клонировать проект
git clone https://github.com/uncommon-type/clientapp.git

# перейти в склонированный репозиторий
cd clientapp

```

### Настройка базы данных
> **Примечание:** данные инструкции предполагают, что у вас установлены [Docker](https://docs.docker.com/engine/install/) и [Docker Compose](https://docs.docker.com/compose/install/)

```bash
# перейти в директорию clientdb
cd clientdb

# создать файл .env для использования в разработке со следующей переменной окружения:
DB_PWD=<your-db-password>

# запустить Docker контейнер и создать базу данных `clientDB`
docker-compose up

# создать таблицу пользователей, выполнив:
- скрипт SQL в `clientdb/user/create-user.sql`
- скрипт SQL в `clientdb/user/insert-user.sql`

# создать таблицу клиентов, выполнив:
- скрипт SQL в `clientdb/user/create-client.sql`. 
- скрипт SQL n `clientdb/user/insert-client.sql`

```

### Настройка clientapi
```bash
# перейти в директорию clientapi
cd clientapp

# установить зависимости
npm i

# создать env.local в корне директории clientapi с следующими переменными окружения:
DB_HOST=<your-db-host>
DB_USER=<your-db-user>
DB_PWD=<your-db-password>
DB_NAME=<your-db-name>
SECRET_KEY=<your-secret-key>
SALT=<your-salt>
ORIGIN=<your-origin>

# запустить dev сервер
npm run dev

```

### Настройка clientwebsite

```bash
# перейти в директорию clientwebsite
cd clientwebsite

# установить зависимости
npm i

# создать env.local в корне директории clientwebsite с следующей переменной окружения:
VITE_BASE_URL=<your-base-url>

# запустить dev сервер
npm run dev

```
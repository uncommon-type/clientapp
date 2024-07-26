# Client management app
Built with React, Node/Express, Postgres

## Instructions
```bash
# clone the project:
git clone https://github.com/uncommon-type/clientapp.git

# navigate into the cloned repository:
cd clientapp

```

### Setting up database
> **Note:**  These instructions assume you have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed

```bash
# navigate to the clientdb directory:
cd clientdb

# create a .env file for development use with the following environment variable:
DB_PWD=<your-db-password>

# launch Docker container and create the `clientDB` database:
docker-compose up

# create the users table by executing:
- SQL script in `clientdb/user/create-user.sql`
- SQL script in `clientdb/user/insert-user.sql`

# create the clients table by executing:
- SQL script in `clientdb/user/create-client.sql`. 
- SQL script in `clientdb/user/insert-client.sql`

```

### Setting up clientapi
```bash
# navigate to the clientapi directory:
cd clientapp

# install dependencies:
npm i

# create env.local in the root directory of clientapi with the following environment variables:
DB_HOST=<your-db-host>
DB_USER=<your-db-user>
DB_PWD=<your-db-password>
DB_NAME=<your-db-name>
SECRET_KEY=<your-secret-key>
SALT=<your-salt>
ORIGIN=<your-origin>

# start dev server:
npm run dev

```

### Setting up clientwebsite

```bash
# navigate to the clientwebsite directory:
cd clientwebsite

# install dependencies:
npm i

# create env.local in the root directory of clientwebsite with the following environment variable:
VITE_BASE_URL=<your-base-url>

# start dev server:
npm run dev

```
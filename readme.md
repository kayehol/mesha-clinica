### Clínica

Projeto feito com o back-end em PHP/Laravel e o front-end em JavaScript/React

Instruções:

- Clone o repositório:

  `git clone https://github.com/kayehol/mesha-clinica`

- Inicie o container do Postgres

    `docker-compose up -d`

- Instale o laravel (pasta "app")

      `composer install`

- Crie as tabelas
    ```php artisan migrate```

- Execute o script `inserts.sql` para popular as tabelas com dados de teste

- Inicie o front-end (pasta "front")

        ` yarn install` ou `npm install`

- Acesse a página inicial em

  `http://localhost:3000/`



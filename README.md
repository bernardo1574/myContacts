# My Contacts
Projeto para cadastrar contatos em 2 tipos de clientes, varejão ou macapa

🚀 Começando
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte Implantação para saber como implantar o projeto.

📋 Pré-requisitos
Para executar esse projeto você precisa ter instalado o NodeJs na versão mais recente e o docker.

🔧 Instalação

Primeiro execute o yarn ou npm i para instalar todas as depedências do projeto.
```bash
yarn
```

```bash
npm i
```

Após instalar todas as depedências rode em um terminal separado o docker-compose
```bash
docker-compose up --force-recreat
```
Em seguida, rode:
```bash
yarn typeorm migration:run
```
e depois execute o yarn dev

```bash
yarn dev
```
e acesse o localhost:PORT/api-docs para consultar a documentação do projeto.

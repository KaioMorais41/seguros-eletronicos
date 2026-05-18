# 🦊 FoxGuard API

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge" />
  <img src="https://img.shields.io/badge/REST%20API-02569B?style=for-the-badge" />
</p>

<p align="center">
  <strong>API RESTful para gerenciamento de seguros eletrônicos 📱🛡️</strong>
</p>

<p align="center">
  Projeto desenvolvido colaborativamente para simular uma plataforma Insurtech moderna.
</p>

---

# 📌 Sobre o Projeto

O **FoxGuard API** é uma aplicação backend desenvolvida para o segmento **Insurtech**, focada no gerenciamento de seguros para dispositivos eletrônicos de alto valor.

A plataforma foi criada para permitir o controle completo do ciclo de vida de uma apólice, desde o cadastro até consultas rápidas por IMEI, garantindo organização, rastreabilidade e segurança dos dados.

O projeto simula o funcionamento de uma seguradora digital especializada em:

- 📱 Smartphones
- 💻 Notebooks
- 🎮 Hardwares premium
- 🖥️ Dispositivos eletrônicos em geral

---

# 🚀 Funcionalidades

✅ Cadastro de novas apólices  
✅ Listagem de seguros cadastrados  
✅ Consulta de apólices por ID  
✅ Consulta personalizada por IMEI  
✅ Atualização de dados da apólice  
✅ Exclusão definitiva de registros  
✅ Persistência de dados com MySQL  
✅ API RESTful modular  
✅ Estrutura escalável utilizando NestJS  

---

# 🧠 Arquitetura da Aplicação

O projeto foi estruturado utilizando a arquitetura modular do NestJS, promovendo:

- 📦 Separação de responsabilidades
- 🔧 Facilidade de manutenção
- 📈 Escalabilidade
- 🛡️ Organização de regras de negócio

### Estrutura principal:

- **Controllers** → Manipulação das rotas HTTP
- **Services** → Regras de negócio
- **Modules** → Organização da aplicação
- **ORM** → Integração com banco de dados

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| TypeScript | Linguagem principal |
| NestJS | Framework backend |
| Node.js | Ambiente de execução |
| TypeORM | ORM para persistência |
| MySQL | Banco de dados relacional |
| REST API | Comunicação HTTP |
| Insomnia | Testes de endpoints |

---

# 📂 Estrutura do Projeto

```bash
foxguard-api/
│
├── src/
│   ├── seguro/
│   │
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── test/
│
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nest-cli.json
├── package-lock.json
├── package.json
├── tsconfig.build.json
├── tsconfig.json
└── README.md
```

---

# 🗄️ Modelagem da Entidade

## 📋 Tabela: `tb_seguros_eletronicos`

| Campo | Tipo | Descrição |
|---|---|---|
| id | BIGINT | Identificador único da apólice |
| cliente | VARCHAR | Nome do segurado |
| aparelho | VARCHAR | Nome do dispositivo |
| valor_apolice | DECIMAL(10,2) | Valor da cobertura |
| imei | VARCHAR | Identificador global do aparelho |

---

# 🔌 Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/seguros` | Criar nova apólice |
| GET | `/seguros` | Listar seguros |
| GET | `/seguros/:id` | Buscar seguro por ID |
| GET | `/seguros/imei/:imei` | Buscar seguro por IMEI |
| PUT | `/seguros/:id` | Atualizar apólice |
| DELETE | `/seguros/:id` | Excluir registro |

---

# ⚙️ Pré-requisitos

Antes de executar o projeto, tenha instalado:

- Node.js >= 18
- MySQL Server
- Git
- NestJS CLI

---

# 📦 Instalação

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/Grupo06-Turma14Js/seguros-eletronicos.git
```

---

## 2️⃣ Acesse a pasta do projeto

```bash
cd seguros-eletronicos
```

---

## 3️⃣ Instale as dependências

```bash
npm install
```

---

## 4️⃣ Configure o banco de dados

Crie um banco MySQL:

```sql
CREATE DATABASE foxguard;
```

---

## 5️⃣ Configure as variáveis de ambiente

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=SUA_SENHA
DB_DATABASE=foxguard
```

---

# ▶️ Executando o Projeto

## Ambiente de desenvolvimento

```bash
npm run start:dev
```

---

## Ambiente de produção

```bash
npm run build
npm run start:prod
```

---

# 💻 Exemplos de Uso

## 📌 Criando uma apólice

### Requisição

```http
POST /seguros
```

### Body

```json
{
  "cliente": "Carlos Eduardo",
  "aparelho": "Samsung Galaxy S24 Ultra",
  "valor_apolice": 8999.90,
  "imei": "356938035643809"
}
```

---

### ✅ Resposta Esperada

```json
{
  "id": 1,
  "cliente": "Carlos Eduardo",
  "aparelho": "Samsung Galaxy S24 Ultra",
  "valor_apolice": 8999.90,
  "imei": "356938035643809"
}
```

---

# 🔍 Consulta por IMEI

### Requisição

```http
GET /seguros/imei/356938035643809
```

---

### ✅ Resposta

```json
{
  "id": 1,
  "cliente": "Carlos Eduardo",
  "aparelho": "Samsung Galaxy S24 Ultra",
  "valor_apolice": 8999.90,
  "imei": "356938035643809"
}
```

---

# 🛡️ Resiliência e Tratamento de Erros

A API foi desenvolvida para lidar com falhas de forma segura e previsível.

## ✅ Estratégias implementadas

- Validação de dados obrigatórios
- Tratamento de registros inexistentes
- Controle de falhas de banco de dados
- Respostas HTTP padronizadas
- Proteção contra payloads inválidos

---

## ⚠️ Exemplos de erros tratados

### Recurso não encontrado

```json
{
  "statusCode": 404,
  "message": "Apólice não encontrada",
  "error": "Not Found"
}
```

---

### Payload inválido

```json
{
  "statusCode": 400,
  "message": [
    "cliente should not be empty"
  ],
  "error": "Bad Request"
}
```

---

# 🧪 Testes e Validação

Os testes foram realizados utilizando o **Insomnia**, validando cenários como:

✅ Cadastro de apólices  
✅ Consulta por ID  
✅ Consulta por IMEI  
✅ Atualização de dados  
✅ Exclusão de registros  
✅ Persistência no banco MySQL  
✅ Tratamento de erros  
✅ Entradas inválidas  

---

# 📚 Aprendizados

Durante o desenvolvimento do projeto foram aprofundados conhecimentos em:

- 🧠 Arquitetura modular com NestJS
- 🔗 Integração backend + banco relacional
- 📡 Construção de APIs RESTful
- 🗃️ Persistência utilizando TypeORM
- 🛡️ Tratamento de exceções HTTP
- ⚙️ Organização de aplicações escaláveis
- 🧪 Testes de endpoints
- 🤝 Desenvolvimento colaborativo utilizando Git e GitHub

---

# 📈 Melhorias Futuras

- 🔐 Autenticação JWT
- 👥 Controle de permissões
- 📄 Documentação automática com Swagger
- ☁️ Deploy utilizando Docker
- 📊 Dashboard administrativo
- 📨 Sistema de notificações
- 🧪 Testes automatizados com Jest

---

# 🤝 Contribuição

Contribuições são bem-vindas.

```bash
# Fork o projeto

# Crie uma branch
git checkout -b feature/minha-feature

# Commit das alterações
git commit -m "feat: nova funcionalidade"

# Push para o repositório
git push origin feature/minha-feature
```

---

# 🌐 Repositório Oficial

🔗 https://github.com/Grupo06-Turma14Js/seguros-eletronicos

---

# 👨💻 Desenvolvimento Colaborativo

Projeto desenvolvido colaborativamente pela equipe:

### 🦊 HexaFox Solutions

Com foco em:

- 📈 Escalabilidade
- 🛡️ Segurança
- ⚙️ Organização
- 🚀 Performance
- 🧠 Boas práticas de engenharia de software

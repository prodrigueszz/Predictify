# Predictify

**Predictify** é uma aplicação de previsões esportivas que permite que usuários apostem em resultados de partidas e acumulem pontos com base na precisão dos palpites.  
O projeto foi desenvolvido como estudo pessoal de backend e faz parte da integração com o frontend de um projeto acadêmico da disciplina de **Desenvolvimento Web** da faculdade.

## Funcionalidades
- Cadastro e autenticação de usuários
- Criação e gerenciamento de palpites para partidas esportivas
- Sistema de pontuação baseado na precisão dos resultados
- Integração futura com APIs externas para resultados reais (ex: football-data.org)

## Tecnologias Utilizadas
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL

## Objetivo do Projeto
Construir uma aplicação backend sólida para praticar conceitos de arquitetura limpa (Clean Architecture), princípios SOLID e integração com banco de dados, além de servir como base para um projeto completo (frontend + backend) no contexto universitário.

## Como Rodar o Projeto
```bash
# Clone o repositório
git clone https://github.com/prodrigueszz/Predictify.git

# Acesse a pasta do projeto
cd Predictify

# Instale as dependências
npm install

# Configure o banco de dados PostgreSQL e as variáveis de ambiente (.env)

# Rode as migrações do Prisma
npx prisma migrate dev

# Inicie o servidor
npm run dev

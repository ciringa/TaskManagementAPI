# Task Manager API
<p align="center">

<img src = "https://img.shields.io/badge/NPM-10.5.2-gray?style=flat&labelColor=green">
<img src = "https://img.shields.io/badge/TypeScript-5.4.5-gray?style=flat&labelColor=blue" >

</p>
Ja imaginou poder controlar suas tarefas diarias de uma forma simple mas que ao mesmo tempo fosse completa? Esta API oferece as melhores ferramentas para o desenvovlimento completo de uma aplicaçao capaz disso 

# Descrição
um pequeno projeto de treno buscando aperfeiçoar tecnologias chaves para trabalho no mercado

## Rodando o Projeto 🏃‍♂️💻

clone o repostirorio 
```
git clone https://github.com/ciringa/TaskManagementAPI.git
```
entre na pasta raiz do projeto 
```
cd TaskManagementAP
```
instale as dependencias 
```
npm i
```
rode o projeto 
```
npm run start
```

## Tech Stack
<div display = "inline-block">
	
![Static Badge](https://img.shields.io/badge/Prisma-blue?style=for-the-badge&labelColor=gray)

![Static Badge](https://img.shields.io/badge/Typescript-blue?style=for-the-badge&labelColor=gray)

![Static Badge](https://img.shields.io/badge/Vitest--orange?style=for-the-badge&labelColor=orange&color=orange)

![Static Badge](https://img.shields.io/badge/Fastify-black?style=for-the-badge&labelColor=gray)

![Static Badge](https://img.shields.io/badge/Zod-orange?style=for-the-badge&labelColor=gray)

![Static Badge](https://img.shields.io/badge/DotEnv--gray?style=for-the-badge&labelColor=gray&color=gray)
</div>
## requisitos do projeto:

### RF 
	[ x ] O usuario deve ser capaz de criar uma nova tarefa 
	[ x ] O usuario deve ser capaz de excluir e editar sua tarefa
	[ x ] O usuario deve ser capaz de marcar suas tarefas como concluídas

### RN 
	[ x ] O usuario só deve ser capaz de observar apenas tarefas criadas por ele

### RNF 
	[ x ] O sistema deve determinar qual é o usuario através do sistema de cookies do fastify 
	[ X ] A aplicação deve incluir um sistema de testagens autônomas do vite
	[ x ] A aplicação deve incluir variaveis ambientes

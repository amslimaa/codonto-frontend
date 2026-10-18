# 🦷 Codonto UFPI — Clínica

Front-end do sistema de **clínica odontológica escola** do projeto Codonto (UFPI): login, cadastro de pacientes, preenchimento de anamnese e agendamento de consultas.

> API: [`codonto-quiz-backend`](https://github.com/amslimaa/codonto-quiz-backend)

## Telas

- Login com contexto de autenticação (cookies)
- Pacientes: cadastro, anamnese e consulta

## Tecnologias

Next.js · React · TypeScript · styled-components · React Hook Form + Yup · Axios · date-fns · SweetAlert

## Como rodar

> Dependências da época: use **Node 16**.

```bash
yarn install
yarn dev       # http://localhost:3000
```

A URL da API fica em `src/services/api.ts` (há uma linha comentada para apontar para `http://localhost:3333`).

## Autor

Feito por [Amós Magalhães](https://github.com/amslimaa).

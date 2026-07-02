# Felipe Lau — Portfólio

Portfólio pessoal de Felipe Lau, QA Pleno. Construído com **React + Vite** e **Framer Motion**, tema preto & vermelho.

## Rodando localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173/felipe-lau-portfolio/`.

## Editando o conteúdo

Todo o conteúdo (experiências, skills, formação, contatos) fica centralizado em [`src/data/profile.js`](src/data/profile.js) — basta editar esse arquivo.

## Deploy

O deploy para o GitHub Pages é automático: todo push na branch `main` dispara o workflow em `.github/workflows/deploy.yml`.

> **Configuração única:** no repositório do GitHub, vá em **Settings → Pages** e defina **Source: GitHub Actions**.

## Build de produção

```bash
npm run build    # gera a pasta dist/
npm run preview  # pré-visualiza o build
```

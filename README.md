# 🌍 Country Explorer

A responsive web app for exploring data about every country in the world, including names, capitals, regions, populations, and flags. Built with React Router v7 and Tailwind CSS, powered by the [REST Countries API](https://restcountries.com/).

**🔗 Live demo:** [countryexplorer0.netlify.app](https://countryexplorer0.netlify.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify&logoColor=white)

<!-- Add a screenshot or GIF of the app here, e.g.:
![Country Explorer screenshot](docs/screenshot.png)
-->

---

## ✨ Features

- **Browse every country** with live data from the REST Countries API
- **Key details at a glance:** country name, capital, region, population, and flag
- **Server-side rendering** via React Router v7 framework mode for fast first loads
- **Fully responsive UI** styled with Tailwind CSS
- **Three pages:** a landing page, the countries explorer, and an about page

---

## 🛠️ Built with

- [React 19](https://react.dev/)
- [React Router 7](https://reactrouter.com/) (framework mode, with SSR)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [REST Countries API](https://restcountries.com/) for country data
- [Netlify](https://www.netlify.com/) for hosting

---

## 🚀 Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (comes with Node.js)
- A free REST Countries API key

### 1. Clone and install

```bash
git clone https://github.com/NicholasCloud4/Countries-Project.git
cd Countries-Project
npm install
```

### 2. Set up your API key

1. Sign up for a free key at [restcountries.com/sign-up](https://restcountries.com/sign-up).
2. On the API Keys page, allow the hostnames you'll run the app from (e.g. `localhost` and your Netlify domain).
3. Copy the example env file and add your key:

```bash
cp .env.example .env
```

```env
VITE_RESTCOUNTRIES_API_KEY=your_api_key_here
```

> **Note:** Variables prefixed with `VITE_` are bundled into the client-side code, so the key will be visible in the browser. That's why the hostname allowlist in step 2 matters, since it stops other sites from using your key.

### 3. Run the dev server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot module replacement |
| `npm run build` | Create a production build in `build/` |
| `npm run start` | Serve the production build with `react-router-serve` |
| `npm run typecheck` | Generate route types and run the TypeScript compiler |

---

## 📁 Project structure

```
.
├── app/                     # Routes, components, and app root
├── public/                  # Static assets
├── .env.example             # Template for environment variables
├── Dockerfile               # Container build for production
├── react-router.config.ts   # React Router framework config
├── vite.config.ts           # Vite config (incl. Netlify + Tailwind plugins)
├── tsconfig.json
└── package.json
```

---

## ☁️ Deployment

### Netlify

The live site is deployed on Netlify using the [`@netlify/vite-plugin-react-router`](https://www.npmjs.com/package/@netlify/vite-plugin-react-router) plugin, which handles server-side rendering through Netlify Functions.

To deploy your own copy:

1. Fork this repository and import it into [Netlify](https://app.netlify.com/start).
2. Set the build command to `npm run build`.
3. Add `VITE_RESTCOUNTRIES_API_KEY` under **Site configuration → Environment variables**.
4. Add your Netlify domain to the allowed hostnames on your REST Countries API Keys page.

### Docker

```bash
docker build -t country-explorer .
docker run -p 3000:3000 country-explorer
```

The app will be available at [http://localhost:3000](http://localhost:3000). Because Vite embeds `VITE_` variables at build time, make sure your API key is available when the image is built.

---

## 🔮 Possible future improvements

- Search and filter countries by name or region
- Dedicated detail pages with languages, currencies, and bordering countries
- Sorting by population or area
- Dark mode toggle

---

## 📝 Acknowledgements

Country data is provided by the [REST Countries API](https://restcountries.com/). This is an independent project made for learning and portfolio purposes.

---

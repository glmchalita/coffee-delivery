<a name="readme-top"></a>

<h1 align="center">
  <img src="../media/images/coffee-logo.svg?raw=true" width="128">
</h1>

<h3 align="center">
  Coffee Delivery
</h3>

<p align="center">
  <a href="#info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to">How to</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#roadmap">Roadmap</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#conclusion">Conclusion</a>
</p>

## Info
This application simulates an e-commerce, featuring functions such as product listing, shopping cart manipulation, and a form for entering delivery addresses.

This is a project developed in React using the Vite.js builder.

<img src="../media/images/home.png?raw=true">

## Technologies

This project was developed following this technologies:

- [React](https://react.dev/)
- [react-router-dom](https://reactrouter.com/en/main)
- [react-hook-form](https://react-hook-form.com/)
- [styled-components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite.js](https://vitejs.dev/)

## How to

```bash
## Clone this repo

# https
git clone https://github.com/glmchalita/lab-coffee-delivery

# ssh
git clone git@github.com:glmchalita/lab-coffee-delivery.git

## Access this folder
cd lab-coffee-delivery

## Install dependencies
npm install

## Run the application
npm run dev
```

In this way, the application will be running locally on the default port 5173 (http://localhost:5173).

Note: If you want to run the application on a different port, use the following command.

```bash
npm run dev -- --port 8000
```

Alternatively, if you prefer, configure the vite.config file for the desired port.

```js
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8000,
  },
})
```

## Roadmap

- Add page to see orders history
- Add new buttons style
- Add CEP API to automatically fill the address form
- Add delivery fee calculator based on CEP
- Add API to change header location span automatically

## Conclusion

Project designed by [Rocketseat](https://github.com/rocketseat-education), the purpose of the project was to learn, in practice, router and form management.

I also learned a new way to format tags using grid-area, which greatly facilitated organizing the form on the Checkout page.

I also had to figure out how to use the useNavigate from react-router-dom, reading the documentation and testing to understand how this hook from the library worked.

And not least, always learning new ways to use CSS for various design-related issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

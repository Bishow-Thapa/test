# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Introduction

- Login with API
- Decomed jwt token response using jwt-decode library
- After decoding store the essential response to local or sessing storage using redux persist.
- Centerlized jwt token management to inject token in api headers using axios or rtk query.
- Logout button to purge persist or null locaStorage.
- Dashboard Layout structure
- After token experied used call api with expired token to get new token.

---

Navigation Menu Structure

- Home
- Balance Management
- Spending
- Reports
- Profile
- Logout

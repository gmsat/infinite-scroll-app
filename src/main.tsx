import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/themes/theme";
import { globalStyles } from "./assets/themes/globalStyles";
import { Global } from "@emotion/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles}/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

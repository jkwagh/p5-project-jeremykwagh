// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./components/App";
import { createRoot } from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import React from 'react';
import { createRoot } from "react-dom/client"
import './index.scss';
import Main from './Routes';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Main />);
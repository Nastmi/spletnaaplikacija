import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider>
      <App name={"Janez"}/>
  </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


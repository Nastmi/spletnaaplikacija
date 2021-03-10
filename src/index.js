import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider , Divider} from "@chakra-ui/react"
import Quote from "./Quote";


ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider>
      <App name={"Janez"}/>
      <Divider/>
      <Quote/>
  </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


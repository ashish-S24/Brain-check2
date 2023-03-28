import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import App from './brain'

const Computers = () => {
  const container = '.container';
  const app = new App(container);
  app.init();
  return (
    <div></div>
  )
}

export default Computers;
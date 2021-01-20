import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './containers/Header/Header';
import Layout from './component/Layout/Layout';
import Products from './containers/Products/Products';
import Button from './component/Button/Button';

function App() {

  const notify = () => {
    toast('Hello World');
  }

  return (
    <div className="App">
      <Header />
      <Layout>
        <Products />
        <Button onClick={notify} >CLICCK</Button>
      </Layout>
      <ToastContainer />
    </div>
  );
}

export default App;

import React from 'react';

import Header from './containers/Header/Header';
import Products from './containers/Products/Products';
import Layout from './component/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
          <Products />
      </Layout>
    </div>
  );
}

export default App;

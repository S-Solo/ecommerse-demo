import React from 'react';

import Header from './containers/Header/Header';
// import Products from './containers/Products/Products';
import Layout from './component/Layout/Layout';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
          <Auth />
      </Layout>
    </div>
  );
}

export default App;

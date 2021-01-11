import './App.css';
import Layout from './component/Layout/Layout'
import Footer from './component/Footer/Footer';
import Header from './containers/Header/Header';
import Products from './containers/Products/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <main className="app-main-content">
          <Products />
        </main>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;

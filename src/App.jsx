import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './containers/header/header';
import Footer from './containers/footer/footer';

function App() {

  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

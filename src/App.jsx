import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Cabecacalho from './componts/cabecalho';
import Footer from './componts/Footer';
import Home from './Pages/Home/Index';

function App() {
  return (
    <div className="App">
      <Cabecacalho />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

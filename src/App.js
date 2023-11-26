
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './routes/Login';
import "./Css_Geral.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './routes/Home';
import "./Sobre_css.css"
import Footer from './components/Footer';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

function App() {   
  return (
    <div>
      <Navbar />

      <Outlet />


    </div>
  );
}
export default App;

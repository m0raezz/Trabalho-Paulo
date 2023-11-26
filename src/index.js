import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Sobre_css.css"
import Conteudo1 from './routes/Conteudo1'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import ErrorPage from './routes/ErrorPage';
import Sobre from './routes/Sobre'
import Login from './routes/Login';
import Cont1 from './routes/Conteudo1';
import Cont2 from './routes/Conteudo2';
import Cont3 from './routes/Conteudo3';
import Cont4 from './routes/Conteudo4';


const router = createBrowserRouter([
  {
    path:"/", element:<App />,
    errorElement:<ErrorPage />,
    children: [

       
      {
        path:"/home", element: <Home />,
      },

      {
        path:"/login", element: <Login />,
      },
      {
        path:"/contact", element: <Contact />,
      },
      
      {
        path:"/sobre", element: <Sobre />,
      },

      {
        path:"/apartamentos", element: <Cont1 />,
      },

      {
        path:"/terrenos", element: <Cont2 />,
      },

      {
        path:"/casas", element: <Cont3 />,
      },

      {
        path:"/casasalug", element: <Cont4 />,
      },

    ]
  }, 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

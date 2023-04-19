import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ayuda from './views/ayuda';
import Home from './views/inicio';
import login from './views/login';
import Productos from './views/productos';
import quienes_somos from './views/quienes_somos';
import registro from './views/registro';
import terminos from './views/terminos';
import AuthProvider from './Auth/AuthProvider';
import buscar from './views/buscar';
import Userinicio from './views/Userinicio';
import ShowProductos from './componentes/showProducts';
import { AuthContextProvider } from './Auth/AuthProvider';
import ShowUsers from './componentes/ShowUsers';
import Admin from './views/Admin';
import Users from './views/ShowUsers';
import recuperar from './views/recuperacion';
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
              <Route path="/" Component={Home} ></Route>
              <Route path="/productos" Component={Productos} ></Route>
              <Route path='/somos' Component={quienes_somos}></Route>
              <Route path='/buscar' Component={buscar}></Route>
              <Route path='/ayuda' Component={ayuda}></Route>
              <Route path='/login' Component={login}></Route>
              <Route path='/registro' Component={registro}></Route>
              <Route path='/terminos' Component={terminos}></Route>
              <Route path='/Userinicio' Component={Userinicio}></Route>
              <Route path='/showProducts' Component={ShowProductos}></Route>
              <Route path='/Admin' Component={Admin}></Route>    
              <Route path='/ShowUsers' Component={Users}></Route>
              <Route path='/recuperacion' Component={recuperar}></Route>
        </Routes>
      </BrowserRouter>
  </AuthContextProvider>
  );
}
export default App;


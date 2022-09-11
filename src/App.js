import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart'
function App() {

  const titulo="Tienda online";

  return (
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer titulo={titulo} greeting={"Hola bienvenidos!"}/>}/>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;

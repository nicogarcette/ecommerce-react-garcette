import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestEventos from './test/TestEventos';

function App() {

  const titulo="Tienda online";

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer titulo={titulo} greeting={"Hola bienvenidos!"}/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        <Route path='/test' element={<TestEventos/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

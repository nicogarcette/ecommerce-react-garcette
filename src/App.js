import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from '@mui/material';
import theme from './utils/ThemeMui';
import Footer from './components/Footer';



function App() {

  const titulo="Tienda online";

  return (
      <CartProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer titulo={titulo} greeting={"Hola bienvenidos!"}/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
              <Route path='/Cart' element={<Cart/>}/>
            </Routes>
          < Footer/>
          </BrowserRouter>
          </ThemeProvider>
      </CartProvider>
  );
}

export default App;

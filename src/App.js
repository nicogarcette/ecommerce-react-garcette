
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Prueba from './components/Prueba';

function App() {
  const titulo="Tienda online";
  

  return (
    <div>
      <NavBar/>

      <main>
        <h1 style={{marginTop:"4rem"}}>ecommerce garcette</h1>
      </main>

      <ItemListContainer titulo={titulo} greeting={"Hola bienvenidos!"}/>
      <Prueba/>
    </div>
    
  );
}

export default App;

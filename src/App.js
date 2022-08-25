
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  const titulo="Tienda online";

  return (
    <div>
      <NavBar/>
     
      <ItemListContainer titulo={titulo} greeting={"Hola bienvenidos!"}/>

    </div>
  );
}

export default App;

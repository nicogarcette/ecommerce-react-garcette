
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Fetch from './test/Fetch';


function App() {
  const titulo="Tienda online";

  return (
    <div>
      <NavBar/>
     
      <ItemListContainer titulo={titulo} greeting={"Hola bienvenidos!"}/>
      <Fetch/>
    </div>
  );
}

export default App;

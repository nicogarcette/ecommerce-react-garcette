import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const titulo="Tienda online";

  return (
    <div>
      <NavBar/>
      <ItemListContainer titulo={titulo} />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;

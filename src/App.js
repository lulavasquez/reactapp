import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar />
      <ItemListContainer text='Bienvenido/a al shop' />
      <ItemDetailContainer />
      </>
  );
}

export default App;

//importacion de componentes
import NavBar from './components/NavBar/NavBar';


//importacion de style
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main className='mainContainer'>
        <ItemListContainer greeting="Bienvenidos a Mi Tienda,explora la gama de productos innovadores en MamiTec: tecnología, accesorios y más,todo a precios increíbles." />
      </main>
      <footer className='footerContainer' >
        <p className="text-center">&copy; {2023} MamiTec Innovacion .Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
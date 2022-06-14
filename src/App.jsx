import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContadorCarrito from './ContadorCarrito/ContadorCarrito';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


//me crea un parametro y el valor
//mENU(parametro:valor, parametro2,.....)

//Se inyecta como una props llamada children el ComponentContainer una vez dentro de titulo, aparece en forma de objeto.
//Si inyectamos dos componentContainer se transforman en ARRAY
function App() {



   let contenido = 'Esto es conenido de app' // estado
   // let tituloApp = 'Esto es titulo de app' // estado

   return (
   <>
   
   <CartWidget/>
   <NavBar param1= {contenido} parametro2 ='parametro2'/>
   <ItemListContainer/>
<ItemDetailContainer/>
   <ContadorCarrito/>
   
   
   
   </>
)
}

export default App;

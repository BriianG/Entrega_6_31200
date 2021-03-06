import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../../ItemList/ItemList";



const ItemListContainer = ()=>{
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)

  useEffect(()=>{
    getFetch() //llamada a la API
    .then((resp)=>{
      setProductos(resp)
      setLoading(false)
    })
    .catch(err => console.log(err))
    // .finally(()=> console.log("Hola soy finally"))
  }, [])

// console.log(productos)







//se ve en la pagina un array de LI con los numeros del primer array
return (
  <div>
    {loading ? <h3>Cargando carrito</h3>
          :
  
  <div style={{display: 'display', flexDirection: 'row', flexWrap: 'wrap'}}>
    <ItemList productos={productos}/>

  </div>

}
</div>
)
}
    
  
export default ItemListContainer



//Map devuelve o retorna algo, el map solo se usa en Array NO en objetos.


//Ejemplo de creacion de Array - con promise y settimeout
//Callbacks son funciones pasasdas por parametros. ejemplo
// resolve (res) y reject (re)

// const task = new Promise ( (resolve, reject) =>{
//                            //Aciones (Esta todo bien o esta todo mal)
//                           let condition = true
//                           if (condition) {
//                             resolve('200 ok')
//                           }else{
//                             reject('404 not found')
//                           }
//                 }  )

// const  ItemListContainer = () => {
  //task es una promesa arriba aparece
// task*
//acepta dos parametros 1ro callback  2do casi nadie lo usa
//los parametros le damos los nombres que queremos resp y err.
//(resp)=>console.log(resp) esto se llama callback primer parametro
//el segundo parametro captura los reject   - err => console.log(err)  ESTE PARAMETRO CAPTURA REJECT
//CON EL THEN capturamos el objeto es decir la promesa
// .then( (resp)=>{
// }

  
  // throw new Error ('Error')
  // console.log(resp)})       
  
  // console.log(resp) )  //err => console.log(err) )

// err => console.log(err) por que este parametro casi no se ve? y se ve siempre el "catch"
// .catch(err => console.log(err))
//final de la promesa el finally.
// .finally(()=> console.log())

//el catch captura errores y los rechazados tambien. es decir captura todo.

// return (
  
//     <div></div>
// )
// }


//Callbacks son funciones pasadas por parametros nada mas que eso
// Esto se llama callback lo de abajo
// (()=>{}) -- el timeout se pone el tiempo en este caso 3 segundos = 3000
// setTimeout(() => {}, timeout);
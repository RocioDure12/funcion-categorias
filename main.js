const convertirAJSON = (objeto) => {
    const objetoConvertidoaJson=JSON.stringify(objeto);
      return objetoConvertidoaJson
   }
   
   const convertirDesdeJSONAJs = (objetoJSON) => {
       const JSONConvertidoAObjetoJs=JSON.parse(objetoJSON)
       return JSONConvertidoAObjetoJs
   }
   
   const guardarEnLocalStorage = (objetojs, clave) => {
       let objetoConvertidoAJSON=convertirAJSON(objetojs)
       localStorage.setItem(clave, objetoConvertidoAJSON)
   
   }
   
   
   const leerDesdeLocalStorage = (clave) => {
       let JSON = localStorage.getItem(clave)
       const objeto = convertirDesdeJSONAJs(JSON)
       return objeto
   
   }

const inputNombreCategoria=document.querySelector("#input-categorias")
const botonAgregarCategoria=document.querySelector("#btn-agregar-cat")
const categorias = ["Alimentos", "Mascotas", "Sueldo", "Transporte"]




//const convertirOperacionesAHTML = (array) => {

    /*let acc = ""
    array.map((operacion) => {
        acc = acc +
            `<div class="columns">
                <div class="column is-3">${operacion.descripcion}</div>
                <div class="column is-3">${operacion.categoria}</div>
                <div class="column is-2 ">${operacion.tipo}</div>
                <div class="column is-2 ">$${operacion.monto}</div>
                <div class="column is-2 ">
                    <button class="button is-small is-outlined mb-1">Editar</button>
                    <button class="button is-small   is-outlined">Eliminar</button>
                </div>
        
            </div>`


    })
    operaciones.innerHTML = acc
    //operaciones.innerHTML=operaciones.innerHTML+acc
}
*/
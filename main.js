import Articulo from "./Articulo.js";
import Lista from "./Lista.js"
class Main{
  constructor(){
    let lista = new Lista();
    this._div = document.querySelector("#insertados");
    document.querySelector("#btnAdd").addEventListener("click", () => {
      let objCons = {
        codigo: parseInt(document.querySelector("#codigo").value),
        nombre: (document.querySelector("#nombre").value),
        precio: parseInt(document.querySelector("#precio").value),
        cantidad: parseInt(document.querySelector("#cantidad").value),
        descripcion: (document.querySelector("#descripcion").value),
      }
      let art = new Articulo(objCons);
      lista.insertarOrdenado(art);
      lista.mostrarLista(this._div);
    });
    document.querySelector("#btnAct").addEventListener("click", () => {
      let codigoAnt = parseInt(document.querySelector("#antCodigo").value);
      let objCons = {
        nombre: (document.querySelector("#newNombre").value),
        precio: parseInt(document.querySelector("#newPrecio").value),
        cantidad: parseInt(document.querySelector("#newCantidad").value),
        descripcion: (document.querySelector("#newDescripcion").value),
      }
      lista.actualizarUnElemento(codigoAnt,objCons);
      lista.mostrarLista(this._div);
    });
    document.querySelector("#btnIn").addEventListener("click", () => {
      lista.invertirLista(this._div);
    });
    document.querySelector("#btnBorrar").addEventListener("click", () => {
      let borrar = parseInt(document.querySelector("#borrar").value);
      lista.borrar(borrar);
      lista.mostrarLista(this._div);
    });
    document.querySelector("#btnBuscar").addEventListener("click", () => {
      let buscar = parseInt(document.querySelector("#buscar").value);
      let div = document.querySelector("#busqueda");
      lista.buscar(div,buscar);
    });
  }
}
let m = new Main();
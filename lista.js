export default class Lista {
  constructor() {
    this._inicio = null;
  }
  mostrarLista(div) {
    div.innerHTML = " ";
    if (this._inicio) {
      let temp = this._inicio;
      do {
        div.innerHTML += (`Codigo: ${temp.codigo}, Nombre: ${temp.nombre}, Cantidad: ${temp.cantidad}, Precio: ${temp.precio}, Descripcion: ${temp.descripcion} <br>`);
        temp = temp.siguiente;
      } while (temp);
    }
  }
  invertirLista(div) {
    div.innerHTML = " ";
    let temp = this._inicio;
    while (temp.siguiente) {
      temp = temp.siguiente
    }
    while (temp) {
      div.innerHTML += (`Codigo: ${temp.codigo}, Nombre: ${temp.nombre}, Cantidad: ${temp.cantidad}, Precio: ${temp.precio}, Descripcion: ${temp.descripcion} <br>`);
      temp = temp.anterior;
    }
  }
  actualizarUnElemento(codigo, nuevoElemento) {
    let temp = this._inicio;
    while (temp) {
      if (temp.codigo == codigo) {
        temp.nombre = nuevoElemento.nombre;
        temp.precio = nuevoElemento.precio;
        temp.cantidad = nuevoElemento.cantidad;
        temp.descripcion = nuevoElemento.descripcion;
      }
      temp = temp.siguiente;
    }
  }
  insertarOrdenado(nuevoElemento) {
    if (!this._inicio) {
      this._inicio = nuevoElemento;
    } else {
      let temp = this._inicio;
      if (temp.siguiente) {
        while (temp.codigo < nuevoElemento.codigo && temp.siguiente) {
          temp = temp.siguiente;
        }
        if (temp.codigo < nuevoElemento.codigo) {
          temp.siguiente = nuevoElemento;
          nuevoElemento.anterior = temp;
          return;
        } else {
          temp.anterior = nuevoElemento;
          nuevoElemento.siguiente = temp;
          this._inicio = nuevoElemento;
          return;
        }
        nuevoElemento.anterior = temp.anterior;
        temp.anterior.siguiente = nuevoElemento;
        nuevoElemento.siguiente = temp;
        temp.anterior = nuevoElemento;
      } else {
        if (temp.codigo > nuevoElemento.codigo) {
          temp.anterior = nuevoElemento;
          nuevoElemento.siguiente = temp;
          this._inicio = nuevoElemento;
        } else {
          temp.siguiente = nuevoElemento;
          nuevoElemento.anterior = temp;
        }
      }
    }
  }
  borrar(codigo) {
    let temp = this._inicio;
    let count = 0;
    while (temp) {
      count++;
      if (temp.codigo == codigo) {
        if (count === 1 && temp.siguiente) {
          this._inicio = temp.siguiente;
          temp.siguiente = null;
          this._inicio.anterior = null;
          return;
        }
        if (count === 1) {
          this._inicio = null;
          return;
        }
        if (!temp.siguiente) {
          temp.anterior.siguiente = null;
          temp.anterior = null;
          return;
        }
        temp.anterior.siguiente = temp.siguiente;
        temp.siguiente.anterior = temp.anterior;
      }
      temp = temp.siguiente;
    }
    console.log(this._inicio);
  }
  buscar(div, codigo) {
    div.innerHTML = " ";
    let temp = this._inicio;
    while (temp) {
      if (temp.codigo == codigo) {
        div.innerHTML += (`Codigo: ${temp.codigo}, Nombre: ${temp.nombre}, Cantidad: ${temp.cantidad}, Precio: ${temp.precio}, Descripcion: ${temp.descripcion} <br>`);
      }
      temp = temp.siguiente;
    }
  }
}
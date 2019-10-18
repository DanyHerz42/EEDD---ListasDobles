export default class Articulo {
  constructor(objCons) {
    this._codigo = objCons.codigo;
    this._nombre = objCons.nombre;
    this._precio = objCons.precio;
    this._cantidad = objCons.cantidad;
    this._descripcion = objCons.descripcion;
    this._siguiente = null;
    this._anterior = null;
  }
  get siguiente() {
    return this._siguiente;
  }
  get anterior(){
    return this._anterior;
  }
  get codigo() {
    return this._codigo;
  }
  get nombre() {
    return this._nombre;
  }
  get precio() {
    return this._precio;
  }
  get cantidad() {
    return this._cantidad;
  }
  get descripcion() {
    return this._descripcion;
  }
  set siguiente(newSiguiente) {
    this._siguiente = newSiguiente;
  }
  set anterior(newAnterior) {
    this._anterior = newAnterior;
  }
  set codigo(newCodigo) {
    this._codigo = newCodigo;
  }
  set nombre(newNombre) {
    this._nombre = newNombre;
  }
  set precio(newPrecio) {
    this._precio = newPrecio;
  }
  set cantidad(newCantidad) {
    this._cantidad = newCantidad;
  }
  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }
  toString() {
    return `${this._codigo}, ${this._nombre}, ${this._precio}, ${this._cantidad}, ${this._descripcion}, ${this._siguiente}`
  }
}
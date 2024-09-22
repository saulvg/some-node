function sum(a, b) {
  return a + b;
}

//Forma clasica de exportar en node.js 'commonJS'
//Al crear un objeto nos aseguramos de que no se pueda renombrar al importarlo ya que estamos creando un objeto clave valor
module.exports = { sum };

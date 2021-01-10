/**
 * Esto devolverá verdadero para los siguientes casos:
 * "", indefinido, nulo
 * @param  {any} value: Indica que valor se va evaluar
 * @return {Boolean}
 */
exports.isEmptyValue = (value) => {
  return (
    value === undefined ||
        value === null ||
        (typeof value === 'string' && value.trim().length === 0) ||
        (typeof value === 'number' && isNaN(value))
  )
}

exports.isPalindrome = (str) => {
  // Paso 1. Se crea la expresión regular para eliminar los caracteres no deseados
  const regExp = /[^A-Za-z0-9]/g
  // Paso 2. Ponga en minusculas la cadena y use la expresión regular
  const lowRegStr = str.toLowerCase().replace(regExp, '')
  // Paso 3. Utilice los métodos de encadenamiento con funciones integradas de Javascript para invertir una cadena
  const reverseStr = lowRegStr.split('').reverse().join('')
  // Paso 4. Verifique si la cadena de texto invertida es estrictamente igual a la cadena depurada y devuelva un booleano
  return reverseStr === lowRegStr
}

const { response } = require('express')
const {
  isEmptyValue,
  isPalindrome
} = require('../services/utils')

exports.getEcho = async (req, res = response) => {
  try {
    const testStr = req.query.text
    // validar si la cadena texto es vacia
    if (isEmptyValue(testStr)) {
      return res.status(400).send({
        error: 'no-text'
      })
    }
    // Se hace la revierte la cadena de texto
    const reverseStr = testStr.split('').reverse().join('')
    res.status(200).send({
      text: reverseStr,
      palindrome: isPalindrome(testStr)
    })
  } catch (error) {
    return res.status(400).send({
      error: error.message
    })
  }
}

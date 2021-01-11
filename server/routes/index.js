const express = require('express')
const router = express.Router()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger/swagger.json')
const { getEcho } = require('../controllers/echo')

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
router.get('/', function (req, res, next) {
  res.redirect('/api-docs')
})

/**
 * @swagger
 * /iecho:
 *   get:
 *     summary: "Obtener la cadena de texto invertida"
 *     description: Se le envía un texto y responde con el mismo texto invertido y verifica si es palindromo.
 *     tags: [Palindrome]
 *     parameters:
 *         - $ref: "#/parameters/textQuery"
 *     responses:
 *       200:
 *         description: Todo correcto
 *       400:
 *         description: Error en la validación o parámetros inválidos.
 */
router.get('/iecho', getEcho)

module.exports = router

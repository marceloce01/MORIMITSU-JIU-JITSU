/**
 * @openapi
 * tags:
 *   name: Class
 *   description: Endpoints de Turma
 */

/**
 * @openapi
 * /class/create:
 *   post:
 *     summary: Criar uma nova turma
 *     tags: [Class]
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 *       404:
 *         description: Instrutor não encontrado
 */
/**
 @openapi
 * tags:
 *  name: Users
 *  description: Endpoints de Usuários 
 */

 /**
 * @openapi
 * /user/register:
 *   post:
 *     summary: Cadastro de Usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - role
 *             properties:
 *               username:
 *                 type: string
 *                 example: "usuario_01"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "usuario@gmail.com"
 *               password:
 *                 type: string
 *                 example: "Usuario@123"
 *               role:
 *                 type: string
 *                 example: "TEACHER"
 *     responses:
 *       201:
 *         description: Cadastro realizado com sucesso
 *       409:
 *         description: Usuário já cadastrado
 *       422:
 *         description: Mensagem de erro ZOD
 */
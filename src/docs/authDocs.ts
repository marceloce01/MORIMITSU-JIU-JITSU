//Auth
/**
 * @openapi
 * tags:
 *  name: Auth
 *  description: Endpoints de Autenticação 
 */

//login
/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Login de usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "usuario@gmail.com"
 *               password:
 *                 type: string
 *                 example: "usuario12345"
 *               role:
 *                 type: string
 *                 example: "TEACHER"
 *     responses:
 *       200:
 *         description: Usuário autenticado
 *                            
 *       400:
 *         description: Dados faltando
 *          
 *       401:
 *         description: Dados incorretos ou não existentes
 *         
 *       403:
 *         description: Campo de login errado 
 *         
 *       422:
 *         description: Erro (ZOD)
 */ 

//request-reset
/**
 * @openapi
 * /auth/request-reset:
 *   post:
 *     summary: Enviar ao usuário o e-mail de recuperação 
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email             
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "usuario@gmail.com"
 * 
 *     responses:
 *       200:
 *         description: E-mail enviado
 *                               
 *       400:
 *         description: Dados faltando
 *         
 *       401:
 *         description: E-mail incorreto ou não cadastrado no sistema
 * 
 *       422:
 *         description: Formato de dados inválidos (ZOD)         
 */

//verify-code
/**
 * @openapi
 * /auth/verify-code:
 *   post:
 *     summary: Verifica o código e retorna o token para a redefinição de senha
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code             
 *             properties:
 *               code:
 *                 type: string
 *                 example: "890465"
 * 
 *     responses:
 *       200:
 *         description: Código válido! Apenas o token é necessário, retorno os dados por segurança!
 *         
 *       400:
 *         description: Dados faltando
 *        
 *       401:
 *         description: Código inválido ou expirado
 *         
 *       422:
 *         description: Código incompleto (ZOD)
 *        
 */ 
 
//reset-password
/**
 * @openapi
 * /auth/reset-password/{userId}:
 *   post:
 *     summary: Redefinir senha do usuário
 *     tags: [Auth]
 *     parameters:
 *       - name: userId 
 *         in: path
 *         description: ID do Aluno retornado
 *         required: true
 *         schema: 
 *           type: string
 *                   
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:   
 *               - newPassword             
 *             properties:
 *                                
 *               newPassword:
 *                 type: string             
 *                 example: "Marcelo@234"
 * 
 *     responses:
 *       200:
 *         description: Senha redefinida                 
 *      
 *       400:
 *         description: Dados faltando        
 * 
 *       422:
 *         description: Formato de dados inválidos (ZOD)
 */ 

//request-registration
/**
 * @openapi
 * /auth/request-registration:
 *   post:
 *     summary: Enviar ao ADMIN o e-mail de solicitação de cadastro
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email             
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "usuario@gmail.com"
 * 
 *     responses:
 *       200:
 *         description: E-mail enviado             
 *      
 *       400:
 *         description: Dados faltando        
 * 
 *       409:
 *         description: E-mail já cadastrado
 *        
 *       422:
 *         description: Erro(ZOD)
 *        
 */

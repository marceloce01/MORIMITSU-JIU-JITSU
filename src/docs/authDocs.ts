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
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                token:
 *                  type: string 
 *                  description: Token JWT
 *                  example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWg3eGJpMHcwMDAwdjJ6OGlvNDU3ZjJtIiwidXNlcm5hbWUiOiJ1c3VhcmlvIiwiaWF0IjoxNzYxNDk2OTg1LCJleHAiOjE3NjE1MDA1ODV9.9JyU_LP-gKA7-9lAEekljub9K-C_2oDhbInTT1Pz3vg"
 *                
 *                user:
 *                  type: object
 *                  properties:
 *                      id:
 *                        type: string
 *                        example: "cmh7xbi0w0000v2z8io457f2m"
 * 
 *                      username:
 *                        type: string
 *                        example: "Lyrane Teixeira"
 * 
 *                      email:
 *                        type: string
 *                        example: "lyrane@gmail.com"
 * 
 *                      role:
 *                        type: string
 *                        example: "TEACHER"
 * 
 *                status:
 *                  type: integer              
 *                  example: 200
 *     
 *                code:
 *                  type: string              
 *                  example: "OK"
 *                
 *      
 *       400:
 *         description: Dados faltando
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Email e Senha obrigatórios!" 
 * 
 *                status:
 *                  type: integer              
 *                  example: 400
 * 
 *                code:
 *                  type: string              
 *                  example: "BAD_REQUEST"
 * 
 *       401:
 *         description: Dados incorretos ou não existentes
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Email ou Senha incorreto!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 401 
 * 
 *                code:
 *                  type: string              
 *                  example: "UNAUTHORIZED"
 * 
 *       403:
 *         description: Campo de login errado 
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Usuário não está cadastrado como TEACHER!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 403 
 * 
 *                code:
 *                  type: string              
 *                  example: "FORBIDDEN"
 * 
 *       422:
 *         description: Formato de dados inválidos (ZOD)
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Formato de e-mail inválido!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 422 
 * 
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY"   
 * 
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
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Se o e-mail estiver cadastrado, você receberá um código de redefinição."
 *                
 *                status:
 *                  type: integer              
 *                  example: 200 
 * 
 *                code:
 *                  type: string              
 *                  example: "OK"                   
 *      
 *       400:
 *         description: Dados faltando
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Email obrigatório!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 400
 * 
 *                code:
 *                  type: string              
 *                  example: "BAD_REQUEST"
 * 
 *       401:
 *         description: E-mail incorreto ou não cadastrado no sistema
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Email incorreto!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 401 
 * 
 *                code:
 *                  type: string              
 *                  example: "UNAUTHORIZED"
 * 
 *       422:
 *         description: Formato de dados inválidos (ZOD)
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Formato de e-mail inválido!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 422
 * 
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY"
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
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: object
 *                  properties:
 *                      token:
 *                        type: string
 *                        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWhhbTV5YmswMDAwdjJsMDVweTFwdG9oIiwidXNlcm5hbWUiOiJNYXJjZWxvIEJlemVycmEiLCJyb2xlIjoiVEVBQ0hFUiIsImlhdCI6MTc2MjAyNTI1OSwiZXhwIjoxNzYyMDI2MTU5fQ.Og9xZJyHuc_6CD8DVxmanc2hPvAsXSu-Ao2WJ9rP6sI"
 * 
 *                      user:
 *                        type: object
 *                        properties:
 *                          id:
 *                            type: string
 *                            example: "cmh7xbi0w0000v2z8io457f2m"
 * 
 *                          username:
 *                            type: string
 *                            example: "Lyrane Teixeira"
 * 
 *                          email:
 *                            type: string
 *                            example: "lyrane@gmail.com"
 * 
 *                          role:
 *                            type: string
 *                            example: "TEACHER"
 * 
 *                      status:
 *                        type: integer              
 *                        example: 200    
 *                  
 *                      code: 
 *                        type: string
 *                        example: "OK"
 * 
 *       400:
 *         description: Dados faltando
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Código obrigatório"
 * 
 *                status:
 *                  type: integer              
 *                  example: 400 
 * 
 *                code:
 *                  type: string              
 *                  example: "BAD_REQUEST"
 * 
 *       401:
 *         description: Código inválido ou expirado
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Código Inválido ou Expirado!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 401
 * 
 *                code:
 *                  type: string              
 *                  example: "UNAUTHORIZED"
 * 
 *       422:
 *         description: Código incompleto (ZOD)
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Digite o código completo!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 422 
 * 
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY" 
 */ 
 
//reset-password
/**
 * @openapi
 * /auth/reset-password:
 *   post:
 *     summary: Redefinir senha do usuário
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
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
 *                 example: "marcelo123"
 * 
 *     responses:
 *       200:
 *         description: Senha redefinida
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Senha redefinida com sucesso!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 200
 * 
 *                code:
 *                  type: string              
 *                  example: "OK"                      
 *      
 *       400:
 *         description: Dados faltando
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Nova Senha obrigatória!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 400 
 * 
 *                code:
 *                  type: string              
 *                  example: "BAD_REQUEST"
 * 
 *       422:
 *         description: Formato de dados inválidos (ZOD)
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Senha muito curta! (Minímo: 6 caracteres)"
 * 
 *                status:
 *                  type: integer              
 *                  example: 422 
 * 
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY"
 * 
 * 
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
 *         description: E-mail enviado!
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Seu e-mail foi solicitado ao ADMIN!"
 *          
 *                status:
 *                  type: integer              
 *                  example: 200
 * 
 *                code:
 *                  type: string              
 *                  example: "OK"                    
 *      
 *       400:
 *         description: Dados faltando
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Email obrigatório!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 400 
 * 
 *                code:
 *                  type: string              
 *                  example: "BAD_REQUEST"
 * 
 *       409:
 *         description: E-mail já cadastrado
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Email já cadastrado!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 409 
 * 
 *                code:
 *                  type: string              
 *                  example: "CONFLICT"   
 *       422:
 *         description: Formato de dados inválidos (ZOD)
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Formato de e-mail inválido!"
 * 
 *                status:
 *                  type: integer              
 *                  example: 
 * 
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY"
 */

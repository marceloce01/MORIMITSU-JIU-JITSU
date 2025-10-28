/**
 * @openapi
 * tags:
 *  name: Auth
 *  description: Endpoints de Autenticação
 * 
 * 
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
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY"    
 * 
 * 
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
 *         description: E-mail enviado!
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Se o e-mail estiver cadastrado, você receberá um link de redefinição."                    
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
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY"
 * 
 * @openapi
 * /auth/reset-password/{token}:
 *   post:
 *     summary: Redefinir senha do usuário
 *     tags: [Auth]
 * 
 *     parameters:
 *     - in: path
 *       name: token
 *       required: true
 *       schema:
 *         type: string
 *         description: Token de redefinição de senha
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
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY"
 * 
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
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY"
 */

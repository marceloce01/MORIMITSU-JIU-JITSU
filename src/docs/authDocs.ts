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
 *                  example: "Email ou Senha incorretos!" 
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
 */

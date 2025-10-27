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
 * 
 * 
 */

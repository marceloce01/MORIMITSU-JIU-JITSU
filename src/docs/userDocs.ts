/**
 @openapi
 * tags:
 *  name: Users
 *  description: Endpoints de Usuários 
 */

 //Cadastrar Usuário
 /**
 * @openapi
 * /user/register:
 *   post:
 *     summary: Cadastro de Usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
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

 /**
 * @openapi
 * /user/update/{id}:
 *   put:
 *     summary: Atualizar dados do usuário selecionando ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do Aluno
 *         required: true
 *         schema: 
 *           type: string           
 *     
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object            
 *             properties:
 *               username:
 *                 type: string
 * 
 *               image_user_url:
 *                 type: string
 *                 format: binary
 *  
 *     responses:
 *       200:
 *         description: Dados atualizados
 *       
 *       401:
 *         description: Acesso negado
 * 
 *       404:
 *         description: ID não fornecido ou Aluno não encontrado
 */

 //Filtrar Usuário
 /**
 * @openapi
 * /user/filter:
 *   get:
 *     summary: Filtrar usuário por algum atributo
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: query
 *         description: ID do Aluno
 *         schema: 
 *           type: string
 * 
 *       - name: username
 *         in: query
 *         description: Nome de usuário
 *         schema: 
 *           type: string
 * 
 *       - name: email
 *         in: query
 *         description: E-mail do usuário
 *         schema: 
 *           type: string
 *           format: email
 * 
 *       - name: role
 *         in: query
 *         description: Apelido do aluno
 *         schema: 
 *           type: string
 *           enum: [ADMIN, TEACHER]
 * 
 *       - name: class_id
 *         in: query
 *         description: ID de uma Turma
 *         schema: 
 *           type: string
 * 
 *     responses:
 *       200:
 *         description: Filtragem de alunos
 * 
 */

 /**
 * @openapi
 * /user:
 *   get:
 *     summary: Filtrar todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 * 
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         
 */

 /**
 * @openapi
 * /user/students/{id}:
 *   get:
 *     summary: Filtrar todos os alunos de um professor
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 * 
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do usuário
 *         required: true
 *         schema: 
 *           type: string
 * 
 *     responses:
 *       200:
 *         description: Lista de alunos
 *         
 */

 /**
 * @openapi
 * /user/classes/{id}:
 *   get:
 *     summary: Filtrar todas as turmas de um professor
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do usuário
 *         required: true
 *         schema: 
 *           type: string
 * 
 *     responses:
 *       200:
 *         description: Lista de turmas
 *         
  */

  /**
 * @openapi
 * /user/profile/{email}:
 *   get:
 *     summary: Perfil de Usuário 
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: email
 *         in: path
 *         description: E-mail do usuário
 *         required: true
 *         schema: 
 *           type: string
 * 
 *     responses:
 *       200:
 *         description: Perfil
 *         
  */
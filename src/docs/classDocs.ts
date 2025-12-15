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
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - teacher_id
 *             properties:
 *               name:
 *                 type: string
 *               image_class_url:
 *                 type: string
 *                 format: binary          
 *               teacher_id:
 *                 type: string             
 *               local:
 *                 type: string
 *                
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 *       401:
 *         description: Acesso negado
 *       404:
 *         description: Instrutor não encontrado
 * 
 */

/**
 * @openapi
 * /class/update/{id}:
 *   put:
 *     summary: Atualizar dados de uma turma selecionando ID
 *     tags: [Class]
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
 *         application/json:
 *           schema:
 *             type: object            
 *             properties:
 *               name:
 *                 type: string
 * 
 *               image_class_url:
 *                 type: string
 *                 format: binary
 *                 
 *               teacher_id:
 *                 type: string           
 *                 
 *               local:
 *                 type: string           
 *                 
 *     responses:
 *       200:
 *         description: Dados atualizados
 *       
 *       401:
 *         description: Acesso negado
 * 
 *       404:
 *         description: ID não fornecido ou Turma não encontrado         
 * 
 */

/**
 * @openapi
 * /class/filter:
 *   get:
 *     summary: Filtrar turma por algum atributo
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: query
 *         description: ID da Turma
 *         schema: 
 *           type: string
 * 
 *       - name: name
 *         in: query
 *         description: Nome da turma
 *         schema: 
 *           type: string
 * 
 *       - name: teacher_id
 *         in: query
 *         description: ID do professor
 *         schema: 
 *           type: string
 * 
 *       - name: teacher_name
 *         in: query
 *         description: Nome do professsor
 *         schema: 
 *           type: string
 * 
 * 
 *       - name: local
 *         in: query
 *         description: Local da turma
 *         schema: 
 *           type: string
 * 
 * 
 *     responses:
 *       200:
 *         description: Filtragem de alunos sucedida
 *       
 *       401:
 *         description: Acesso negado
 * 
 *       404:
 *         description: Nenhum aluno encontrado
 *         
 */

/**
 * @openapi
 * /class:
 *   get:
 *     summary: Filtrar todas as turmas
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 * 
 *     responses:
 *       200:
 *         description: Lista de turmas
 *       401:
 *         description: Acesso negado
 *       404:
 *        description: Nenhuma turma encontrada
 * 
 *         
 */

/**
 * @openapi
 * /class/add-student/{class_id}:
 *   post:
 *     summary: Enturmar um aluno na turma
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: class_id
 *         in: path
 *         description: ID da turma
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
 *               - student_id            
 *             properties:
 *               student_id:
 *                 type: string
 * 
 * 
 *     responses:
 *       200:
 *         description: Aluno enturmado
 *       
 *       401:
 *         description: Acesso negado
 * 
 *       404:
 *         description: Turma ou Aluno não encontrado
 *         
 */

/**
 * @openapi
 * /class/{id}:
 *   delete:
 *     summary: Deletar turma
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da Turma
 *         required: true
 *         schema: 
 *           type: string       
 *                
 *     responses:
 *       200:
 *         description: Turma deletada
 *       401:
 *         description: Acesso negado
 *       404:
 *         description: Turma não encontrada
 */      

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
 *         multipart/form-data:
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

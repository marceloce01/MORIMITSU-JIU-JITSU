/**
 * @openapi
 * tags:
 *   name: Presence
 *   description: Endpoints de Presença
 * 
 */

/**
 * @openapi
 * /presence/add/{classroom_id}:
 *   post:
 *     summary: Atribuir presença ao aluno 
 *     tags: [Presence]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: classroom_id
 *         in: path
 *         description: ID da Aula
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
 *               - presence
 *             properties:               
 *               student_id:
 *                 type: string             
 *               presence:
 *                 type: boolean
 *                
 *     responses:
 *       201:
 *         description: Presença registrada
 *       401:
 *         description: Acesso negado
 *       404:
 *         description: Aula ou Student não encontrado
 * 
 */

/**
 * @openapi
 * /presence/update/{classroom_id}:
 *   put:
 *     summary: Atualizar presença ao aluno 
 *     tags: [Presence]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: classroom_id
 *         in: path
 *         description: ID da Aula
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
 *               - presence
 *             properties:               
 *               student_id:
 *                 type: string             
 *               presence:
 *                 type: boolean
 *                
 *     responses:
 *       200:
 *         description: Presença atualizada
 *       401:
 *         description: Acesso negado
 *       404:
 *         description: Aula ou Student não encontrado
 * 
 */

/**
 * @openapi
 * /presence/{classroom_id}:
 *   get:
 *     summary: Ver as presenças registradas de uma aula
 *     tags: [Presence]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: classroom_id
 *         in: path
 *         description: ID da Aula
 *         required: true
 *         schema: 
 *           type: string     
 *                 
 *     responses:
 *       200:
 *         description: Presenças
 *       401:
 *         description: Acesso negado
 *       404:
 *         description: Aula não encontrada
 * 
 */
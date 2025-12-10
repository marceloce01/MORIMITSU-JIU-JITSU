/**
 * @openapi
 * tags:
 *   name: Classroom
 *   description: Endpoints de Aula
 * 
 */

/**
 * @openapi
 * /classroom/{class_id}:
 *   post:
 *     summary: Criar uma aula 
 *     tags: [Classroom]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: class_id
 *         in: path
 *         description: ID da Turma
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
 *               - teacher_id
 *               - classroom_date
 *             properties:               
 *               teacher_id:
 *                 type: string             
 *               classroom_date:
 *                 type: string
 *                 format: date
 *                
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 *       401:
 *         description: Acesso negado
 *       404:
 *         description: Turma ou Instrutor não encontrado
 * 
 */
/**
 * @openapi
 * tags:
 *   name: Graduation
 *   description: Endpoints de Graduação
 */

/**
 * @openapi
 * /student/graduate/{id}:
 *   patch:
 *     summary: Graduar Aluno
 *     tags: [Graduation]
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
 *     responses:
 *       200:
 *         description: Aluno graduado
 *       401:
 *         description: Acesso negado
 *       404:
 *         description: Aluno não encontrado ou não selecionado
 *       405:
 *         description: Aluno não apto à graduar
 */

/**
 * @openapi
 * /student/fits-graduate:
 *   get:
 *     summary: Alunos aptos à graduar
 *     tags: [Graduation]
 *     security:
 *       - bearerAuth: [] 
 *                
 *     responses:
 *       200:
 *         description: Alunos aptos à graduação
 *       401:
 *         description: Acesso negado
 */
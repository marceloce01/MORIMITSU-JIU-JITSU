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
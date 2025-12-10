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
 *       404:
 *         description: Aluno não encontrado ou não selecionado
 */
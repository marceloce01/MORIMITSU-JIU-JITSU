/**
 * @openapi
 * tags:
 *   name: Promote to Teacher
 *   description: Endpoints de Graduação
 */

/**
 * @openapi
 * /student/promote/{id}:
 *   patch:
 *     summary: Promover aluno a professor
 *     tags: [Promote to Teacher]
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
 *         description: Aluno promovido
 *       401:
 *         description: Acesso negado
 *       404:
 *         description: Aluno não encontrado ou não selecionado
 *       405:
 *         description: Aluno não apto à ser promovido
 */
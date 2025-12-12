//Auth
/**
 * @openapi
 * tags:
 *  name: Celebrants
 *  description: Endpoint de Aniversariantes do Mês
 */

//student/celebrants-birth_day
/**
 * @openapi
 * /celebrants-birth-day:
 *   get:
 *     summary: Aniversariantes do Mês
 *     tags: [Celebrants]
 *     security:
 *       - bearerAuth: []
 * 
 *     responses:
 *       200:
 *         description: Lista de alunos 
 *      
 *       404:
 *         description: Nenhum aluno aniversariante no mês
 *         
 */
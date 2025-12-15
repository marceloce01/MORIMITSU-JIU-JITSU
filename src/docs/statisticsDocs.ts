/**
 * @openapi
 * tags:
 *   name: Statistics
 *   description: Endpoints de estatísticas
 */

/**
 * @openapi
 * /statistics/summary:
 *   get:
 *     summary: Resumo Rápido
 *     tags: [Statistics]
 *     security:
 *       - bearerAuth: []
 * 
 *     responses:
 *       200:
 *         description: Resumo rápido
 *       401:
 *         description: Acesso negado
 *      
 */

/**
 * @openapi
 * /statistics/week-graphic:
 *   get:
 *     summary: Frequência das últimas 4 semanas
 *     tags: [Statistics]
 *     security:
 *       - bearerAuth: []
 * 
 *     responses:
 *       200:
 *         description: Frequência das últimas 4 semanas
 *       401:
 *         description: Acesso negado
 *      
 */

/**
 * @openapi
 * /statistics/month-graphic:
 *   get:
 *     summary: Atividades por mês
 *     tags: [Statistics]
 *     security:
 *       - bearerAuth: []
 * 
 *     responses:
 *       200:
 *         description: Atividades por mês
 *       401:
 *         description: Acesso negado
 *      
 */
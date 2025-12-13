/**
 * @openapi
 * tags:
 *  name: Belts
 *  description: Endpoints de Faixas
 */

/**
 * @openapi
 * /belt-config/update/{belt}:
 *   put:
 *     summary: Alterar as configurações de faixa
 *     tags: [Belts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: belt
 *         in: path
 *         required: true
 *         description: Faixa 
 *         schema: 
 *           type: string
 *           enum: [WHITE, GRAY_WHITE, GRAY, GRAY_BLACK, YELLOW_WHITE, YELLOW, YELLOW_BLACK, ORANGE_WHITE, ORANGE, ORANGE_BLACK, GREEN_WHITE, GREEN, GREEN_BLACK, BLUE, PURPLE, BROWN, BLACK, RED_BLACK, RED_WHITE, RED]
 * 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object          
 *             properties:
 *               min_age:
 *                 type: integer
 *               max_age:
 *                 type: integer
 *               max_frequency:
 *                 type: integer           
 *               grade:
 *                 type: integer
 *    
 *     responses:
 *       200:
 *         description: Alteração realizada
 *      
 *       400:
 *         description: Dados inválidos
 * 
 *       404:
 *         description: Faixa não configurada
 */

/**
 * @openapi
 * /belt-config/filter:
 *   get:
 *     summary: Filtrar as configurações de faixa
 *     tags: [Belts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: belt
 *         in: query
 *         required: true
 *         description: Faixa 
 *         schema: 
 *           type: string
 *           enum: [WHITE, GRAY_WHITE, GRAY, GRAY_BLACK, YELLOW_WHITE, YELLOW, YELLOW_BLACK, ORANGE_WHITE, ORANGE, ORANGE_BLACK, GREEN_WHITE, GREEN, GREEN_BLACK, BLUE, PURPLE, BROWN, BLACK, RED_BLACK, RED_WHITE, RED]
 *    
 * 
 *     responses:
 *       200:
 *         description: Filtragem de configuração
 * 
 *       404:
 *         description: Faixa não configurada
 */

/**
 * @openapi
 * /belt-config/belts:
 *   get:
 *     summary: Filtrar as configurações de faixa
 *     tags: [Belts]
 *     security:
 *       - bearerAuth: []
 *    
 *     responses:
 *       200:
 *         description: Filtragem de configuração
 */


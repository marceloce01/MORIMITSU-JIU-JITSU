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
 *       404:
 *         description: Instrutor não encontrado
 */
//Student

/**
 * @openapi
 * tags:
 *  name: Students
 *  description: Endpoints de Aluno
 */

//student/register
/**
 * @openapi
 * /student/register:
 *   post:
 *     summary: Cadastro de aluno
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone              
 *               - email
 *               - cpf
 *               - gender
 *               - birth_date
 *               - belt
 *               - grade
 *               - city
 *               - street
 *               - district
 *               - number
 *  
 *             properties:
 *               name:
 *                 type: string
 *                 example: "José Marcelo Bezerra Filho"
 *               social_name:
 *                 type: string
 *                 example: "Marcelo Bezerra"
 *               phone:
 *                 type: string           
 *                 example: "33998764356"
 *               image_student_url:
 *                 type: string
 *                 format: binary           
 *                 example: "https://coisadefotografa.com/wp-content/uploads/2021/09/como-ter-fotos-mais-nitidas-scaled.jpg"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "marcelo@gmail.com"
 *               cpf:
 *                 type: string
 *                 example: "09865432145"
 *               gender:
 *                 type: string
 *                 enum: [MALE, FEMALE]
 *               birth_date:
 *                 type: string
 *                 format: date
 *                 example: "2025-10-31"
 *               current_frequency:
 *                 type: string          
 *                 example: "13"
 *               belt:
 *                 type: string                           
 *                 enum: [WHITE, GRAY_WHITE, GRAY, GRAY_BLACK, YELLOW_WHITE, YELLOW, YELLOW_BLACK, ORANGE_WHITE, ORANGE, ORANGE_BLACK, GREEN_WHITE, GREEN, GREEN_BLACK, BLUE, PURPLE, BROWN, BLACK, RED_BLACK, RED_WHITE, RED]
 *               grade:
 *                 type: string           
 *                 example: "1"
 *               city:
 *                 type: string           
 *                 example: "Cedro"
 *               street:
 *                 type: string           
 *                 example: "Rua B"
 *               district:
 *                 type: string           
 *                 example: "Prado"
 *               number:
 *                 type: string           
 *                 example: "123"
 *               complement:
 *                 type: string           
 *                 example: "Casa"
 *               guardian_phone:
 *                 type: string           
 *                 example: "33998764356"
 *               enrollment:
 *                 type: string           
 *                 example: "12"    
 * 
 *     responses:
 *       201:
 *         description: Aluno cadastrado         
 *      
 *       400:
 *         description: Dados faltando
 *    
 *       401:
 *         description: Acesso negado
 *         
 *       409:
 *         description: Dados já cadastrados
 *         
 *       422:
 *         description: Erro (ZOD)                      
 */
 
//studente/update
/**
 * @openapi
 * /student/update/{id}:
 *   put:
 *     summary: Atualizar dados do aluno selecionando ID
 *     tags: [Students]
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
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object            
 *             properties:
 *               name:
 *                 type: string
 * 
 *               image_student_url:
 *                 type: string
 *                 format: binary
 * 
 *               phone:
 *                 type: string           
 *                 
 *               email:
 *                 type: string
 *                 format: email
 * 
 *               cpf:
 *                 type: string  
 *              
 *               gender:
 *                 type: string
 *                 enum: [MALE, FEMALE]
 * 
 *               birth_date:
 *                 type: string
 *                 format: date
 * 
 *               current_frequency:
 *                 type: integer          
 * 
 *               belt:
 *                 type: string
 *                 enum: [WHITE, GRAY_WHITE, GRAY, GRAY_BLACK, YELLOW_WHITE, YELLOW, YELLOW_BLACK, ORANGE_WHITE, ORANGE, ORANGE_BLACK, GREEN_WHITE, GREEN, GREEN_BLACK, BLUE, PURPLE, BROWN, BLACK, RED_BLACK, RED_WHITE, RED]           
 * 
 *               grade:
 *                 type: integer           
 *                 
 *               city:
 *                 type: string           
 *                 
 *               street:
 *                 type: string           
 *                 
 *               district:
 *                 type: string           
 *                 
 *               number:
 *                 type: string           
 *                 
 *               complement:
 *                 type: string           
 *                 
 *               guardian_phone:
 *                 type: string           
 *                 
 *               enrollment:
 *                 type: integer           
 *                 
 * 
 *     responses:
 *       200:
 *         description: Dados atualizados
 *       
 *       401:
 *         description: Acesso negado
 * 
 *       404:
 *         description: ID não fornecido ou Aluno não encontrado
 * 
 *       400:
 *         description: ID não fornecido ou Aluno não encontrado
 * 
 *       422:
 *         description: Mensagem de erro do ZOD
 *         
 * 
 */

//Filtrar aluno
/**
 * @openapi
 * /student/filter:
 *   get:
 *     summary: Filtrar aluno por algum atributo
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: query
 *         description: ID do Aluno
 *         schema: 
 *           type: string
 * 
 *       - name: class_id
 *         in: query
 *         description: ID de uma Turma
 *         schema: 
 *           type: string
 * 
 *       - name: name
 *         in: query
 *         description: Nome do aluno
 *         schema: 
 *           type: string
 * 
 *       - name: social_name
 *         in: query
 *         description: Apelido do aluno
 *         schema: 
 *           type: string
 * 
 *       - name: phone
 *         in: query
 *         description: Telefone do aluno
 *         schema: 
 *           type: string
 * 
 *       - name: email
 *         in: query
 *         description: E-mail do aluno
 *         schema: 
 *           type: string
 * 
 *       - name: cpf
 *         in: query
 *         description: CPF do aluno
 *         schema: 
 *           type: string
 * 
 *       - name: gender
 *         in: query
 *         description: Gênero do aluno
 *         schema: 
 *           type: string
 *           enum: [MALE, FEMALE]
 *       
 *       - name: birth_date
 *         in: query
 *         description: Data de aniversário do aluno      
 *         schema: 
 *           type: string
 *           format: date
 * 
 *       - name: enrollment
 *         in: query
 *         description: Número de matrícula do aluno
 *         schema: 
 *           type: integer
 * 
 *       - name: belt
 *         in: query
 *         description: Faixa do aluno
 *         schema: 
 *           type: string
 *           enum: [WHITE, GRAY_WHITE, GRAY, GRAY_BLACK, YELLOW_WHITE, YELLOW, YELLOW_BLACK, ORANGE_WHITE, ORANGE,     ORANGE_BLACKGREEN_WHITE, GREEN, GREEN_BLACK, BLUE, PURPLE, BROWN, BLACK, RED_BLACK, RED_WHITE, RED]
 * 
 *       - name: grade
 *         in: query
 *         description: Grau de faixa do aluno
 *         schema: 
 *           type: integer
 * 
 *     responses:
 *       200:
 *         description: Filtragem de alunos sucedida
 *       
 *       401:
 *         description: Acesso negado
 * 
 *       404:
 *         description: Nenhum aluno encontrado
 *         
 * 
 */

//student/filtrar todos os alunos
/**
 * @openapi
 * /student:
 *   get:
 *     summary: Filtrar todos os alunos
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 * 
 *     responses:
 *       200:
 *         description: Lista de alunos 
 *       401:
 *         description: Acesso negado
 *       404:
 *        description: Nenhum aluno encontrado
 * 
 *         
 */

//studente/delete
/**
 * @openapi
 * /student/{id}:
 *   delete:
 *     summary: Deletar o aluno selecionando ID
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do Aluno
 *         required: true
 *         schema: 
 *           type: string
 *           example: "ccdsfkadftd-jgdttfga"
 * 
 *     responses:
 *       200:
 *         description: Aluno deletado
 *       
 *       401:
 *         description: Acesso negado
 * 
 *       404:
 *         description: Aluno não encontrado
 * 
 *         
 * 
 */

/**
 * @openapi
 * /student/belts-upper:
 *   get:
 *     summary: Filtrar todos os alunos com faixa roxa ou superior
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 * 
 *     responses:
 *       200:
 *         description: Lista de alunos 
 *       401:
 *         description: Acesso negado
 *         
 */
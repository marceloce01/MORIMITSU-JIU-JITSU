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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - image_student_url
 *               - email
 *               - cpf
 *               - gender
 *               - birth_date
 *               - current_frequency
 *               - belt
 *               - grade
 *               - city
 *               - street
 *               - district
 *               - number
 *               - complement
 *               - guardian_phone
 *               - enrollment
 *  
 *             properties:
 *               name:
 *                 type: string
 *                 example: "José Marcelo Bezerra Filho"
 *               phone:
 *                 type: string           
 *                 example: "33998764356"
 *               image_student_url:
 *                 type: string           
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
 *                 example: "MALE"
 *               birth_date:
 *                 type: string
 *                 format: date
 *                 example: "2025-10-31"
 *               current_frequency:
 *                 type: string          
 *                 example: "13"
 *               belt:
 *                 type: string           
 *                 example: "WHITE"
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
 *       200:
 *         description: Aluno cadastrado
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties: 
 *                message:
 *                  type: string
 *                  example: "Aluno cadastrado!"
 *                                                    
 *                student:
 *                  type: object
 *                  properties:
 *                      id:
 *                        type: string
 *                        example: "ccdsfkadftd-jgdttfga"
 *                      name:
 *                        type: string
 *                        example: "José Marcelo Bezerra Filho"
 *                      phone:
 *                        type: string           
 *                        example: "33998764356"
 *                      email:
 *                        type: string
 *                        format: email
 *                        example: "marcelo@gmail.com"
 *                      cpf:
 *                        type: string
 *                        example: "09865432145"
 *                      gender:
 *                        type: string
 *                        example: "MALE"
 *                      birth_date:
 *                        type: string
 *                        format: date
 *                        example: "2025-10-31"
 *                      current_frequency:
 *                        type: string          
 *                        example: "13"
 *                      belt:
 *                        type: string           
 *                        example: "WHITE"
 *                      grade:
 *                        type: string           
 *                        example: "1"
 *                      city:
 *                        type: string           
 *                        example: "Cedro"
 *                      street:
 *                        type: string           
 *                        example: "Rua B"
 *                      district:
 *                        type: string           
 *                        example: "Prado"
 *                      number:
 *                        type: string           
 *                        example: "123"
 *                      complement:
 *                        type: string           
 *                        example: "Casa"
 *                      guardian_phone:
 *                        type: string           
 *                        example: "33998764356"
 *                      enrollment:
 *                        type: string           
 *                        example: "12"    
 * 
 *                status:
 *                  type: integer              
 *                  example: 200
 *     
 *                code:
 *                  type: string              
 *                  example: "OK"
 *                
 *      
 *       400:
 *         description: Dados faltando
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Preencha todos os campos obrigatórios!" 
 * 
 *                status:
 *                  type: integer              
 *                  example: 400
 * 
 *                code:
 *                  type: string              
 *                  example: "BAD_REQUEST"
 *         
 *       409:
 *         description: Dados já cadastrados
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Dados únicos já cadastrados"
 * 
 *                status:
 *                  type: integer              
 *                  example: 409 
 * 
 *                code:
 *                  type: string              
 *                  example: "FORBIDDEN"
 * 
 *       422:
 *         description: Formato de dados inválidos (ZOD)
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:                                                  
 *                message:
 *                  type: string              
 *                  example: "Mensagem do Zod"
 * 
 *                status:
 *                  type: integer              
 *                  example: 422 
 * 
 *                code:
 *                  type: string              
 *                  example: "UNPROCESSABLE_ENTITY"   
 * 
 * 
 * 
 * 
 * 
 *                      
 */
 
//studente/update
/**
 * @openapi
 * /student/update/{id}:
 *   put:
 *     summary: Atualizar dados do aluno selecionando ID
 *     tags: [Students]
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
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - image_student_url
 *               - phone
 *               - email
 *               - cpf
 *               - gender
 *               - birth_date
 *               - current_frequency
 *               - belt
 *               - grade
 *               - city
 *               - street
 *               - district
 *               - number
 *               - complement
 *               - guardian_phone
 *               - enrollment
 *  
 *             properties:
 *               name:
 *                 type: string
 *                 example: "José Marcelo Bezerra Filho"
 * 
 *               image_student_url:
 *                 type: string
 *                 example: "https://coisadefotografa.com/wp-content/uploads/2021/09/como-ter-fotos-mais-nitidas-scaled.jpg"
 * 
 *               phone:
 *                 type: string           
 *                 example: "33998764356"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "marcelo@gmail.com"
 *               cpf:
 *                 type: string
 *                 example: "09865432145"
 *               gender:
 *                 type: string
 *                 example: "MALE"
 *               birth_date:
 *                 type: string
 *                 format: date
 *                 example: "2025-10-31"
 *               current_frequency:
 *                 type: string          
 *                 example: "13"
 *               belt:
 *                 type: string           
 *                 example: "WHITE"
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
 *       200:
 *         description: Dados atualizados
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

//student/filtrar todos os alunos
/**
 * @openapi
 * /student:
 *   get:
 *     summary: Filtrar todos os alunos
 *     tags: [Students]
 * 
 *     responses:
 *       200:
 *         description: Lista de alunos 
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties: 
 *                    
 *                students:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties: 
 *                      id:
 *                        type: string
 *                        example: "ccdsfkadftd-jgdttfga"
 *                    name:
 *                        type: string
 *                        example: "José Marcelo Bezerra Filho"
 *                    phone:
 *                        type: string           
 *                        example: "33998764356"
 *                    email:
 *                        type: string
 *                        format: email
 *                        example: "marcelo@gmail.com"
 *                    cpf:
 *                        type: string
 *                        example: "09865432145"
 *                    gender:
 *                        type: string
 *                        example: "MALE"
 *                    birth_date:
 *                        type: string
 *                        format: date
 *                        example: "2025-10-31"
 *                    current_frequency:
 *                        type: string          
 *                        example: "13"
 *                    belt:
 *                        type: string           
 *                        example: "WHITE"
 *                    grade:
 *                        type: string           
 *                        example: "1"
 *                    city:
 *                        type: string           
 *                        example: "Cedro"
 *                    street:
 *                        type: string           
 *                        example: "Rua B"
 *                    district:
 *                        type: string           
 *                        example: "Prado"
 *                    number:
 *                        type: string           
 *                        example: "123"
 *                    complement:
 *                        type: string           
 *                        example: "Casa"
 *                    guardian_phone:
 *                        type: string           
 *                        example: "33998764356"
 *                    enrollment:
 *                        type: string           
 *                        example: "12"    
 * 
 *                status:
 *                  type: integer              
 *                  example: 200
 *     
 *                code:
 *                  type: string              
 *                  example: "OK"
 */

//studente/delete
/**
 * @openapi
 * /student/{id}:
 *   delete:
 *     summary: Deletar o aluno selecionando ID
 *     tags: [Students]
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
 *       404:
 *         description: Aluno não encontrado
 *         
 * 
 */
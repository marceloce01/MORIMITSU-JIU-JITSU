//Student

/**
 * @openapi
 * tags:
 *  name: Students
 *  description: Endpoints relacionados a alunos
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
 
//student/filtrar todos os alunos
/**
 * @openapi
 * /student/:
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
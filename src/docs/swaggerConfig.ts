import { Express } from "express"
import swaggerUi from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API MORIMITSU JIU-JITSU",
            version: "1.0.0",
            description: "Documentaçao interativa da API"
        },

        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local',
            },

            {
                url: 'https://morimitsu-jiu-jitsu.onrender.com',
                description: 'Servidor Online',  
            },
        ],
    },

    apis: process.env.NODE_ENV === "production"
    ? ["./dist/routes/*.js", "./dist/controllers/*.js", "./dist/docs/*.js"] // Produção
    : ["./src/routes/*.ts", "./src/controllers/*.ts", "./src/docs/*.ts"]    // Local
}

export const swaggerSpec = swaggerJsDoc(swaggerOptions)

export function setupSwagger(app: Express){
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec) )
}
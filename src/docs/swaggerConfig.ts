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

    apis: ['./src/routes/*.ts', './src/controllers/*.ts', './src/docs/*.ts'],
}

export const swaggerSpec = swaggerJsDoc(swaggerOptions)
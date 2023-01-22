import fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const PORT = 3333

const app = fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: PORT,
}).then(() => {
    console.log(`Server is running on port ${PORT} \nBrower access: http://localhost:3333`);
    
})
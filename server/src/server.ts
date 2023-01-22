import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const PORT = 3333

const app = fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()
    
    return habits
})

app.listen({
    port: PORT,
}).then(() => {
    console.log(`Server is running on port ${PORT} \nBrower access: http://localhost:3333`);
    
})
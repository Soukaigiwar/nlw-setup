# nlw-setup

# back-end setup
    create src folder
    create server.ts file
    npm init -y // to init project
    npm i fastify // to install Fastify
    npm i typescript -D // to install typescript as dev dependency
                        after install typescript, change tsconfig.json file on 
                        'target': "2016", change to "2020" to update compatibity
                         with newer version of typescript. 
    npm i tsx -D // to install tsx as dev dependency because node don't run
                    typescript by default
    npm i prisma -D // to install prisma ORM
    npm i @prisma/client // to install client
    npx prisma init --datasource-provider SQLite // to init prisma using SQLite
                                                    database SQLite database is 
                                                    a on-memory database to 
                                                    avoid use docker to 
                                                    instantiate mysql or other 
                                                    database that is the fastest
                                                    way to dev a app to run
    after create model, run:
    npx prisma migrate dev // to create a SQL command to create table as 
                              described on schema.prisma file the migrations 
                              works as version control like git
    npx prisma studio // to run prisma viewer on browser
    import PrismaClient from '@prisma/client' 
    const prisma = new PrismaClient() // to consume data using prisma ORM 
    npm i @fastify/cors // to install cors (enable comm between diferent servers
                           eg. remote Server > my Computer) or other devices
    import cors from '@fastify/cors' 
    add app.register(cors) after create app constant receiving Fastify()

# front-end setup

    npm create vite@latest // to create reactjs new project
    project name web // will be the folder name
    select framework React
    select TypeScript variant
    npm install // to install all dependencies previously configured

    Fundamentos do react
        Components: tudo que queremos reaproveitar / isolar
        Propriedade: uma informação enviada para modificar um componente visual
                     ou comportamentalmente

    npm i tailwindcss postcss autoprefixer -D // install all 3 at same time
                                                 postcss provide automated tasks
                                                 tailwindcss is a plugin from
                                                 postcss and autoprefixer add 
                                                 brower prefix like -webkit-
    npx tailwindcss init -p // -p to create postcss.config.cjs too
    create styles folder into src folder
    create global.css file into src/style/ folder
    install postcss and tailwind extensions on vscode to use them
    on global.css file, add @tailwind base, utilities and components
    to use tailwind must import the css file into App.tsx
    on tailwind.config.cjs, into content array, add which files will get 
        tailwind styles as well index.html on root folder.
    
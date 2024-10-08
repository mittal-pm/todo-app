const zod = require("zod")

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo,
    updateTodo
}

/*
to create a todo
    {
        title: ,
        description
    }

to update a todo
    {
        todo_id:
    }
*/
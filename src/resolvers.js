
export const resolvers = {
    Query: {
        async user(_, { id }) {
            return await knex('users').where({ id }).first()
        },

        async users(_, { offset, limit }) {
            return await knex('users')
        }
    },
    Mutation: {
        async createUser(_, input) {
            const { name, email, password } = input
            const resultado = await knex('users').insert({ name, email, password })
            return await knex('users').where({ id: resultado[0] }).first()
        },
        async updateUser(_, { id, name, email, password }) {
            await knex('users').update({ name, email, password }).where({ id })
            return knex('users').where({ id }).first()
        },
        async deleteUser(_, id) {
            return await knex('users').where('id', id).delete()
        }
    }
}
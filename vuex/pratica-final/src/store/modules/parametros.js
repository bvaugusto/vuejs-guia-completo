export default {
    state: {
        quantidade: 1,
        preco: 9.99
    },
    getters: {},
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },
    actions: {}
}
export default {
    namespaced: true,
    state: {
        produtos: [],
        quantidade: 1
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        //Dentro do namespaced
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 0);
        }

        //Fora do namespaced
        // adicionarProduto: {
        //     root: true,
        //     handler({ commit }, payload) {
        //         setTimeout(() => {
        //             commit('adicionarProduto', payload)
        //         }, 0);
        //     }
        // }
    }
}
new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: { //computed propert
        resultado() {
            return this.valor != 37 ? 'Valor Diferente!' : 'Valor Igual!'
        }
    },
    watch: {
        valor() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
        // resultado() {
        //     console.log('pass')
        //     setTimeout(() => {
        //         this.valor = 0
        //     }, 5000)
        // }
    }
})
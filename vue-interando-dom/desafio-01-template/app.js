new Vue({
    el: '#desafio',
    data: {
        nome: 'Bruno Augusto',
        idade: 28,
        srcImage: 'https://s.glbimg.com/es/sde/f/equipes/2018/03/12/atletico-mg.svg'
    },
    created() {

    },
    methods: {
        mathRandom: function() {
            let min = 0;
            let max = 1;
            let result = Math.random()*(+max - +min) + +min;
            return result
        },
        multiplicaIdade: function() {
            return this.idade * 3
        }
    }
})
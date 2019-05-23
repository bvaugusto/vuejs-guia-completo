new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta: function() {
            alert('Alerta Exibido')
        },
        eventoKeyDown: function(event) {
            this.valor = event.target.value
        }
    }
})
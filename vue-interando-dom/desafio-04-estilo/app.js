new Vue({
    el: '#desafio',
    data: {
        destaque: 'destaque',
        perigo: true,
        classe3: '',
        classe4: '',
        cor5: '',
        estilo5: {
            width: '100px',
            height: '100px'
        },
        estilo6: {
            width: '0%'
        },
        valor: 0
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.destaque = this.destaque == 'destaque'
                ? 'encolher' : 'destaque'
            }, 1000)
        },
        iniciarProgresso() {
            //let valor = 0;
            const temporizador = setInterval(() => {
                this.valor += 5;
                this.estilo6.width = `${this.valor}%`;
                if (this.valor == 100) clearInterval(temporizador)
            },300)
        },
        setPerigo(event) {
            if(event.target.value == 'true')
                this.perigo = true
            else
                this.perigo = false
                
        }
    }
})
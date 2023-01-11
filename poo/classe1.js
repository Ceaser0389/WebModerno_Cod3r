class Lancamento {
    constructor(nome='Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []

    }

    addLcancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach( l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario',4500)
const contaDeLuz = new Lancamento('Luz', -200)

const contas = new CicloFinanceiro(6,2018)
contas.addLcancamentos(salario,contaDeLuz)
console.log(contas.sumario())
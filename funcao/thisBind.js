
// bind serve para amarrar um objeto, evita o conflito de POO e funcional

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar();

const falar = pessoa.falar
falar()     

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


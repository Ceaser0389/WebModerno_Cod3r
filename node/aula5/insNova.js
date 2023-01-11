
// uma factory retrona um novo objeto

module.exports = () => {
    return{
        valor:1,
        inc() {
            this.valor++
        }
    }
 }
   
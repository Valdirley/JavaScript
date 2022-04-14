class Fila_Circ {

    constructor(MaxSize=10) {
      this.capacidade = MaxSize
      this.dados = []
      this.inicio = 0
      this.fim = -1
    }

    enqueue(dado) {
      if(this.isFull()){
        throw new Error ("OverFlow")
      } else {
        this.dados[this.fim] = dado
        if (this.fim  === this.capacidade){
          this.fim = 0;
        } else {
          this.fim = this.fim + 1
        }
      }
    }

    dequeue(){
        if (this.isEmpty()){
          throw new error ("UnderFlow")
        } else {
          let result = this.dados [this.inicio]
          if (this.inicio === this.capacidade) {
            this.inicio = 0
          } else {
            this.inicio = this.inicio + 1
          }
          return result
        }
    }

    front(){
        if(!this.isEmpty()) {
          return this.dados[this.inicio]
        }
    }

    clear(){
        this.inicio = 1
        this.fim = 1
    }

    toString(){

    }

    length() {
        if(this.isEmpty()){
          return 0
        } else if (this.inicio < this.fim){
          return this.fim - this.inicio
        } else {
          return this.capacidade - this.inicio + this.fim + 1
        }
    }
      

    isEmpty() {
        return this.inicio === this.fim
    }

    isFull(){
        return this.inicio === this.fim + 1
    }
}


export default Fila_Circ;
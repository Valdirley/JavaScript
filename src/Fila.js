class Fila{
    constructor(){
        this.inicio = 0;
        this.fim = 0;
        this.dados = [];
        this.maxSize = siza;
    }

    enqueue (dado) {
        if(!this.isFull()){
            this.dados[this.fim] = dado
        }
    }
    dequeue(){}
    front(){
        if(!this.isEmpty()){
            return this.dados[this.inicio]
        }
    }
    isEmpty(){
        return this.length() === 0;
    }
    isFull(){
        return this.length() === this.maxSize;
    }
    length(){
        return this.fim - this.inicio; 
    }
    clear(){
        this.inicio=0
        this.fim=0

    }
    toString(){}

}
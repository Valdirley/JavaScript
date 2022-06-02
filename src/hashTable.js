//Criando uma classe Hastable
/*
class HashTable{
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = [];
    }
*/
    //Criando uma função HASH

    loseHashCode(key) {
        if(typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i=0; i<tableKey.lenght; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
    hashCode(key) {
        return this.loseHashCode(key);
    }
//Inserindo uma chave e um valor na tabela hash

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    //Obtendo um valor da tabela hash

    get(key){
        const ValuePair = this.table[this.hashCode(key)];
        return ValuePair == null ? undefined : ValuePair.value;
    }

    //Removendo um valor da tabela Hash

    remove (key) {
        const hash = this.hashCode(key);
        const ValuePair = this.table[hash];
        if (ValuePair != null){
            this.table[hash] = null;
            return true;
        }
        return false;
    }
}

const hash = new HashTable();

    hash.put("Gandalf","camilly.guedes.707@ufrn.edu.br" )
    hash.put("John","dantasanderson57@hotmail.com" )
    hash.put("Tyrion","filopemaia2001@gmail.com" )
    console.log(hash.hashCode("Gandalf")+" - Gandalf");
    console.log(hash.hashCode("John")+" - John");
    console.log(hash.hashCode("Tyrion")+" - Tyrion");

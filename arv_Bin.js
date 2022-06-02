class Node {
    constructor(key) {
        this.key=key;
        this.esquerda=null;
        this.direita=null;
    }
    
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(key){
        if(this.root == null){
        this.root = new Node(key);
    } else {
        this.insertNode(this.root, key);
    }

    }
    
    insertNode(node, key){
        if(node.key < key){
            if (node.esquerda == null) {
                node.esquerda = new Node(key);
            } else {
                this.insertNode(node.esquerda, key);
            }

        }else {
            if (node.direita== null) {
                node.direita = new Node(key);
            } else {
                this.insertNode(node.direita, key);
            }
        }
    }

}


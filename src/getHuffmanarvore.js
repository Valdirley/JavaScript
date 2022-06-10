import Cod_Decod from "../src/Cod_Decod";

//Construindo arvore huffman  
function gethuff_arvore() {  
    //Resultado de número de ocorrências de cada caracter  
    let floresta = [];  
    for(let Caracter in this.hash){  
        let node = new Node(this.hash[Caracter], Caracter); 
        floresta.push(node);  
    }  

    let allNodes = []; //mesclar e armazenar os nós, pois qualquer nó na floresta não pode ser excluído, caso contrário. Deixei. A direita não encontrará o nó
    //Quando restar apenas um nó na floresta, o processo de mesclagem é finalizado e a árvore é gerada
    while(floresta.length !== 1){  
        //Encontrando as duas menores árvores da floresta e mesclando  
        floresta.sort((a, b) => {  
            return a.value - b.value;  
        });  

        let node = new Node(floresta[0].value + floresta[1].value, '');  
        allNodes.push(floresta[0]);  
        allNodes.push(floresta[1]);  
        node.esquerda  = allNodes[ allNodes.length  -2]; // na subárvore da esquerda colocando os caracteres com baixa frequência
        node.direita  = allNodes[ allNodes.length  -1]; //na subárvore da direita colocando os caracteres com alta frequência 

        //Excluindo as duas menores árvores  
        floresta = floresta.slice(2);  
        //Mesclando as árvores adicionadas  
        floresta.push(node);  
    }  

    //Existe apenas um nó esquerdo na árvore de huffman, ou seja, o nó raiz de toda a árvore
    return floresta[0];  
}
//Percorrendo a árvore de huffman e retornando uma tabela de caracteres originais e códigos binários  
function gethuff_Code(arvore){  
    let hash = {}; //tabela de referência cruzada
    let traversal = (node, curPath) => {  
        if (!node.length && !node.direita) return;  
        if (node.esquerda && !node.esquerda.esquerda && !node.esquerda.direita){  
            hash[node.esquerda.Caracter] = curPath + '0';  
        }  
        if (node.direita && !node.direita.esquerda && !node.direita.direita){  
            hash[node.direita.Caracter] = curPath + '1';  
        }  
        //Lendo o caminho esquerda e adicionando 0 ao caminho  
        if(node.esquerda){  
            traversal(node.esquerda, curPath + '0');  
        }  
        //Lendo o caminho direita e adicionando 1 ao caminho  
        if(node.direita){  
            traversal(node.direita, curPath + '1');  
        }  
    };  
    traversal(arvore, '');  
    return hash;  
}

//Retornando a string binária compactada final  
function getBinaryStr(map, originStr){  
    let result = '';  
    for(let i = 0; i < originStr.length; i++){  
        result += map[originStr[i]];  
    }  
    return result;  
}

let arvore = new huff_arvore('Teste de Codificação')  
console.log(arvore)

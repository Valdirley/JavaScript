import Fila_Circ from "../src/Fila_Circ";

test("Verificar Instanciação", () => {
  expect(0).toBe(0)
})

let f

beforeEach(()=>{
    f = new Fila_Circ (10);
})

test("Instanciação", () => {
  expect(f.length()).toBe(0)
})

test ("Adicionando um elemento", () => {
  f.enqueue("V")
  expect(f.length()).toBe(1)
  expect(f.front()).toBe("V")
})

test("Teste OverFlow", () => {
  f.enqueue("V")
  f.enqueue("a")
  f.enqueue("l")
  f.enqueue("d")
  f.enqueue("i")
  f.enqueue("r")
  f.enqueue("l")
  f.enqueue("e")
  f.enqueue("y")
  expect(() => {
    f.enqueue(" ")
    f.enqueue("B")
  }).toThrowError("OverFlow");
})

test("Teste de UnderFlow", () => {
  expect(() => {
    f.dequeue()
  }).toThrowError("UnderFlow");
})

test("Teste de Comportamento", () => {
  f.enqueue("V")
  f.enqueue("a")
  f.enqueue("l")
  f.enqueue("d")
  f.enqueue("i")
  f.enqueue("r")
  f.enqueue("l")
  f.enqueue("e")
  f.enqueue("y")
  expect(f.dequeue()).toBe("V")  
})

test("Teste de apagar fila", () => {
  f.enqueue("V")
  f.enqueue("a")
  f.enqueue("l")
  f.enqueue("d")
  f.enqueue("i")
  f.enqueue("r")
  f.enqueue("l")
  f.enqueue("e")
  f.enqueue("y")
  f.clear();
  expect(() => {
    f.dequeue();
  }).toThrowError("UnderFlow")
})

test("Teste de tamanho após apagar fila", () => {
  f.enqueue("V")
  f.enqueue("a")
  f.enqueue("l")
  f.enqueue("d")
  f.enqueue("i")
  f.enqueue("r")
  f.enqueue("l")
  f.enqueue("e")
  f.enqueue("y")
  f.clear()
  expect(f.length()).toBe(0)
});

test("Fila Valdirley", () => {
expect(f.length()).toBe(0)
  f.enqueue("V")
  f.enqueue("a")
  expect(f.length()).toBe(2)  
  f.enqueue("l")
  f.enqueue("d")
  f.enqueue("i")
  f.enqueue("r")
  expect(f.front()).toBe("V")
  expect(f.length()).toBe(6)
  f.enqueue("l")
  f.enqueue("e")
  f.enqueue("y")
  f.enqueue(" ")  
  expect(() => {
    f.enqueue("B")  
  }).toThrowError("OverFlow")
  expect(f.dequeue()).toBe("V")
  expect(f.dequeue()).toBe("a")
  expect(f.dequeue()).toBe("l")
  expect(f.dequeue()).toBe("d")
  expect(f.dequeue()).toBe("i")
  expect(f.dequeue()).toBe("r")
  expect(f.dequeue()).toBe("l")
  expect(f.front()).toBe("e")
  expect(f.length()).toBe(3)
  expect(() => {
    f.dequeue()
    f.dequeue()
    f.dequeue()
    f.dequeue()
  }).toThrowError("UnderFlow")
  expect(f.length()).toBe(0)
})

/*
test("Teste de loop", () => {
f.inicio = 0;
f.fim = 8;
  console.log("tamanho: "+f.length());
  console.log("Inicio: "+f.inicio);
  console.log("Fim: "+f.fim);
  f.enqueue(1)
  f.enqueue(2)
  f.enqueue(3)
  console.log("tamanho: "+f.length());
  console.log("Inicio: "+f.inicio);
  console.log("Fim: "+f.fim);
 

})

*/
test("Teste de loop", () => {
  f.inicio = 0;
  f.fim = 7;
  f.enqueue(1)
  f.enqueue(2)
  f.enqueue(3)
  expect(() => {
  f.enqueue(4) 
  }).toThrowError("OverFlow");
  console.log("tamanho: "+f.length());
  console.log("Inicio: "+f.inicio);
  console.log("Fim: "+f.fim);
})

test("toString Inicio < Fim", () => {
  f.enqueue("B")
  f.enqueue("r")
  f.enqueue("a")
  f.enqueue("z")
  expect(f.toString()).toBe("[Braz]")
})

test("toString Inicio > Fim", () => {
  f.inicio = 5;
  f.fim = 5;
  f.enqueue("V") //5
  f.enqueue("a") //6
  f.enqueue("l") //7
  f.enqueue("d") //8
  f.enqueue("i") //9
  f.enqueue("r") //0
  f.enqueue("l") //1
  f.enqueue("e") //2
  f.enqueue("y") //3
  expect(f.toString()).toBe("[Valdirley]")
})

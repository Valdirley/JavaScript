import Fila_Circ from "../src/Fila_Circ";

test("Verificar Instanciação", () => {
  expect(0).toBe(0)
})

let f

beforeEach(()=>{
    f = new Fila_Circ (9);
})

test("Instanciação", () => {
  expect(f.length(0)).toBe(0)
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
  }).toThrowError("OverFlow")
})

test("Teste de UnderFlow", () => {
  expect(() => {
    f.dequeue()
  }).toThrowError("UnderFlow")
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
  f.clear(() => {
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
})

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
  expect(() => {
    f.enqueue(" ")  
  }).toThrowError("OverFlow")
  expect(f.dequeue()).toBe("V")
  expect(f.dequeue()).toBe("a")
  expect(f.dequeue()).toBe("l")
  expect(f.dequeue()).toBe("d")
  expect(f.dequeue()).toBe("i")
  expect(f.dequeue()).toBe("r")
  expect(f.dequeue()).toBe("l")
  expect(f.front()).toBe("e")
  expect(f.length()).toBe(2)
  expect(() => {
    f.dequeue()
    f.dequeue()
  }).toThrowError("UnderFlow")
  expect(f.length()).toBe(0)
})
/*
test("toString", () => {
  f.enqueue("B")
  f.enqueue("r")
  f.enqueue("a")
  f.enqueue("z")
  expect(f.toString()).toBe("[B, r, a, z")
})
*/
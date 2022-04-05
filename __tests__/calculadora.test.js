import calculadora from '../src/calculadora';

test('Efetuando soma', () => {
     expect(calculadora(13, 5,'+')).toBe(18)
});

test('Efetuando Subtração', () => {
    expect(calculadora(13, 5,'-')).toBe(8)
});

test('Efetuando multiplicação', () => {
    expect(calculadora(13, 5,'*')).toBe(65)
});

test('Efetuando Divisão', () => {
    expect(calculadora(13, 5,'/')).toBe(2.6)
});

test('Erro de operação', () => {
    expect(calculadora(13, 0,'/')).toBe('Não é possível dividir por zero')
});
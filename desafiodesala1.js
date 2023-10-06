class FiguraGeometrica{
  constructor(base, altura){
    this.base = base;
    this.altura = altura;
  }
  calculoArea() {
    return this.base * this.altura;
  }
  
  calculoPerimetro() {
    return 2 * (this.base + this.altura);
  }
}

const retangulo = new FiguraGeometrica (5, 10);
console.log(`base: ${retangulo.base}; altura: ${retangulo.altura}; area: ${retangulo.calculoArea()}; perimetro: ${retangulo.calculoPerimetro()};`);
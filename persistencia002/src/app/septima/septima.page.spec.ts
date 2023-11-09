import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SeptimaPage } from './septima.page';
import { CommaExpr } from '@angular/compiler';
/*
describe('SeptimaPage', () => {
  let component: SeptimaPage;
  let fixture: ComponentFixture<SeptimaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeptimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
*/
// npm test
describe('********** Pruebas en Septima Página',() =>
{
  let component: SeptimaPage; // variable

  beforeEach( waitForAsync(()=> {
    component = new SeptimaPage(); // crea la pagina
  }));

  it('sumar: 2 numeros enteros', ()=>{
    expect(component.sumar(2,2)).toEqual(4);
  })
  it('sumar: 2 numeros iguales 1 es negativo', ()=>{
    expect(component.sumar(-2,2)).toEqual(0);
  })
  it('sumar: 2 numeros el mayor es negativo', ()=>{
    expect(component.sumar(-10,2)).toBeLessThan(0);
  })
  it('dividir: 2 numeros enteros positivos', ()=>{
    expect(component.dividir(10,2)).toEqual(5);
  })
  it('dividir: 1 numero negativo', ()=>{
    expect(component.dividir(10,-2)).toBeLessThanOrEqual(0);
  })
  it('dividir: divisor es cero', ()=>{
    expect(component.dividir(10,0)).toBeUndefined();
  })
  it('multiplicar: 2 numeros positivos', ()=>{
    expect(component.multiplicar(2,2)).toEqual(4);
  })
  it('multiplicar: 1 numero es cero', ()=>{
    expect(component.multiplicar(0,2)).toEqual(0);
  })
  it('multiplicar: 1 numero es negativo', ()=>{
    expect(component.multiplicar(-9,2)).toBeLessThanOrEqual(0);
  })
  it('multiplicar: 2 numeros negativo', ()=>{
    expect(component.multiplicar(-10,-2)).toBeGreaterThanOrEqual(0);
  })
  it('restar: 2 numeros +', ()=>{
    expect(component.restar(5,3)).toBeGreaterThanOrEqual(0);
  })
  it('restar: 1er numero mayor +', ()=>{
    expect(component.restar(5,-3)).toBeGreaterThanOrEqual(0);
  })
  it('restar: 2 numero neg', ()=>{
    expect(component.restar(-5,-3)).toBeGreaterThanOrEqual(-2);
  })
})
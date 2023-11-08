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
})
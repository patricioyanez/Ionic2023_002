import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerceraListadoPage } from './tercera-listado.page';

describe('TerceraListadoPage', () => {
  let component: TerceraListadoPage;
  let fixture: ComponentFixture<TerceraListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerceraListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

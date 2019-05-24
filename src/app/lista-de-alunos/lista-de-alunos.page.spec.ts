import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAlunosPage } from './lista-de-alunos.page';

describe('ListaDeAlunosPage', () => {
  let component: ListaDeAlunosPage;
  let fixture: ComponentFixture<ListaDeAlunosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeAlunosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeAlunosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

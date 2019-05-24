import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDoAlunoPage } from './dados-do-aluno.page';

describe('DadosDoAlunoPage', () => {
  let component: DadosDoAlunoPage;
  let fixture: ComponentFixture<DadosDoAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosDoAlunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosDoAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

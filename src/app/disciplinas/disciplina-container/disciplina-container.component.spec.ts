import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaContainerComponent } from './disciplina-container.component';

describe('DisciplinaContainerComponent', () => {
  let component: DisciplinaContainerComponent;
  let fixture: ComponentFixture<DisciplinaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaContainerComponent } from './cronograma-container.component';

describe('CronogramaContainerComponent', () => {
  let component: CronogramaContainerComponent;
  let fixture: ComponentFixture<CronogramaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronogramaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer as disciplinaReducer } from './disciplina.reducer';
import { DisciplinaContainerComponent } from './disciplina-container/disciplina-container.component';
import { DisciplinaEffects } from './disciplina.effects';
@NgModule({
  declarations: [DisciplinaContainerComponent],
  exports: [DisciplinaContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('disciplina', disciplinaReducer),
    EffectsModule.forFeature([DisciplinaEffects])
  ]
})
export class DisciplinasModule { }

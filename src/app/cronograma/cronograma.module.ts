import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronogramaContainerComponent } from './cronograma-container/cronograma-container.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer as cronogramaReducer} from './store/cronograma.reducer';
import { reducer as aulaReducer } from './store/aula.reducer';
import { AulaEffects } from './store/aula.effects';
import { CronogramaEffects } from './store/cronograma.effects';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [CronogramaContainerComponent],
  exports: [CronogramaContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('cronograma', cronogramaReducer),
    StoreModule.forFeature('aula', aulaReducer),
    EffectsModule.forFeature([AulaEffects, CronogramaEffects])
  ],
  providers: [AulaEffects, CronogramaEffects]
})
export class CronogramaModule { }

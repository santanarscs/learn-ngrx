import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer as movieReducer } from './movies.reducer';
import { MovieComponent } from './movies/movie/movie.component';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movie.effects';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [MovieComponent],
  exports: [MovieComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('movie', movieReducer),
    EffectsModule.forFeature([MovieEffects])
  ],
  providers: [MovieEffects]
})
export class MoviesModule { }

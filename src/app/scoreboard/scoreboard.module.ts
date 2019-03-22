import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {reducer as scoreboardReducer} from './scoreboard.reducer';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [CommonModule, StoreModule.forFeature('game', scoreboardReducer )],
    declarations: [ScoreboardComponent],
    exports: [ScoreboardComponent]
})

export class ScoreboardModule {}

import { NgModule } from "@angular/core"
import { HeroCardComponent } from "./components/hero-card/hero-card.component"
import { CommonModule } from "@angular/common"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatCardModule } from "@angular/material/card"
import { StarshipCardComponent } from "./components/starship-card/starship-card.component"
import { ScoresComponent } from "./components/scores/scores.component"

@NgModule({
  exports: [HeroCardComponent, StarshipCardComponent, ScoresComponent],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [HeroCardComponent, StarshipCardComponent, ScoresComponent],
  providers: [],
})
export class SharedModule {}

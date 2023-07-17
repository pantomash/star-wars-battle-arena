import { NgModule } from "@angular/core"
import { HeroCardComponent } from "./components/hero-card/hero-card.component"
import { CommonModule } from "@angular/common"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatCardModule } from "@angular/material/card"
import { StarshipCardComponent } from "./components/starship-card/starship-card.component"

@NgModule({
  exports: [HeroCardComponent, StarshipCardComponent],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [HeroCardComponent, StarshipCardComponent],
  providers: [],
})
export class SharedModule {}

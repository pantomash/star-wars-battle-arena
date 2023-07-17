import { NgModule } from "@angular/core"
import { HeroCardComponent } from "./components/hero-card/hero-card.component"
import { CommonModule } from "@angular/common"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatCardModule } from "@angular/material/card"

@NgModule({
  exports: [HeroCardComponent],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [HeroCardComponent],
  providers: [],
})
export class SharedModule {}

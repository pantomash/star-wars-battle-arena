import { NgModule } from "@angular/core"
import { HeroesComponent } from "./heroes.component"
import { HeroesRoutingModule } from "./heroes-routing.module"
import { MatButtonModule } from "@angular/material/button"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { CommonModule } from "@angular/common"
import { SharedModule } from "../../shared/shared.module"

@NgModule({
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, HeroesRoutingModule, SharedModule],
  declarations: [HeroesComponent],
  providers: [],
})
export class HeroesModule {}

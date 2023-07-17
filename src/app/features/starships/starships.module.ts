import { NgModule } from "@angular/core"
import { SharedModule } from "../../shared/shared.module"
import { CommonModule } from "@angular/common"
import { StarshipsRoutingModule } from "./starships-routing.module"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatButtonModule } from "@angular/material/button"
import { StarshipsComponent } from "./starships.component"

@NgModule({
  imports: [SharedModule, CommonModule, MatProgressSpinnerModule, MatButtonModule, StarshipsRoutingModule],
  declarations: [StarshipsComponent],
  providers: [],
})
export class StarshipsModule {}

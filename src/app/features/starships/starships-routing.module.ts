import { RouterModule, Routes } from "@angular/router"
import { StarshipsComponent } from "./starships.component"
import { NgModule } from "@angular/core"

const routes: Routes = [
  {
    path: "",
    component: StarshipsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipsRoutingModule {}

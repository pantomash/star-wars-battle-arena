import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./features/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "heroes",
    loadChildren: () => import("./features/heroes/heroes.module").then((m) => m.HeroesModule),
  },
  {
    path: "starships",
    loadChildren: () => import("./features/starships/starships.module").then((m) => m.StarshipsModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

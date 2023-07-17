import { NgModule } from "@angular/core"
import { HeaderComponent } from "./layout/header.component"
import { BrowserModule } from "@angular/platform-browser"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { ScoreService } from "./services/score.service"
import { HeroesService } from "./services/heroes.service"
import { StarshipsService } from "./services/starships.service"
import { HttpClientModule } from "@angular/common/http"
import { MatButtonModule } from "@angular/material/button"

@NgModule({
  exports: [HeaderComponent],
  imports: [BrowserModule, CommonModule, RouterLink, HttpClientModule, MatButtonModule],
  declarations: [HeaderComponent],
  providers: [ScoreService, HeroesService, StarshipsService],
})
export class CoreModule {}

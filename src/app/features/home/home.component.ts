import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { ScoreService } from "../../core/services/score.service"
import { Paths } from "../../shared/utils/paths"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private _router: Router,
    private scoreService: ScoreService,
  ) {}

  ngOnInit() {
    this.scoreService.resetScores()
  }

  playVsHeroes() {
    this._router.navigate([Paths.HEROES])
  }

  playVsStarship() {
    this._router.navigate([Paths.STARSHIP])
  }
}

import { Component, OnInit } from "@angular/core"
import { Starship, StarshipDetail } from "../../shared/models/starship"
import { StarshipsService } from "../../core/services/starships.service"
import { forkJoin, map, Observable, switchMap } from "rxjs"
import { sample } from "lodash-es"
import { AbstractArena } from "../../shared/utils/abstract-arena"
import { ScoreService } from "../../core/services/score.service"

@Component({
  selector: "app-starships",
  templateUrl: "./starships.component.html",
  styleUrls: ["./starships.component.scss"],
})
export class StarshipsComponent extends AbstractArena implements OnInit {
  randomStarships: StarshipDetail[] = []

  constructor(
    private starshipService: StarshipsService,
    scoreService: ScoreService,
  ) {
    super(scoreService)
  }
  ngOnInit(): void {
    this.loadData()
  }

  async loadData(): Promise<void> {
    const starships$: Observable<Starship[]> = this.starshipService.getStarships()
    starships$
      .pipe(
        switchMap((resultData: Starship[]) => {
          return forkJoin([
            this.starshipService.getStarshipById((sample(resultData) as Starship).uid),
            this.starshipService.getStarshipById((sample(resultData) as Starship).uid),
          ]).pipe(
            map((result2Data: StarshipDetail[]) => {
              this.randomStarships = result2Data
              this.battleResult()
            }),
          )
        }),
      )
      .subscribe()
  }

  battleResult(): void {
    const { crew: starship1Crew } = this.randomStarships[0].properties
    const { crew: starship2Crew } = this.randomStarships[1].properties
    const formattedStarship1CrewValue = Number(starship1Crew.replace("-", "").replace(",", ""))
    const formattedStarship2CrewValue = Number(starship2Crew.replace("-", "").replace(",", ""))

    switch (true) {
      case Number(formattedStarship1CrewValue) === Number(formattedStarship2CrewValue):
        break
      case Number(formattedStarship1CrewValue) > Number(formattedStarship2CrewValue):
        this.person1Win = true
        this.scoreService.updatePlayer1Score()
        break
      case Number(formattedStarship1CrewValue) < Number(formattedStarship2CrewValue):
        this.person2Win = true
        this.scoreService.updatePlayer2Score()
        break
    }
  }

  replayBattle() {
    this.clearStarships()
    this.setNewGame()
    this.loadData()
  }

  clearStarships() {
    this.randomStarships = []
  }
}

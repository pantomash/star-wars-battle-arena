import { Component, OnInit } from "@angular/core"
import { Hero, HeroDetail } from "../../shared/models/hero"
import { HeroesService } from "../../core/services/heroes.service"
import { forkJoin, map, Observable, switchMap } from "rxjs"
import { sample } from "lodash-es"
import { AbstractArena } from "../../shared/utils/abstract-arena"
import { ScoreService } from "../../core/services/score.service"

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent extends AbstractArena implements OnInit {
  randomFighters: HeroDetail[] = []

  constructor(
    private heroesService: HeroesService,
    scoresService: ScoreService,
  ) {
    super(scoresService)
  }

  ngOnInit() {
    this.loadData()
  }

  async loadData(): Promise<void> {
    const heroes$: Observable<Hero[]> = this.heroesService.getHeroes()
    heroes$
      .pipe(
        switchMap((resultData: Hero[]) => {
          return forkJoin([
            this.heroesService.getHeroById((sample(resultData) as Hero).uid),
            this.heroesService.getHeroById((sample(resultData) as Hero).uid),
          ]).pipe(
            map((result2Data: HeroDetail[]) => {
              this.randomFighters = result2Data
              this.battleResult()
            }),
          )
        }),
      )
      .subscribe()
  }

  battleResult(): void {
    const { mass: hero1Mass } = this.randomFighters[0].properties
    const { mass: hero2Mass } = this.randomFighters[1].properties

    switch (true) {
      case Number(hero1Mass) === Number(hero2Mass):
        break
      case Number(hero1Mass) > Number(hero2Mass):
        this.person1Win = true
        this.scoreService.updatePlayer1Score()
        break
      case Number(hero1Mass) < Number(hero2Mass):
        this.person2Win = true
        this.scoreService.updatePlayer2Score()
        break
    }
  }

  replayBattle() {
    this.clearFighters()
    this.setNewGame()
    this.loadData()
  }

  clearFighters() {
    this.randomFighters = []
  }
}

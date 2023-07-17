import { Component, OnInit } from "@angular/core"
import { Hero, HeroDetail } from "../../shared/models/hero"
import { HeroesService } from "../../core/services/heroes.service"
import { forkJoin, map, Observable, switchMap } from "rxjs"
import { sample } from "lodash-es"

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  randomFighters: HeroDetail[] = []

  constructor(private heroesService: HeroesService) {}

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
            }),
          )
        }),
      )
      .subscribe()
  }
}

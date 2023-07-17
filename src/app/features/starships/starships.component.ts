import { Component, OnInit } from "@angular/core"
import { Starship, StarshipDetail } from "../../shared/models/starship"
import { StarshipsService } from "../../core/services/starships.service"
import { forkJoin, map, Observable, switchMap } from "rxjs"
import { sample } from "lodash-es"

@Component({
  selector: "app-starships",
  templateUrl: "./starships.component.html",
  styleUrls: ["./starships.component.scss"],
})
export class StarshipsComponent implements OnInit {
  randomStarships: StarshipDetail[] = []

  constructor(private starshipService: StarshipsService) {}

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
            }),
          )
        }),
      )
      .subscribe()
  }
}

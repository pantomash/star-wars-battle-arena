import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ScoreService {
  player1Score = 0
  player2Score = 0
  player1ScoreChange: Subject<number> = new Subject<number>()
  player2ScoreChange: Subject<number> = new Subject<number>()

  constructor() {
    this.player1ScoreChange.subscribe((value) => (this.player1Score = value))
    this.player2ScoreChange.subscribe((value) => (this.player2Score = value))
  }

  updatePlayer1Score() {
    this.player1ScoreChange.next(this.player1Score + 1)
  }
  updatePlayer2Score() {
    this.player2ScoreChange.next(this.player2Score + 1)
  }

  resetScores() {
    this.player1ScoreChange.next(0)
    this.player2ScoreChange.next(0)
  }
}

import { ScoreService } from "../../core/services/score.service"

export class AbstractArena {
  person1Win = false
  person2Win = false
  constructor(protected scoreService: ScoreService) {}

  get player1Score(): number {
    return this.scoreService.player1Score
  }

  get player2Score(): number {
    return this.scoreService.player2Score
  }

  setNewGame(): void {
    this.person1Win = false
    this.person2Win = false
  }
}

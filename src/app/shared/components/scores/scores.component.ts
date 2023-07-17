import { Component, Input } from "@angular/core"

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.scss"],
})
export class ScoresComponent {
  @Input()
  player1Score = 0
  @Input()
  player2Score = 0
}

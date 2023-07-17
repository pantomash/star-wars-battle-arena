import { Component, Input } from "@angular/core"
import { StarshipDetail } from "../../models/starship"

@Component({
  selector: "app-starship-card",
  templateUrl: "./starship-card.component.html",
  styleUrls: ["./starship-card.component.scss"],
})
export class StarshipCardComponent {
  @Input()
  starship: StarshipDetail | undefined = undefined
  @Input()
  isWinner = false
}

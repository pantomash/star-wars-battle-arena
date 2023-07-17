import { Component, Input } from "@angular/core"
import { HeroDetail } from "../../models/hero"

@Component({
  selector: "app-hero-card",
  templateUrl: "./hero-card.component.html",
  styleUrls: ["./hero-card.component.scss"],
})
export class HeroCardComponent {
  @Input()
  hero: HeroDetail | undefined = undefined
  @Input()
  isWinner = false
}

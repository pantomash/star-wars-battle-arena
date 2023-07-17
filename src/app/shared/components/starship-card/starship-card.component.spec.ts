import { ComponentFixture, TestBed } from "@angular/core/testing"
import { StarshipCardComponent } from "./starship-card.component"
import { DebugElement } from "@angular/core"
import { StarshipDetail } from "../../models/starship"
import { By } from "@angular/platform-browser"

describe("StarshipCardComponent", () => {
  let fixture: ComponentFixture<StarshipCardComponent>
  let component: StarshipCardComponent
  let debugElement: DebugElement

  beforeEach(async () => {
    fixture = TestBed.createComponent(StarshipCardComponent)
    fixture.detectChanges()
    component = fixture.componentInstance
    debugElement = fixture.debugElement
  })

  it("should render angular material card filled with starship data", () => {
    const starship: StarshipDetail = {
      uuid: 1,
      _id: "1",
      __v: "",
      description: "",
      properties: {
        url: "",
        pilots: [],
        MGLT: "",
        edited: "",
        created: "",
        model: "Dummy model",
        name: "Dummy Starship 1",
        manufacturer: "Dummy Corp.",
        starship_class: "Dummystroyer",
        length: "100",
        cost_in_credits: "100000",
        passengers: "10",
        cargo_capacity: "100",
        max_atmosphering_speed: "100",
        hyperdrive_rating: "100",
        consumables: "",
        crew: "200",
      },
    }

    component.starship = starship

    fixture.detectChanges()

    const cardTitleElement = debugElement.query(By.css('[data-testid="card-title"]'))

    expect(cardTitleElement.nativeElement.textContent).toBe(starship.properties.name)
  })
})

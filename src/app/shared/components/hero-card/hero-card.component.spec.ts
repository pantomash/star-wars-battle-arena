import { HeroCardComponent } from "./hero-card.component"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroDetail } from "../../models/hero"
import { DebugElement } from "@angular/core"
import { By } from "@angular/platform-browser"

describe("HeroCardComponent", () => {
  let component: HeroCardComponent
  let fixture: ComponentFixture<HeroCardComponent>
  let debugElement: DebugElement

  beforeEach(async () => {
    fixture = TestBed.createComponent(HeroCardComponent)
    fixture.detectChanges()
    component = fixture.componentInstance
    debugElement = fixture.debugElement
  })

  it("should render angular material card filled with figther data", () => {
    const fighter: HeroDetail = {
      uuid: 1,
      _id: "1",
      __v: "",
      description: "",
      properties: {
        url: "",
        edited: "",
        created: "",
        mass: "40",
        name: "Dummy Fighter 1",
        birth_year: "",
        eye_color: "",
        gender: "",
        hair_color: "",
        height: "",
        homeworld: "",
        skin_color: "",
      },
    }

    component.hero = fighter

    fixture.detectChanges()

    const cardTitleElement: DebugElement = debugElement.query(By.css('[data-testid="card-title"]'))

    expect(cardTitleElement.nativeElement.textContent).toBe(fighter.properties.name)
  })
})

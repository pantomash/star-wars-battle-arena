import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HomeComponent } from "./home.component"
import { By } from "@angular/platform-browser"
import { DebugElement } from "@angular/core"
import { Router } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"
import { HeroesComponent } from "../heroes/heroes.component"

describe("HomeComponent", () => {
  let fixture: ComponentFixture<HomeComponent>
  let debugElement: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent, HeroesComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    fixture.detectChanges()
    debugElement = fixture.debugElement
  })

  it("renders component with two buttons", () => {
    const heroesButton = debugElement.query(By.css('[data-testid="play-heroes-button"]'))
    const starshipButton = debugElement.query(By.css('[data-testid="play-starships-button"]'))

    expect(heroesButton).toBeTruthy()
    expect(starshipButton).toBeTruthy()
  })

  it("navigate to fighters arena after button clicked", () => {
    const router = TestBed.inject(Router)
    spyOn(router, "navigate")
    const heroesButton = debugElement.query(By.css('[data-testid="play-heroes-button"]'))
    heroesButton.triggerEventHandler("click", null)
    fixture.detectChanges()

    console.log("location", location)
    expect(router.navigate).toHaveBeenCalledWith(["heroes"])
  })

  it("navigate to starships arena after button clicked", () => {
    const router = TestBed.inject(Router)
    spyOn(router, "navigate")
    const starshipsButton = debugElement.query(By.css('[data-testid="play-starships-button"]'))
    starshipsButton.triggerEventHandler("click", null)
    fixture.detectChanges()

    expect(router.navigate).toHaveBeenCalledWith(["starships"])
  })
})

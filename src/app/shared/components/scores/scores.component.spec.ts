import { ScoresComponent } from "./scores.component"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { DebugElement } from "@angular/core"
import { By } from "@angular/platform-browser"

describe("ScoresComponent", () => {
  let component: ScoresComponent
  let fixture: ComponentFixture<ScoresComponent>
  let debugElement: DebugElement

  beforeEach(async () => {
    fixture = TestBed.createComponent(ScoresComponent)
    fixture.detectChanges()
    component = fixture.componentInstance
    debugElement = fixture.debugElement
  })

  it("should render players score", () => {
    const player1Score = 10
    const player2Score = 20

    component.player1Score = player1Score
    component.player2Score = player2Score

    fixture.detectChanges()

    const player1ScoreTextElement = debugElement.query(By.css('[data-testid="player1-score"]'))
    const player2ScoreTextElement = debugElement.query(By.css('[data-testid="player2-score"]'))

    expect(player1ScoreTextElement.nativeElement.textContent).toBe(`Player 1: ${player1Score} wins`)
    expect(player2ScoreTextElement.nativeElement.textContent).toBe(`Player 2: ${player2Score} wins`)
  })
})

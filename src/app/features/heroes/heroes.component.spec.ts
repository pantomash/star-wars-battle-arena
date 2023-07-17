import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component"
import SpyObj = jasmine.SpyObj
import { HeroesService } from "../../core/services/heroes.service"
import createSpyObj = jasmine.createSpyObj
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { SharedModule } from "../../shared/shared.module"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatButtonModule } from "@angular/material/button"
import { HeroesRoutingModule } from "./heroes-routing.module"
import { NgIf } from "@angular/common"
import { Hero, HeroDetail } from "../../shared/models/hero"
import { of } from "rxjs"

describe("HeroesComponent", () => {
  let fixture: ComponentFixture<HeroesComponent>
  let component: HeroesComponent
  let mockHeroesService: SpyObj<HeroesService>

  beforeEach(async () => {
    mockHeroesService = createSpyObj<HeroesService>("HeroesService", ["getHeroes", "getHeroById"])
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        HeroesRoutingModule,
        NgIf,
      ],
      declarations: [HeroesComponent],
      providers: [
        {
          provide: HeroesService,
          useValue: mockHeroesService,
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(HeroesComponent)
    fixture.detectChanges()
    component = fixture.componentInstance
  })

  it("should call loadData function on ngOnInit", () => {
    const loadDataSpy = spyOn(component, "loadData")
    component.ngOnInit()
    fixture.detectChanges()

    expect(loadDataSpy).toHaveBeenCalled()
  })

  it("should set two random fighters", () => {
    const getHeroesResponse: Hero[] = [
      { uid: "1", name: "Dummy Hero 1", url: "" },
      { uid: "2", name: "Dummy Hero 2", url: "" },
    ]

    const getHeroByIdResponse1: HeroDetail = {
      uuid: 1,
      _id: "1",
      __v: "",
      description: "",
      properties: {
        url: "",
        edited: "",
        created: "",
        mass: "40",
        name: "Dummy Hero 1",
        birth_year: "",
        eye_color: "",
        gender: "",
        hair_color: "",
        height: "",
        homeworld: "",
        skin_color: "",
      },
    }

    mockHeroesService.getHeroes.and.returnValue(of(getHeroesResponse))
    mockHeroesService.getHeroById.and.returnValue(of(getHeroByIdResponse1))

    component.ngOnInit()
    fixture.detectChanges()

    expect(component.randomFighters.length).toEqual(2)
  })
})

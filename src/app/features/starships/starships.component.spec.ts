import { ComponentFixture, TestBed } from "@angular/core/testing"
import { StarshipsComponent } from "./starships.component"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { SharedModule } from "../../shared/shared.module"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatButtonModule } from "@angular/material/button"
import { StarshipsRoutingModule } from "./starships-routing.module"
import { NgIf } from "@angular/common"
import { of } from "rxjs"
import createSpyObj = jasmine.createSpyObj
import { Starship, StarshipDetail } from "../../shared/models/starship"
import { StarshipsService } from "../../core/services/starships.service"

describe("StarshipsComponent", () => {
  let fixture: ComponentFixture<StarshipsComponent>
  let component: StarshipsComponent
  let mockStarshipService: jasmine.SpyObj<StarshipsService>

  beforeEach(async () => {
    mockStarshipService = createSpyObj<StarshipsService>("StarshipService", ["getStarships", "getStarshipById"])
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        StarshipsRoutingModule,
        NgIf,
      ],
      declarations: [StarshipsComponent],
      providers: [
        {
          provide: StarshipsService,
          useValue: mockStarshipService,
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(StarshipsComponent)
    fixture.detectChanges()
    component = fixture.componentInstance
  })

  it("should call loadData function on ngOnInit", () => {
    const loadDataSpy = spyOn(component, "loadData")
    component.ngOnInit()
    fixture.detectChanges()

    expect(loadDataSpy).toHaveBeenCalled()
  })

  it("should set two random starships", () => {
    const getStarshipsResponse: Starship[] = [
      { uid: "1", name: "Dummy Starship 1", url: "" },
      { uid: "2", name: "Dummy Starship 2", url: "" },
    ]

    const getStarshipByIdResponse1: StarshipDetail = {
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

    const getStarshipByIdResponse2: StarshipDetail = {
      uuid: 2,
      _id: "2",
      __v: "",
      description: "",
      properties: {
        url: "",
        pilots: [],
        MGLT: "",
        edited: "",
        created: "",
        model: "Dummy model",
        name: "Dummy Starship 2",
        manufacturer: "Dummy Corp.",
        starship_class: "Dummy-Wing",
        length: "5",
        cost_in_credits: "100000",
        passengers: "0",
        cargo_capacity: "10",
        max_atmosphering_speed: "1000",
        hyperdrive_rating: "1000",
        consumables: "",
        crew: "2",
      },
    }

    mockStarshipService.getStarships.and.returnValue(of(getStarshipsResponse))
    mockStarshipService.getStarshipById.and.returnValue(of(getStarshipByIdResponse1, getStarshipByIdResponse2))

    component.ngOnInit()

    fixture.detectChanges()

    expect(component.randomStarships.length).toEqual(2)
  })
})

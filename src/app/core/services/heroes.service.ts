import { Injectable } from "@angular/core"
import { environment } from "../../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { map, Observable } from "rxjs"
import { Hero, HeroDetail, HeroesResponse, HeroResponse } from "../../shared/models/hero"

@Injectable({
  providedIn: "root",
})
export class HeroesService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<HeroesResponse>(`${this.apiUrl}api/people?page=1&limit=100`)
      .pipe(map((response: HeroesResponse) => response.results))
  }

  getHeroById(id: string): Observable<HeroDetail> {
    return this.http
      .get<HeroResponse>(`${this.apiUrl}api/people/${id}`)
      .pipe(map((response: HeroResponse) => response.result))
  }
}

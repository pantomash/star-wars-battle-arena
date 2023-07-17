import { Injectable } from "@angular/core"
import { environment } from "../../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { map, Observable } from "rxjs"
import { Starship, StarshipDetail, StarshipDetailResponse, StarshipsResponse } from "../../shared/models/starship"

@Injectable({
  providedIn: "root",
})
export class StarshipsService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getStarships(): Observable<Starship[]> {
    return this.http
      .get<StarshipsResponse>(`${this.apiUrl}api/starships?page=1&limit=100`)
      .pipe(map((response: StarshipsResponse) => response.results))
  }

  getStarshipById(id: string): Observable<StarshipDetail> {
    return this.http
      .get<StarshipDetailResponse>(`${this.apiUrl}api/starships/${id}`)
      .pipe(map((response: StarshipDetailResponse) => response.result))
  }
}

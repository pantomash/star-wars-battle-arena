import { BaseEntity } from "./base-entity"

export interface Hero {
  uid: string
  name: string
  url: string
}

export interface HeroesResponse {
  message: string
  total_records: number
  total_pages: number
  previous: string | null
  next: string | null
  results: Hero[]
}

export interface HeroResponse {
  message: string
  result: HeroDetail
}

export interface HeroDetail extends BaseEntity {
  properties: HeroProperties
}

interface HeroProperties {
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  created: string
  edited: string
  name: string
  homeworld: string
  url: string
}

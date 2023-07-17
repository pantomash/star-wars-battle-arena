import { BaseEntity } from "./base-entity"

export interface StarshipsResponse {
  message: string
  total_records: number
  total_pages: number
  previous: string | null
  next: string | null
  results: Starship[]
}

export interface Starship {
  uid: string
  name: string
  url: string
}

export interface StarshipDetailResponse {
  message: string
  result: StarshipDetail
}

export interface StarshipDetail extends BaseEntity {
  properties: StarshipProperties
}

interface StarshipProperties {
  model: string
  starship_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  hyperdrive_rating: string
  MGLT: string
  cargo_capacity: string
  consumables: string
  pilots: string[]
  created: string
  edited: string
  name: string
  url: string
}

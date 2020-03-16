import { Career } from './careers'
import { Move } from './moves'
import { Origin } from './origins'

export interface CharacterInfo {
  name: string
  archetype: string
  origin: Origin | null
  career1: Career | null
  career2: Career | null
}

export interface FactionDebt {
  factionName: string
  debt: number
}

export type AttributeValue = -2 | -1 | 0 | 1 | 2

export interface CharacterAttributes {
  mettle: AttributeValue
  physique: AttributeValue
  influence: AttributeValue
  expertise: AttributeValue
  interface: AttributeValue
}

export type HeadquartersType = 'ship' | 'satellite'

export interface ShipModule {
  workspaces: string[]
  moves: Move[]
}

export interface CrewHeadquarters {
  type: HeadquartersType
  helm: ShipModule
  engineering: ShipModule
  quarters: ShipModule
  cargoBay: ShipModule
}

export interface Character {
  characterInfo: CharacterInfo
  characterAttributes: CharacterAttributes
  skills: Move[]
  debts: FactionDebt[]
  crewHeadquarters: CrewHeadquarters
}

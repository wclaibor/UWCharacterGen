import { Background } from './backgrounds'
import { Career } from './careers'

export interface CharacterInfo {
  name: string
}

export interface Character {
  characterInfo: CharacterInfo

  archetype: string
  characterName: string
  career1: Career | null
  career2: Career | null
  background: Background | null
}

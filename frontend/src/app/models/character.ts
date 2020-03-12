import { Background } from "./backgrounds";
import { Career } from "./careers";

export interface Character {
  archetype: string;
  characterName: string;
  career1: Career | null;
  career2: Career | null;
  background: Background | null;
}

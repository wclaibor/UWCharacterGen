import { Injectable } from "@angular/core";
import HummusRecipe from "hummus-recipe";
import { IconService } from "./icon.service";
import { Character } from "./models/character";

@Injectable({
  providedIn: "root"
})
export class CharacterSheetService {
  pdf: HummusRecipe;

  constructor(private readonly iconService: IconService) {
    this.pdf = new HummusRecipe("../assets/character-sheet.pdf", "output.pdf");
  }

  generateCharacter(value: Character) {
    this.iconService.getIcon().then((icon: Blob) => {
      this.pdf.editPage(1).image;
    });
  }
}

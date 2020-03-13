import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild
} from "@angular/core";
import domtoimage from "dom-to-image";
import * as _ from "lodash-es";
import { IconService } from "../icon.service";
import { Character } from "../models/character";
import { IconGenerator } from "./iconGenerator.interface";

@Component({
  selector: "app-icon-generator",
  templateUrl: "./icon-generator.component.html",
  styleUrls: ["./icon-generator.component.scss"]
})
export class IconGeneratorComponent implements OnChanges, IconGenerator {
  @ViewChild("characterIcon", { read: ElementRef })
  private characterIconRef: ElementRef<HTMLElement>;

  @Input() character: Character;

  newCareer1Icon: string | null;
  newCareer2Icon: string | null;
  newOriginIcon: string | null;
  career1Icon: string | null;
  career2Icon: string | null;
  backgroundIcon: string | null;

  constructor(private readonly iconService: IconService) {
    this.iconService.registerGenerator(this);
  }

  ngOnChanges() {
    if (this.character.career1 != null) {
      this.career1Icon = `${_.startCase(this.character.career1)}.png`;
      this.newCareer1Icon = `${_.lowerCase(this.character.career1)}.png`;
    } else {
      this.career1Icon = null;
      this.newCareer1Icon = null;
    }
    if (this.character.career2 != null) {
      this.career2Icon = `${_.startCase(this.character.career2)}.png`;
      this.newCareer2Icon = `${_.lowerCase(this.character.career2)}.png`;
    } else {
      this.career2Icon = null;
      this.newCareer2Icon = null;
    }
    if (this.character.background != null) {
      this.backgroundIcon = `${_.startCase(this.character.background)}.png`;
      this.newOriginIcon = `${_.lowerCase(this.character.background)}.png`;
    } else {
      this.backgroundIcon = null;
      this.newOriginIcon = null;
    }
  }

  getIconImage = () => {
    return domtoimage.toPng(this.characterIconRef.nativeElement, {
      bgcolor: "transparent"
    });
  };
}

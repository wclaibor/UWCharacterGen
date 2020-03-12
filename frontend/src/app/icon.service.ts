import { Injectable } from "@angular/core";
import { IconGenerator } from "./icon-generator/iconGenerator.interface";

@Injectable({
  providedIn: "root"
})
export class IconService {
  generator?: IconGenerator;

  registerGenerator(generator: IconGenerator) {
    this.generator = generator;
  }

  getIcon() {
    return this.generator.getIconImage();
  }
}

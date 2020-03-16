import * as HummusRecipe from 'hummus-recipe'
import { Character } from '../models/character'

const imageWidth = 500
const imageHeight = 766

export function writeCharacterSheet(character: Character) {
  const pdf = new HummusRecipe(
    `${__dirname}/../../assets/blank-sheet.pdf`,
    `${__dirname}/../../temp/${character.characterInfo.name}-sheet.pdf`,
  )

  const pageInfo = (pdf.pageInfo(1) as unknown) as HummusRecipe.PageInfo

  const imageX = pageInfo.width / 2 // - imageWidth / 2;
  const imageY = 200
  const opacity = 0.15

  pdf
    .editPage(1)
    .image(`${__dirname}/../../temp/classIcon.png`, imageX, imageY, {
      align: 'center center',
      opacity,
      height: 280,
      keepAspectRatio: true,
    })
    .endPage()
    .editPage(2)
    .image(`${__dirname}/../../temp/classIcon.png`, imageX, imageY, {
      align: 'center center',
      opacity,
      height: 280,
      keepAspectRatio: true,
    })
    .endPage()
    .endPDF()
}

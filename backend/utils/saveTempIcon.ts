import * as fs from 'fs';

export function saveTempIcon(icon: string) {
  var base64Data = icon.replace(/^data:image\/png;base64,/, '');

  fs.writeFileSync(__dirname + '/../temp/classIcon.png', base64Data, 'base64');
}

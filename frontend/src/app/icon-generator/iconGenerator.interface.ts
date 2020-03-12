export interface IconGenerator {
  getIconImage: () => Promise<string>;
}

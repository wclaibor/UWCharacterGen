export interface IconGenerator {
  getIconImage: () => Promise<Blob>;
}

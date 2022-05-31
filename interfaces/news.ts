export interface NewsModel {
  id: number | string
  attributes: {
    title: string,
    content: string,
    date: string,
    slug?: string,
    slider: boolean
  }
}
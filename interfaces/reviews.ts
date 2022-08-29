export interface ReviewsModel {
  id: number | string
  attributes: {
    name: string,
    content: string,
    avatar: {
      data: {
        attributes: {
          url: string
        }
      }
    },
    slider: boolean
  }
}
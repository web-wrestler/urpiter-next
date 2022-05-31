export interface ReviewsModel {
  id: number | string
  attributes: {
    name: string,
    text: string,
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
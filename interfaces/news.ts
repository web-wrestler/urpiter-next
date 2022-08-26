export interface NewsModel {
  id: number | string
  attributes: {
    title: string,
    content: string,
    date: string,
    slug?: string,
    slider: boolean,
    createdAt: string,
    linkVideo: string,
    avatarImage: {
      data: {
        attributes: {
          url: string
        }
      }
    },
    screenshotWin: {
      data: {
        attributes: {
          url: string
        }
      }
    },
  }
}
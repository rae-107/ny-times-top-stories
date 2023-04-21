import * as dayjs from "dayjs";

export const cleanData = (data) => {
  if(data) {
    return data.map((article) => {
      return {
        abstract: article.abstract,
        byline: article.byline,
        multimedia: article.multimedia,
        published_date: dayjs(article.published_date).format("MMMM D, YYYY, h:mm a"),
        title: article.title,
        url: article.url
      }
    })
  }
}
export const getStories = async() => {
  try {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    const data = await res.json()
    return data
  } catch(error) {
    console.log(error)
  }
}
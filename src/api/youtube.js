import axios from 'axios'

const KEY = 'AIzaSyCnDKD2YW97GDj3UZsEkPnqoDAixsPSfTg'

const searchVideos = async term => {
  return await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      q: term,
      part: "snippet",
      maxResults: 5,
      type: 'video',
      key: KEY
    }
  })

  // return response
}

export default {searchVideos}

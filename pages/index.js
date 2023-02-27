import { useState } from 'react'

const MovieSearch = () => {
  const [movieTitle, setMovieTitle] = useState('')
  const [movieInfo, setMovieInfo] = useState(null)

  const handleSearch = async () => {
    const apiKey = 'a4edf775'
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`
    const response = await fetch(url)
    const data = await response.json()
    setMovieInfo(data)
  }

  return (
    <div>
      <input type='text' value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {movieInfo && (
        <div>
          <h2>{movieInfo.Title}</h2>
          <p>{movieInfo.Plot}</p>
          <picture>
            <img
              src={movieInfo.Poster}
              alt={movieInfo.Title}
              width={300}
              height={500}
            />
          </picture>
        </div>
      )}
    </div>
  )
}

export default MovieSearch

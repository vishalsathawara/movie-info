

import react, { useEffect, useState } from "react"


import axios from "axios"
import Skeleton from '@mui/material/Skeleton';
import Skeletons from "./Skeletons"
import "./SerchMovie.css"
import SearchIcon from '@mui/icons-material/Search';
const SerchMovie = () => {

  const [serchApiData, setSerchApiData] = useState()
  const [serchdata, setSerchData] = useState("")
  const [isloading, setIsLoading] = useState()

  const url = `https://api.themoviedb.org/3/search/movie?api_key=6445e0c7dedebaf10e6800dfe34257c6&language=en-US&query=${serchdata}&page=1&include_adult=false`


  const setLoder = () => {
    serchMovieInAPI()
    setIsLoading(true)
  }


  const serchMovieInAPI = () => {
    setTimeout(() => {
      axios.get(url).then((res) => {
        setSerchApiData(res.data.results)
        setIsLoading(false)

      }).catch((error) => {
        console.log(error)
        
      })

    }, 2000)
  }

  useEffect(() => {
    serchMovieInAPI()
  }, [])
  //console.log(serchApiData)
  return (
    <>
      <div className="mainSerchDiv ">
        <div className="divForinpMain ">
          <div className="inpBtnDiv mt-5">
            <input value={serchdata} onChange={(e) => setSerchData(e.target.value)} className="inputStyle" placeholder=" Serch Movies ......" />
            <button onClick={setLoder}>Serch</button>
          </div>
        </div>
        <div>
          <div className="serchContent">
            <div>
              {isloading ? <Skeletons /> :
                serchApiData?.map((movie, i) => {
                  return (
                    <div key={i}>
                      <div className="heading">
                        <img className="movieImageStyle" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <div className="parentgrid">
                          <div className="movie-title">
                            <h2 >{movie.title}</h2>
                          </div>
                          <div className="movie-release-date">
                            <p >Release Date: {movie.release_date}</p>
                          </div>
                          <div className="movie-overview">
                            <p >{movie.overview}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SerchMovie;


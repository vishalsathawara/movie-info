import react, { useState, useEffect } from "react"
import axios from "axios"
import "./SerchMovie.css"
import Skeletons from "./Skeletons"




const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=6445e0c7dedebaf10e6800dfe34257c6&language=en-US&page=1`
const RecentlyAddedMovie = () => {

  const [serchApiData, setSerchApiData] = useState()
  
  const [isloading, setIsLoading] = useState(true)


  
  
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


  return (
    <>
      <div className="serchContent ">
        <div>
           <h1 className="reacentMovieHeading ">UPCOMING MOVIES</h1>  
        </div>
      


        <div className="mainSerchDiv">
          <div className="mainSerchDiv">
            <div className="serchContent">
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
export default RecentlyAddedMovie;
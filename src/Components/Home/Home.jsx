import react, { useState, useEffect } from "react";
import "./Home.scss"
import axios from "axios"
import { Link } from "react-router-dom";

import Footer from "./Footer"

const apiKey = "6445e0c7dedebaf10e6800dfe34257c6"
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => {
  return (
    <div >
      <img className="card" src={img} aly="" />
    </div>
  )
}


const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);



const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);


  useEffect(() => {

    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);

    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };




    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();

  }, [])

  return (
    <>
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: popularMovies[0]
              ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
              : "rgb(16, 16, 16)",
          }}
        >
          {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
          

     
        </div>
        <Row title={"Upcoming"} arr={upcomingMovies} />
        <Row title={"Now Playing"} arr={nowPlayingMovies} />
        <Row title={"Popular"} arr={popularMovies} />
        <Row title={"Top Rated"} arr={topRatedMovies} />


<Footer/>
      </section>
    </>
  )
}


export default Home;
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import SerchMovie from "./SerchMovie"
import RecentlyAddedMovie from "./RecentlyAddedMovie"
export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/serch" element={<SerchMovie />} />
           <Route path="/recent" element={<RecentlyAddedMovie  /> } />
        </Routes>
      </Router>
    </>
  )
}

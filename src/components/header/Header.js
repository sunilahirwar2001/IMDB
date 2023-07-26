import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import VisibilityIcon from '@mui/icons-material/Visibility';
const Header = () => {
 const moviesdata = useSelector((state)=> state.movies.watchingData);
 console.log(moviesdata);

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link  to='/watches'  style={{textDecoration: "none"}}  > <div>
                     
                    <span>WatchList{moviesdata.length >0 ? moviesdata.length:<VisibilityIcon/>}    </span>  </div>    </Link>
            </div>
        </div>
    )
}

export default Header
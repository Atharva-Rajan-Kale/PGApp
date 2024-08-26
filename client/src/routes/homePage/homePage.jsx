import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Your Perfect PG & Enjoy Comfortable Living
          </h1>
          <p>
            Discover a wide range of paying guest accommodations that suit your
            lifestyle. Whether you're a student or a professional, we provide
            the ideal spaces to make you feel at home.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Service</h2>
            </div>
            <div className="box">
              <h1>500</h1>
              <h2>Happy Guests</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>PG Listings</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="PG Background" />
      </div>
    </div>
  );
}

export default HomePage;

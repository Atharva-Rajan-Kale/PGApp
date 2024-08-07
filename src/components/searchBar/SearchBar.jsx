import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.scss";
const types = ["list", "rent"];
function SearchBar() {
  const [query, setQuery] = useState({
    type: "ent",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const navigate = useNavigate();
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
    if (val === "list") {
      navigate("/list-form");
    }
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

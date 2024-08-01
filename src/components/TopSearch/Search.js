import React, {Component, useState} from "react";
import "./Search.css";
import { hotelsData } from "../../assets/config";

export const Top = () => {
  const [findingString, setFindingString] = useState("");
  const [findedHotels, setFindedHotels] = useState([]);


  class HotelSearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hotels: [],
        search: "",
        error: null,
      };
    }

    componentDidMount() {
      this.fetchHotels().then(res => res);
    }

     fetchHotels = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/hotels/popular`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFindedHotels(data);
      } catch (error) {
        setError("Ошибка при загрузке данных");
        console.error("Fetch Error :-S", error);
      }
    };

    handleInputChange = (event) => {
      this.setState({ search: event.target.value });
    };

    handleSearch = (event) => {
      event.preventDefault();
      this.fetchHotels();
    };

   createHotelsMarkUp = (data) =>
      data.map(({ imageUrl, name, city, country }) => (
        <div key={`${name}-${city}-${country}`} className="homes-item">
          <img className="img-homes" src={imageUrl} alt={name} />
          <a className="text-homes" href="#">
            {name}
          </a>
          <span className="text-country-homes">
          {city}, {country}
        </span>
        </div>
      ));

    findHotels = (event) => {
      event.preventDefault();
      const hotels = findHotelsByStr(hotelsData, findingString);
      setFindedHotels(hotels);
    };
  render = () => (
    <>
      <form className="form" id="form" action="/">
        <div className="form-elements country form-desktop-edition">
          <label htmlFor="country">Your destination or hotel name</label>
          <input
            name="country"
            id="country"
            type="text"
            placeholder="New York"
            value={findingString}
            onChange={(event) => setFindingString(event.target.value)}
          />
        </div>
        <div className="form-elements date form-desktop-edition">
          <label htmlFor="date">Check-in — Check-out</label>
          <input
            name="date"
            id="date"
            type="text"
            placeholder="Tue 15 Sept — Sat 19 Sept"
          />
        </div>
        <div className="form-mobile-edition">
          <div className="form-elements country">
            <input
              className="input-country"
              type="text"
              placeholder="Your destination or hotel name"
            />
          </div>
          <div className="date-mobile">
            <div className="form-elements">
              <label htmlFor="date-in">Check-in date</label>
              <input id="date-in" type="text" placeholder="Tue 15 Sept 2020"/>
            </div>
            <div className="form-elements">
              <label htmlFor="date-out">Check-out date</label>
              <input id="date-out" type="text" placeholder="Sat 19 Sept 2020"/>
            </div>
          </div>
        </div>
        <div className="form-mobile-edition">
          <div className="filter-mobile">
            <div className="form-elements adults">
              <label htmlFor="adults">Adults</label>
              <input id="adults" type="text" placeholder="2"/>
            </div>
            <div className="form-elements form-children-border">
              <label htmlFor="children">Children</label>
              <input id="children" type="text" placeholder="0"/>
            </div>
            <div className="form-elements">
              <label htmlFor="room">Room</label>
              <input id="room" type="text" placeholder="1"/>
            </div>
          </div>
        </div>
        <div
          className="form-elements options form-desktop-edition"
          id="options-filter"
        >
          <input name="options" id="options-input" type="text"/>
        </div>
        <button className="form-button" id="form-button" onClick={findHotels}>
          Search
        </button>
      </form>
      {!!findedHotels.length && <div>{createHotelsMarkUp(findedHotels)}</div>}
    </>
  );
import React from "react";
import "./HomesLoves.css";

export class HomesLoves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homesLovesData: [],
    };
  }

  componentDidMount() {
    fetch("https://if-student-api.onrender.com/api/hotels/popular")
      .then((res) => res.json())
      .then((hotelsData) => {
        this.setState({ homesLovesData: hotelsData });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { homesLovesData } = this.state;

    return (
      <div className="homes-loves">
        <h2>Homes guests loves</h2>
        <div className="hr-heading"></div>
        <div className="homes-group" id="homes-group">
          {homesLovesData.length > 0 ? (
            homesLovesData.map((item, index) => (
              <div key={index} className="homes-item">
                <img
                  className="img-homes"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <span className="text-homes">{item.name}</span>
                <span className="text-country-homes">
                  {item.city}, {item.country}
                </span>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    );
  }
}

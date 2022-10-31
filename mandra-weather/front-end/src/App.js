import React, { useState } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState("");

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ab9d9b80bc08b3981bbf39c5976a7e90`;

	const searchLocation = (event) => {
		if (event.key === "Enter") {
			axios.get(url).then((res) => {
				setData(res.data);
				console.log(res.data);
			});
			setLocation("");
		}
	};

	return (
		<div className="app">

      <div>
        <button>Home</button>
      </div>
      <div>
        <button>Log Out</button>
      </div>
      <div>
        <button>Profile Page</button>
      </div>

			<div className="search">
				<input
					value={location}
					onChange={(event) => setLocation(event.target.value)}
					onKeyPress={searchLocation}
					placeholder="Enter Location"
					type="text"
				></input>
			</div>

			<div className="container">
				<div className="top">
					<div className="location">
						<p>{data.name}</p>
					</div>

					<div className="temp">
						{data.main ? (
							<h1>{data.main.temp.toFixed()}&#8457;</h1>
						) : null}
					</div>

					<div className="description">
						{data.weather ? <p>{data.weather[0].main}</p> : null}
					</div>
				</div>

				{data.name !== undefined && (
					<div className="bottom">
						<div className="feels">
							{data.main ? (
								<p className="bold">
									{data.main.feels_like.toFixed()}&#8457;
								</p>
							) : null}
							<p>Feels Like</p>
						</div>

						<div className="humidity">
							{data.main ? (
								<p className="bold">{data.main.humidity}%</p>
							) : null}
							<p>Humidity</p>
						</div>

						<div className="description2">
							{data.weather ? (
								<p className="bold">
									{data.weather[0].description}
								</p>
							) : null}
							<p>Description</p>
						</div>

						<div className="wind">
							{data.wind ? (
								<p className="bold">
									{data.wind.speed.toFixed()} MPH
								</p>
							) : null}
							<p>Wind Speed</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;

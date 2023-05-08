import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/cards";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);
	return (
		<div className="text-center mt-5 container">
			<h1>Characters</h1>
			<div className="d-flex overflow-auto">
				{
					store.characters.map((char) => {
						return <Card key={char.id} item={char} cardType="character" />
					})
				}
			</div>
			<h1>Episodes</h1>
			<div className="d-flex overflow-auto">
				{
					store.episode.map((episode) => {
						return <Card key={episode.id} item={episode} cardType="episode" />
					})
				}
			</div>
			<h1>Locations</h1>
			<div className="d-flex overflow-auto">
				{
					store.location.map((location) => {
						return <Card key={location.id} item={location} cardType="location" />
					})
				}
			</div>

		</div>
	)
};

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 container">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">RIck and Morty</span>
			</Link>
			<div className="ml-auto">
				
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favourites.length}
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{store.favourites.map((fav)=>{
								return <li key={fav} className="d-flex justify-content-between">{fav} <button onClick={()=>{
									actions.setFavourites(fav);
								}}>x</button></li>
							})}
						</ul>
					</div>
			</div>
		</nav>
	);
}; 

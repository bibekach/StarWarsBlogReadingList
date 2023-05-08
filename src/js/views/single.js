import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [item, setItem] = useState([]);
	useEffect(() => {
		getSingalCharacters();
	}, [])

	const getSingalCharacters = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/"+params.thetype+"/"+params.theid);
		const data = await response.json();
		setItem(data);
	}



	return (

		<div className="container">
			<h1>{item.name}</h1>
			{Object.keys(item).map((itemKey, index)=>{
				if(typeof item[itemKey] != 'object')
                    return <p key={index}>{itemKey}:{item[itemKey]}</p>
                })
                }
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

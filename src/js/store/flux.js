const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			location: [],
			episode: [],
			favourites: []

		},
		actions: {
			getAllCharacters: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/character");
				const data = await response.json();
				setStore({ characters: data.results });
			},
			getAllEpisodes: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/episode");
				const data = await response.json();
				setStore({ episode: data.results });
			},
			getAllLocations: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/location");
				const data = await response.json();
				setStore({ location: data.results });
			},
			setFavourites: (newFav) => {
				const f = getStore().favourites;
				if (!f.includes(newFav)) {
					setStore({ favourites: [...f, newFav] });
				} else {
					setStore({ favourites: f.filter((x) => x != newFav)});
				}

			}

		}
	};
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/Planets")
          .then((res) => res.json())
          .then((data) => {
            setStore({ Planets: data });
            console.log("store updated", getStore());
          })
          .catch((err) => console.error(err));
      },
      loadPeople: () => {
        fetch("https://www.swapi.tech/api/People")
          .then((res) => res.json())
          .then((data) => {
            setStore({ Characters: data });
            console.log(getStore());
          })
          .catch((err) => console.error(err));
      },
      loadFilms: () => {
        fetch("https://www.swapi.tech/api/Films")
          .then((res) => res.json())
          .then((data) => {
            setStore({ Films: data });
            console.log("store updated", getStore());
          })
          .catch((err) => console.error(err));
      },
      loadSpecies: () => {
        fetch("https://www.swapi.tech/api/Species")
          .then((res) => res.json())
          .then((data) => {
            setStore({ Species: data });
            console.log("store updated", getStore());
          })
          .catch((err) => console.error(err));
      },
      loadStarships: () => {
        fetch("https://www.swapi.tech/api/Starships")
          .then((res) => res.json())
          .then((data) => {
            setStore({ Starships: data });
            console.log("store updated", getStore());
          })
          .catch((err) => console.error(err));
      },
      loadVehicles: () => {
        fetch("https://www.swapi.tech/api/Vehicles")
          .then((res) => res.json())
          .then((data) => {
            setStore({ Vehicles: data });
            console.log("store updated", getStore());
          })
          .catch((err) => console.error(err));
      },
      addToFavorites: (item) => {
        const favoriteArr = getStore()?.favorites;
        setStore({ favorites: [...favoriteArr, item] });
      },

      // Remove from Favorites
      removeFromFavorites: (name) => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter((favorite) => favorite !== name),
        });
      },
      fetchAPI: (url) => {
        console.log("url to fetch api", url);
        return fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log("inside fetchPI", data);
            return data;
          })
          .catch((err) => console.error(err));
      },
    },
  };
};

export default getState;

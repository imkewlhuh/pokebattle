import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonInfo = async (name) => {
    try {
        const mon = await axios.get(
            `${API_URL}/pokemon/${name}`);
        return mon.data;
    } catch (e) {
        console.log(e);
        return "Failed to get data"
    }
}
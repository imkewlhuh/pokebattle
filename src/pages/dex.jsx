import { useLoaderData, Link } from "react-router-dom";
import { Card, CardContent, Grid, Fab, Chip } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { DisplayType } from "./layout";

const types = ["normal", "fighting", "flying", "poison",
    "ground", "rock", "bug", "ghost",
    "fire", "water", "grass", "electric",
    "psychic", "ice", "dragon", "steel",
    "dark", "fairy"]

function listTypes(indexArr) {
    let list = "";

    for (let i = 0; i < indexArr.length; i++) {
        for (let j = 0; j < types.length; j++) {
            if (indexArr[i] === j) {
                if (i === indexArr.length - 1) {
                    list += `${types[j]}.`
                } else {
                    list += `${types[j]}, `
                }
            }
        }
    }
    return list;
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Effective(props) {
    let SE = "Super effective";
    let NV = "Not very effective";
    let NE = "Not effective";

    switch (props.type) {
        case "normal":
            return <Card sx={{ bgcolor: "#A0A29F", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="normal" />
                <CardContent>
                    <li>{NV} to {listTypes([5, 15])}</li>
                    <br />
                    <li>{NE} to {listTypes([7])}</li>
                    <br />
                    <li>{NE} from {listTypes([7])}</li>
                    <br />
                    <li>{SE} from {listTypes([1])}</li>
                </CardContent>
            </Card >;
        case "fighting":
            return <Card sx={{ bgcolor: "#D3425F", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="fighting" />
                <CardContent>
                    <li>{SE} to {listTypes([0, 5, 15, 13, 16])}</li>
                    <br />
                    <li>{NV} to {listTypes([2, 3, 6, 12, 17])}</li>
                    <br />
                    <li>{NE} to {listTypes([7])}</li>
                    <br />
                    <li>{NV} from {listTypes([5, 6, 16])}</li>
                    <br />
                    <li>{SE} from {listTypes([2, 12, 17])}</li>
                </CardContent>
            </Card >
        case "flying":
            return <Card sx={{ bgcolor: "#A1BBEC", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="flying" />
                <CardContent>
                    <li>{SE} to {listTypes([1, 6, 10])}</li>
                    <br />
                    <li>{NV} to {listTypes([5, 15, 11])}</li>
                    <br />
                    <li>{NE} from {listTypes([4])}</li>
                    <br />
                    <li>{NV} from {listTypes([1, 6, 10])}</li>
                    <br />
                    <li>{SE} from {listTypes([5, 11, 13])}</li>
                </CardContent>
            </Card >
        case "poison":
            return <Card sx={{ bgcolor: "#B763CF", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="poison" />
                <CardContent>
                    <li>{SE} to {listTypes([10, 17])}</li>
                    <br />
                    <li>{NV} to {listTypes([3, 4, 5, 7])}</li>
                    <br />
                    <li>{NE} to {listTypes([15])}</li>
                    <br />
                    <li>{SE} from {listTypes([4, 12])}</li>
                    <br />
                    <li>{NV} from {listTypes([1, 3, 6, 10, 17])}</li>
                </CardContent>
            </Card >
        case "ground":
            return <Card sx={{ bgcolor: "#DA7C4D", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="ground" />
                <CardContent>
                    <li>{SE} to {listTypes([3, 5, 15, 8, 11])}</li>
                    <br />
                    <li>{NV} to {listTypes([6, 10])}</li>
                    <br />
                    <li>{NE} to {listTypes([2])}</li>
                    <br />
                    <li>{NE} from {listTypes([11])}</li>
                    <br />
                    <li>{NV} from {listTypes([3, 5])}</li>
                    <br />
                    <li>{SE} from {listTypes([9, 10, 13])}</li>
                </CardContent>
            </Card >
        case "rock":
            return <Card sx={{ bgcolor: "#C9BB8A", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="rock" />
                <CardContent>
                    <li>{SE} to {listTypes([2, 6, 8, 13])}</li>
                    <br />
                    <li>{NV} to {listTypes([1, 4, 15])}</li>
                    <br />
                    <li>{NV} from {listTypes([0, 2, 3, 8])}</li>
                    <br />
                    <li>{SE} from {listTypes([1, 4, 15, 9, 10])}</li>
                </CardContent>
            </Card >
        case "bug":
            return <Card sx={{ bgcolor: "#92BC2C", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="bug" />
                <CardContent>
                    <li>{SE} to {listTypes([10, 12, 16])}</li>
                    <br />
                    <li>{NV} to {listTypes([1, 2, 3, 7, 15, 8, 17])}</li>
                    <br />
                    <li>{NV} from {listTypes([1, 4, 10])}</li>
                    <br />
                    <li>{SE} from {listTypes([2, 5, 8])}</li>
                </CardContent>
            </Card >
        case "ghost":
            return <Card sx={{ bgcolor: "#5F6DBC", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="ghost" />
                <CardContent>
                    <li>{SE} to {listTypes([7, 12])}</li>
                    <br />
                    <li>{NV} to {listTypes([16])}</li>
                    <br />
                    <li>{NE} to {listTypes([0])}</li>
                    <br />
                    <li>{NE} from {listTypes([0, 1])}</li>
                    <br />
                    <li>{NV} from {listTypes([3, 6])}</li>
                    <br />
                    <li>{SE} from {listTypes([7, 16])}</li>
                </CardContent>
            </Card >
        case "steel":
            return <Card sx={{ bgcolor: "#5695A3", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="steel" />
                <CardContent>
                    <li>{SE} to {listTypes([5, 13, 17])}</li>
                    <br />
                    <li>{NV} to {listTypes([15, 8, 9, 11])}</li>
                    <br />
                    <li>{NE} from {listTypes([3])}</li>
                    <br />
                    <li>{NV} from {listTypes([0, 2, 5, 6, 15, 10, 12, 13, 14, 17])}</li>
                    <br />
                    <li>{SE} from {listTypes([1, 4, 8])}</li>
                </CardContent>
            </Card >
        case "fire":
            return <Card sx={{ bgcolor: "#FBA54C", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="fire" />
                <CardContent>
                    <li>{SE} to {listTypes([6, 15, 10, 13])}</li>
                    <br />
                    <li>{NV} to {listTypes([5, 8, 9, 14])}</li>
                    <br />
                    <li>{NV} from {listTypes([6, 15, 8, 10, 13, 17])}</li>
                    <br />
                    <li>{SE} from {listTypes([4, 5, 9])}</li>
                </CardContent>
            </Card >
        case "water":
            return <Card sx={{ bgcolor: "#539DDF", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="water" />
                <CardContent>
                    <li>{SE} to {listTypes([4, 5, 8])}</li>
                    <br />
                    <li>{NV} to {listTypes([9, 10, 14])}</li>
                    <br />
                    <li>{NV} from {listTypes([15, 8, 9, 13])}</li>
                    <br />
                    <li>{SE} from {listTypes([10, 11])}</li>
                </CardContent>
            </Card >
        case "grass":
            return <Card sx={{ bgcolor: "#5FBD58", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="grass" />
                <CardContent>
                    <li>{SE} to {listTypes([4, 5, 9])}</li>
                    <br />
                    <li>{NV} to {listTypes([2, 3, 6, 15, 8, 10, 14])}</li>
                    <br />
                    <li>{NV} from {listTypes([4, 9, 10, 11])}</li>
                    <br />
                    <li>{SE} from {listTypes([2, 3, 6, 8, 13])}</li>
                </CardContent>
            </Card >
        case "electric":
            return <Card sx={{ bgcolor: "#F2D94E", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="electric" />
                <CardContent>
                    <li>{SE} to {listTypes([2, 9])}</li>
                    <br />
                    <li>{NV} to {listTypes([10, 11, 14])}</li>
                    <br />
                    <li>{NE} to {listTypes([4])}</li>
                    <br />
                    <li>{NV} from {listTypes([2, 15, 11])}</li>
                    <br />
                    <li>{SE} from {listTypes([4])}</li>
                </CardContent>
            </Card >
        case "psychic":
            return <Card sx={{ bgcolor: "#FA8581", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="psychic" />
                <CardContent>
                    <li>{SE} to {listTypes([1, 3])}</li>
                    <br />
                    <li>{NV} to {listTypes([15, 12])}</li>
                    <br />
                    <li>{NE} to {listTypes([16])}</li>
                    <br />
                    <li>{NV} from {listTypes([1, 12])}</li>
                    <br />
                    <li>{SE} from {listTypes([6, 7, 16])}</li>
                </CardContent>
            </Card >
        case "ice":
            return <Card sx={{ bgcolor: "#75D0C1", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="ice" />
                <CardContent>
                    <li>{SE} to {listTypes([2, 4, 10, 14])}</li>
                    <br />
                    <li>{NV} to {listTypes([15, 8, 9, 13])}</li>
                    <br />
                    <li>{NV} from {listTypes([13])}</li>
                    <br />
                    <li>{SE} from {listTypes([1, 5, 15, 8])}</li>
                </CardContent>
            </Card >
        case "dragon":
            return <Card sx={{ bgcolor: "#0C69C8", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="dragon" />
                <CardContent>
                    <li>{SE} to {listTypes([14])}</li>
                    <br />
                    <li>{NV} to {listTypes([15])}</li>
                    <br />
                    <li>{NE} to {listTypes([17])}</li>
                    <br />
                    <li>{NV} from {listTypes([8, 9, 10, 11])}</li>
                    <br />
                    <li>{SE} from {listTypes([13, 14, 17])}</li>
                </CardContent>
            </Card >
        case "dark":
            return <Card sx={{ bgcolor: "#595761", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="dark" />
                <CardContent>
                    <li>{SE} to {listTypes([7, 12])}</li>
                    <br />
                    <li>{NV} to {listTypes([1, 16, 17])}</li>
                    <br />
                    <li>{NE} from {listTypes([12])}</li>
                    <br />
                    <li>{NV} from {listTypes([7, 16])}</li>
                    <br />
                    <li>{SE} from {listTypes([1, 6, 17])}</li>
                </CardContent>
            </Card >
        case "fairy":
            return <Card sx={{ bgcolor: "#EE90E6", maxWidth:{md: 250, lg: 450, xl: 500}, maxHeight: {md: 300, lg: 400, xl: 550} }} >
                <br />
                <DisplayType type="fairy" />
                <CardContent>
                    <li>{SE} to {listTypes([1, 14, 16])}</li>
                    <br />
                    <li>{NV} to {listTypes([3, 15, 8])}</li>
                    <br />
                    <li>{NE} from {listTypes([14])}</li>
                    <br />
                    <li>{NV} from {listTypes([1, 6, 16])}</li>
                    <br />
                    <li>{SE} from {listTypes([3, 15])}</li>
                </CardContent>
            </Card >
    }
}

export default function DexEntry() {
    const mon = useLoaderData();

    let type1 = mon.types[0].type.name;
    let type2 = "";

    if (mon.types[1]) {
        type2 += mon.types[1].type.name;
    }

    console.log(mon);

    return (
        <div className="dex">
            <Grid container sx={{ height: {md: "5em", lg: "6em", xl: "8.5em"}, alignItems: "center" }}>
                <Grid item xs={2} sx={{ paddingX: {md: "1.4em", lg: "2.5em", xl: "4em"} }} >
                    <Link to={`..`}>
                        <Fab size="large" >
                            <CatchingPokemonIcon color="error" fontSize="large" />
                        </Fab>
                    </Link>
                </Grid>
                <Grid item >
                    <h1>{mon.id} {capitalize(mon.name)}</h1>
                </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", paddingTop: { xl: "6em"} }} className="dexMon">
                {
                    mon.types[1] ?
                        <>
                            <Grid item xs={4} sx={{ paddingLeft: {lg: "3em", xl: "5em"} }}>
                                <Effective type={type1} />
                            </Grid>
                            <Grid item xs={4} >
                                <img className="dexIcon" src={mon.sprites.other["official-artwork"]["front_default"]} />
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: {lg: "1em", xl: "3em"}, paddingRight: {lg: "3em"} }}>
                                <Effective type={type2} />
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={4} sx={{ paddingLeft: {lg: "3em", xl: "5em"} }}>
                                <Effective type={type1} />
                            </Grid>
                            <Grid item xs={4}>
                                <img className="dexIcon" src={mon.sprites.other["official-artwork"]["front_default"]} />
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                        </>
                }
            </Grid>
        </div>
    )
}
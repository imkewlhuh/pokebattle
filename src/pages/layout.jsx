import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fab, Grid, Paper, Chip, Stack } from "@mui/material";
import { useSpring, animated } from '@react-spring/web';
import { capitalize } from "./dex";
import { BugIcon, DarkIcon, DragonIcon, ElectricIcon, FairyIcon, FightingIcon, FireIcon, FlyingIcon, GhostIcon, GrassIcon, GroundIcon, IceIcon, NormalIcon, PoisonIcon, PsychicIcon, RockIcon, SteelIcon, WaterIcon } from "../assets/icons";

const gen1 = () => {
    return Math.floor(1 + Math.random() * 151);
}

const API_URL = "https://pokeapi.co/api/v2";

function DisplayType(props) {
    switch (props.type) {
        case "bug":
            return <Chip sx={{ bgcolor: "#92BC2C" }} size="small" icon={<BugIcon />} label="Bug" />;
        case "dark":
            return <Chip sx={{ bgcolor: "#595761" }} size="small" icon={<DarkIcon />} label="Dark" />;
        case "dragon":
            return <Chip sx={{ bgcolor: "#0C69C8" }} size="small" icon={<DragonIcon />} label="Dragon" />;
        case "electric":
            return <Chip sx={{ bgcolor: "#F2D94E" }} size="small" icon={<ElectricIcon />} label="Electric" />;
        case "fairy":
            return <Chip sx={{ bgcolor: "#EE90E6" }} size="small" icon={<FairyIcon />} label="Fairy" />;
        case "fighting":
            return <Chip sx={{ bgcolor: "#D3425F" }} size="small" icon={<FightingIcon />} label="Fighting" />;
        case "fire":
            return <Chip sx={{ bgcolor: "#FBA54C" }} size="small" icon={<FireIcon />} label="Fire" />;
        case "flying":
            return <Chip sx={{ bgcolor: "#A1BBEC" }} size="small" icon={<FlyingIcon />} label="Flying" />;
        case "ghost":
            return <Chip sx={{ bgcolor: "#5F6DBC" }} size="small" icon={<GhostIcon />} label="Ghost" />;
        case "grass":
            return <Chip sx={{ bgcolor: "#5FBD58" }} size="small" icon={<GrassIcon />} label="Grass" />;
        case "ground":
            return <Chip sx={{ bgcolor: "#DA7C4D" }} size="small" icon={<GroundIcon />} label="Ground" />;
        case "ice":
            return <Chip sx={{ bgcolor: "#75D0C1" }} size="small" icon={<IceIcon />} label="Ice" />;
        case "normal":
            return <Chip sx={{ bgcolor: "#A0A29F" }} size="small" icon={<NormalIcon />} label="Normal" />;
        case "poison":
            return <Chip sx={{ bgcolor: "#B763CF" }} size="small" icon={<PoisonIcon />} label="Poison" />;
        case "psychic":
            return <Chip sx={{ bgcolor: "#FA8581" }} size="small" icon={<PsychicIcon />} label="Psychic" />;
        case "rock":
            return <Chip sx={{ bgcolor: "#C9BB8A" }} size="small" icon={<RockIcon />} label="Rock" />;
        case "steel":
            return <Chip sx={{ bgcolor: "#5695A3" }} size="small" icon={<SteelIcon />} label="Steel" />;
        case "water":
            return <Chip sx={{ bgcolor: "#539DDF" }} size="small" icon={<WaterIcon />} label="Water" />;
    }
}

export default function Arena() {
    const [teams, setTeams] = useState([])

    const [springs, api] = useSpring(() => ({
        from: { x: -2000 },
        to: { x: 0, y: 160 }
    }))
    const [springsA, apiA] = useSpring(() => ({
        from: { x: -3500, y: -20 },
    }))
    const [springsT1, apiT1] = useSpring(() => ({
        from: { x: -4000 },
        to: [
            { x: -2000 },
            { x: 0 }
        ]
    }))
    const [springsT2, apiT2] = useSpring(() => ({
        from: { x: -4000 },
        to: [
            { x: -3000 },
            { x: -2000 },
            { x: 0 }
        ]
    }))

    const handleClick = () => {
        api.start({
            from: { x: 0 },
            to: { x: -1000 },
        })
        apiA.start({
            from: { x: -3500 },
            to: { x: 0 }
        })
        apiT1.start({
            from: { x: -4000 },
            to: [
                { x: -2000 },
                { x: 0 }
            ]
        })
        apiT2.start({
            from: { x: -4000 },
            to: [
                { x: -3000 },
                { x: -2000 },
                { x: 0 }
            ]
        })
    }

    useEffect(() => {
        const getTeams = async () => {
            const teamdata = [];
            for (let i = 0; i < 13; i++) {
                const mon = await fetch(
                    `${API_URL}/pokemon/${gen1()}`);
                mon.json().then(mon => {
                    teamdata.push(mon);
                });
            };
            setTeams(teamdata);
        };
        getTeams();


    }, []);

    console.log(teams);

    const team1 = teams.slice(0, 6);
    console.log(team1);
    const team2 = teams.slice(6, 12);
    console.log(team2);

    return (
        <div className="layout">
            <div className="header">
            </div>
            <animated.div style={{ ...springs }} >
                <Fab className="ready" variant="extended" size="medium" color="error" onClick={() => {
                    handleClick()
                }}>
                    Ready?
                </Fab>
            </animated.div>
            <animated.div style={{ ...springsA }} >
                <Paper sx={{ maxHeight: "80vh" }} elevation={12} className="arena">
                    <Grid container >
                        {
                            team1 ?
                                <Grid item xs={4} sx={{ paddingLeft: "1em" }} className="team1">
                                    <Grid container sx={{ width: 500 }}>
                                        {
                                            team1.map(pokemon => (
                                                <Grid item xs={6} sx={{ textAlign: "center" }} key={pokemon.id} className="mon1">
                                                    <animated.div style={{ ...springsT1 }}>
                                                        <Link to={`/dex/${pokemon.name}`} style={{ textDecoration: "none", color: "black" }} >
                                                            <img className="team1Icons" src={pokemon.sprites["front_default"]} />
                                                            <p className="team1Names">{capitalize(pokemon.name)}</p>
                                                        </Link>
                                                        <br />
                                                        {
                                                            pokemon.types[1] ?
                                                                <>
                                                                    <Stack spacing={1} direction={"row"}>
                                                                        <DisplayType type={pokemon.types[0].type.name} /><DisplayType type={pokemon.types[1].type.name} />
                                                                    </Stack>
                                                                </> :
                                                                <>
                                                                    <DisplayType type={pokemon.types[0].type.name} />
                                                                </>
                                                        }
                                                    </animated.div>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </Grid> :
                                <Grid item xs={4}>
                                    <div>Your team is still loading...</div>
                                </Grid>
                        }
                        <Grid item xs={4} sx={{ marginLeft: "0.5em", marginRight: "-8em" }} className="vs" >
                        </Grid>
                        {
                            team2 ?
                                <Grid item xs={3} sx={{ paddingRight: "0em" }} className="team2">
                                    <Grid container sx={{ width: 500 }} >
                                        {
                                            team2.map(pokemon => (
                                                <Grid item xs={6} sx={{ textAlign: "center" }} key={pokemon.id} className="mon2">
                                                    <animated.div style={{ ...springsT2 }}>
                                                        <Link to={`/dex/${pokemon.name}`} style={{ textDecoration: "none", color: "black" }} >
                                                            <img className="team2Icons" src={pokemon.sprites["front_default"]} />
                                                            <p className="team2Names">{capitalize(pokemon.name)}</p>
                                                        </Link>
                                                        <br />
                                                        {
                                                            pokemon.types[1] ?
                                                                <>
                                                                    <Stack spacing={1} direction={"row"}>
                                                                        <DisplayType type={pokemon.types[0].type.name} /><DisplayType type={pokemon.types[1].type.name} />
                                                                    </Stack>
                                                                </> :
                                                                <>
                                                                    <DisplayType type={pokemon.types[0].type.name} />
                                                                </>
                                                        }
                                                    </animated.div>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </Grid> :
                                <Grid item>
                                    <div>Your team is still loading...</div>
                                </Grid>
                        }
                    </Grid>
                </Paper>
            </animated.div>
        </div>
    )
}
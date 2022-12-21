import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./Card";
import mcbollinger from "../../Images/mcbollinger.jpg";

const data = {
	portfolio: {
		name: "Portfolio Website",
		img: { mcbollinger },
		website: "https://github.com/mcb2284/mcbollinger",
		description:
			"Personal website I made using react in order to have " +
			"a central location to share my projects and achievements." +
			"I will attempt to keep the website as current as possible " +
			"with anything new I've completed being shared and displayed.",
	},
}

function Projects() {
	return (
		<>
			<Typography
				variant="h3"
				id="Projects"
				sx={{
					margin: "5vh 6vw 0 6vw",
					fontFamily: "roboto",
				}}
			>
				Projects
			</Typography>

			<Grid container>
				<Box
					className="landing-sec"
					sx={{
						width: "80vw",
						display: "flex",
						flexDirection: "row",
						justifyContent: "left",
						alignItems: "space-around",
						margin: "0 5vw",
						padding: "30px",
					}}
				>
					<ProjectCard data={data["portfolio"]} img={mcbollinger}/>
				</Box>
			</Grid>
		</>
	);
}

export default Projects;
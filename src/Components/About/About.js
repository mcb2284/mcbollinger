import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Grid } from "@mui/material";
import AboutCard from "./Card";
import columbia_img from "../../Images/columbia_university.jpg";
import ranger from "../../Images/ranger.jpg";
import amazon from "../../Images/amazon.png";

const data = {
	columbia: {
		name: "Columbia University",
		dates: "September 2019 - May 2023",
		img: { columbia_img },
		description:
			"Columbia University is a private Ivy League research university in New York City. " +
			"Established in 1754 on the grounds of Trinity Church in Manhattan, " +
			"Columbia is the oldest institution of higher education in New York and " +
			"the fifth-oldest institution of higher learning in the United States. " +
			"It is one of nine colonial colleges founded prior to the Declaration of Independence, " +
			"seven of which belong to the Ivy League. Columbia is ranked among the top " +
			"universities in the world by major education publications.",
	},
	ranger: {
		name: "75th Ranger Regiment",
		dates: "February 2012 - June 2019",
		img: { ranger },
		description:
			"",
	},
	amazon: {
		name: "Amazon",
		dates: "June 2022 - August 2022",
		img: { amazon },
		description:
			"",
	},
};

function About() {
	return (
		<>
			<Typography
				variant="h3"
				id="About"
				sx={{
					margin: "0 6vw",
					fontFamily: "roboto",
				}}
			>
				About
			</Typography>

			<Grid container>
				<Box
					className="landing-sec"
					sx={{
						width: "80vw",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
						alignItems: "space-around",
						margin: "0 5vw",
						padding: "30px",
					}}
				>
					<AboutCard data={data["columbia"]} img={columbia_img} />
					<AboutCard data={data["ranger"]} img={ranger} />
					<AboutCard data={data["amazon"]} img={amazon} />
				</Box>
			</Grid>
		</>
	);
}

export default About;
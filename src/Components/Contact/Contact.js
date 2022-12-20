import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Contact() {
	return (
		<>
			<Typography
				variant="h3"
				id="About"
				sx={{
					margin: "5vh 6vw 0 6vw",
					fontFamily: "roboto",
				}}
			>
				Contact
			</Typography>

			<Box className="landing-sec" id="Contact">
				<Typography
					variant="h4"
					textAlign="center"
					sx={{ fontFamily: "roboto", margin: "15px" }}
				>
					{" "}
					Let's get in touch!
				</Typography>
				<Typography
					variant="h5"
					textAlign="center"
					sx={{ fontFamily: "roboto", margin: "15px" }}
				>
					{" "}
					I am always looking for new opportunities to grow and learn. If you
					have any questions, or just want to say hi, feel free to reach out and
					I will get back to you as soon as possible!
				</Typography>
				<Button
					variant="contained"
					href="mailto:michael.c.bollinger@gmail.com"
					color="secondary"
					sx={{ width: "fit-content" }}
				>
					Email Me!
				</Button>
			</Box>
			<div style={{ height: "5vh" }}></div>
		</>
	);
}
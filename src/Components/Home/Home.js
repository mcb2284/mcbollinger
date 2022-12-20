import Container from "@mui/material/Container";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Home() {
	return (
		<>
			<Container maxWidth="xl" sx={{ marginTop: "15vh" }}>
				<Intro />
				<About />
				<Contact />
			</Container>
		</>
	);
}

import Container from "@mui/material/Container";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

export default function Home() {
	return (
		<>
			<Container maxWidth="xl" sx={{ marginTop: "15vh" }}>
				<Intro />
				<About />
				<Projects/>
				<Contact />
			</Container>
		</>
	);
}

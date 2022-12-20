import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from "@mui/material/IconButton";

export default function ProjectCard(props) {

	return (
		<>
			<Card sx={{ width: "25vw" }} elevation={5}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="180"
						image={props.img}
						alt="michael bollinger"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{props.data["name"]}
						</Typography>
						<Typography gutterBottom variant="subtitle2" component="div">
							{props.data["description"]}
						</Typography>
					</CardContent>
					<IconButton aria-label="website" href={props.data["website"]} target="_blank">
						<LaunchIcon />
					</IconButton>
				</CardActionArea>
			</Card>
		</>

	);
}
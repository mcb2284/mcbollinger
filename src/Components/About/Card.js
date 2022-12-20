import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
	return (
		<Card sx={{ width: "25vw" }} elevation={5}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="180"
					image={props.img}
					alt="columbia university"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.data["name"]}
					</Typography>
					<Typography gutterBottom variant="subtitle2" component="div">
						{props.data["dates"]}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

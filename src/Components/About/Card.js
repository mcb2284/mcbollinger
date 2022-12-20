import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, CardHeader, Modal} from "@mui/material";
import {useState} from "react";
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from "@mui/material/IconButton";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	padding: 1
};


export default function ActionAreaCard(props) {

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Card sx={{ width: "25vw" }} elevation={5} onClick={handleOpen}>
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
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>

					<Card sx={style}>
						<CardHeader
							title={props.data["name"]}
							subheader={props.data["dates"]}
						/>
						<CardMedia
							component="img"
							height="194"
							image={props.img}
							alt={props.data["name"]}
						/>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								{props.data["description"]}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="website" href={props.data["website"]} target="_blank">
								<LanguageIcon />
							</IconButton>
						</CardActions>
					</Card>

			</Modal>
		</>

	);
}

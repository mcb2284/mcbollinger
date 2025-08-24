import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import laptopSVG from "../../Images/workspace.svg";

export default function Intro() {
  return (
    <Box
      className="landing-sec"
      id="Intro"
      sx={{
        margin: "5vh 5vw",
        padding: "30px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "300",
          fontFamily: "roboto",
        }}
      >
        {" "}
        Welcome! My name is
      </Typography>
      <Typography variant="h3" display="inline" sx={{ fontFamily: "roboto" }}>
        {" "}
        Michael Bollinger.
      </Typography>
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Typography variant="h5" sx={{ fontFamily: "roboto" }}>
            {" "}
            I am a software engineer.
          </Typography>
        </Grid>
      </Grid>
      <img
        className="landing-img"
        src={laptopSVG}
        alt="laptop"
        style={{ height: 200, zIndex: "1" }}
      />
      <Typography
        variant="h6"
        textAlign="center"
        sx={{ fontFamily: "roboto", margin: "15px" }}
      >
        {" "}
        "The best way to predict the future is to invent it."
      </Typography>
    </Box>
  );
}

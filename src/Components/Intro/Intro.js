import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Intro() {
  return (
    <Box
      className="landing-sec"
      id="Intro"
      sx={{
        width: "100%",
        padding: "30px",
        backgroundColor: "black", // Box background
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // horizontal centering
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        display="inline"
        sx={{
          fontWeight: "300",
          fontFamily: "Ruigslay",
          color: "#e76f51", // Text color
          textAlign: "center",
        }}
      >
        {" "}
        Michael Bollinger
      </Typography>
    </Box>
  );
}

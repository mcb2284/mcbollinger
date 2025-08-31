import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Grid } from "@mui/material";
import AboutCard from "./Card";
import columbia_img from "../../Images/columbia_university.jpg";
import ranger from "../../Images/ranger.jpg";
import amazon from "../../Images/amazon.png";
import comp from "../../Images/comp.jpg";

const data = {
  columbia: {
    name: "Columbia University",
    dates: "September 2019 - May 2023",
    img: { columbia_img },
    website: "https://www.columbia.edu/",
    description:
      "Bachelor of Arts – Computer Science, \n" +
      "Dean’s List,\n" +
      "Service Award for Academics and Leadership,\n" +
      "Director of Veteran Health for Columbia University Military Veterans in 2020",
  },
  ranger: {
    name: "75th Ranger Regiment",
    dates: "February 2012 - June 2019",
    img: { ranger },
    website: "https://www.army.mil/ranger/",
    description:
      "Directly participated in the planning and execution of missions in accordance with United States foreign policy.\n" +
      "Conducted joint training missions with special operations units from Germany, England, and Italy to improve our ability\n" +
      "to plan, train, and operate synchronously with foreign militaries.\n" +
      "Operated as a hand-selected team member with partner forces in foreign militaries. Maintained a high mission success\n" +
      "rate and succeeded in the development and execution of non-standard operations.",
  },
  amazon: {
    name: "Amazon",
    dates: "June 2022 - August 2022",
    img: { amazon },
    website: "https://www.amazon.com",
    description:
      "Successfully completed an internship at Amazon, where I worked as a Cloud Developer at Ring and utilized Go and Docker to improve the integration testing suite\n" +
      "Implemented new features to the integration testing suite, including code coverage and the ability to compute total coverage using unit and integration tests\n" +
      "Applied these updates to 21 different microservices, resulting in enhanced testing and code coverage across the organization.",
  },
};

function About() {
  return (
    <Grid
      container
      spacing={2}
      columns={12}
      direction="row"
      sx={{
        marginTop: "40px",
        marginLeft: "10px",
        marginRight: "10px",
        paddingY: "20px",
        backgroundColor: "#FDF7D2",
        borderRadius: "16px",
        width: "100%",
      }}
    >
      <Grid size={6} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              margin: "0 6vw",
              fontFamily: "Arkitech Bold",
            }}
          >
            Overview
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: "0 6vw",
              fontFamily: "Arkitech Regular",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
            lacinia arcu eget nulla.
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={6}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={comp}
          alt="Everything is Computer"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "16px",
            maxWidth: "400px",
            objectFit: "cover",
            boxShadow: 3,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default About;

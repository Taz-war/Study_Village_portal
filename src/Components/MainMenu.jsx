import { Box, Drawer, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MainMenu = ({ open, setOpen }) => {
  let anchor = "";
  const matches = useMediaQuery("(min-width:600px)");
  if (matches === true) {
    anchor = "top";
  } else {
    anchor = "left";
  }
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        height: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
      }}
    >
      <Box sx={{width:{xs:250,sm:300,md:'100%',lg:'100%'}}}>
        <Grid container columns={12} >
          <Grid item lg={6} xs={0} md={0} sm={0}></Grid>
          <Grid item lg={3} xs={12} sm={12} md={6} pl={2}>
            <h3 style={{ fontStyle: "italic" }}>ACTIONS</h3>
            <Link
              to={'/student_application'}
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Student Applications
            </Link>
            <br></br>
            <Link
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Start a campaign
            </Link>
            <br></br>
            <Link
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Submit Student leads
            </Link>
            <br></br>
            <Link
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Enrol a student in Destination Prep{" "}
            </Link>
            <br></br>
            <Link
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Book a individual counselling session
            </Link>
            <br></br>
            <Link
              to={'/'}
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Contact us
            </Link>
            <br />
            <br />
          </Grid>
          <Grid item lg={3} xs={12} sm={12} md={6} pl={2}>
            <h3 style={{ fontStyle: "italic" }}>RESOURCES</h3>
            <Link
              to={'/company_profile'}
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Your company profile
            </Link>
            <br></br>
            <Link
              to={'/your_students'}
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Your students
            </Link>
            <br></br>
            <Link
              to={'/counsellors'}
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Counsellor training
            </Link>
            <br></br>
            <Link
              to={'/program_explainers'}
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Program Explainers{" "}
            </Link>
            <br></br>
            <Link
              to={'/company_profile'}
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Marketing resources
            </Link>
            <br></br>
            <Link
              to={'/partnership_manager'}
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Easy Guide to making money with StudyVillage
            </Link>
            <br></br>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default MainMenu;

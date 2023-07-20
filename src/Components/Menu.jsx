import { Box, Drawer, Grid, Paper, styled, useMediaQuery } from "@mui/material";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "#ddd" ? "#ddd" : "#ddd",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Menu = ({ open, setOpen }) => {
  let anchor = "";
  const matches = useMediaQuery("(min-width:600px)");
  if (matches === true) {
    anchor = "top";
  } else {
    anchor = "left";
  }
  console.log(matches);
  return (
    <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
      <Box
        height={matches === true ? "25vh" : "100vh"}
        sx={{
          backgroundColor: "#ddd",
        }}
      >
        {/* <Box width={matches === true ? "50%" : "0%"}></Box>
        <Box width={"50%"} > */}
          {/* <Box width={matches === true ? "50%" : "100%"}>
            <h3 style={{ fontStyle: "italic" }}>ACTIONS</h3>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Student Applications
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Start a campaign
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Submit Student leads
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Enrol a student in Destination Prep{" "}
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Book a individual counselling session
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Contact us
            </a>
            <br></br>
          </Box> */}
          {/* <Box width={matches === true ? "50%" : "100%"}>
            <h3 style={{ fontStyle: "italic" }}>RESOURCES</h3>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Your company profile
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Your students
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Counsellor training
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Program Explainers{" "}
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Marketing resources
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Easy Guide to making money with StudyVillage
            </a>
            <br></br>
          </Box> */}
        {/* </Box> */}

        <Grid container spacing={2} columns={16}>
          <Grid item lg={8} md={5} xs={8} mb={15} ml={3.5}>
            <Item>''</Item>
          </Grid>
          <Grid item lg={4} md={5} xs={8} mb={15} ml={3.5}>
            <Item>
            <h3 style={{ fontStyle: "italic" }}>ACTIONS</h3>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Student Applications
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Start a campaign
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Submit Student leads
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Enrol a student in Destination Prep{" "}
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Book a individual counselling session
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Contact us
            </a>
            </Item>
          </Grid>

          <Grid item lg={4} md={5} xs={8} mb={15} ml={3.5}>
            <Item>
            <h3 style={{ fontStyle: "italic" }}>RESOURCES</h3>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Your company profile
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Your students
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Counsellor training
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Program Explainers{" "}
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Marketing resources
            </a>
            <br></br>
            <a
              href="google.com"
              style={{ textDecoration: "none", color: "grey", lineHeight: 1.8 }}
            >
              Easy Guide to making money with StudyVillage
            </a>
            <br></br>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </Drawer>
  );
};

export default Menu;

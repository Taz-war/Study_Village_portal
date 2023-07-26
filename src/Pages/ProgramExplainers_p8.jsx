import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MainMenu from "../Components/MainMenu";
import { useState } from "react";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import pic1 from "../assets/Screenshot_1.png";
import pic2 from "../assets/Screenshot_2.png";
import pic3 from "../assets/Screenshot_3.png";
import pic4 from "../assets/Screenshot_4.png";
import pic5 from "../assets/Screenshot_5.png";
import pic6 from "../assets/Screenshot_6.png";
import pic7 from "../assets/Screenshot_7.png";
import pic8 from "../assets/Screenshot_8.png";
import pic9 from "../assets/Screenshot_9.png";
import pic10 from "../assets/Screenshot_10.png";
import pic11 from "../assets/Screenshot_11.png";
import pic12 from "../assets/Screenshot_12.png";
import pic13 from "../assets/Screenshot_13.png";
import pic14 from "../assets/Screenshot_14.png";

import pic15 from "../assets/Screenshot_15.png";
import pic16 from "../assets/Screenshot_16.png";
import pic17 from "../assets/Screenshot_17.png";
import pic18 from "../assets/Screenshot_18.png";
import pic19 from "../assets/Screenshot_19.png";
import pic20 from "../assets/Screenshot_20.png";
import pic21 from "../assets/Screenshot_21.png";
import pic22 from "../assets/Screenshot_22.png";
import pic23 from "../assets/Screenshot_23.png";
import pic24 from "../assets/Screenshot_24.png";

import pic25 from "../assets/Screenshot_25.png";
import pic26 from "../assets/Screenshot_26.png";
import pic27 from "../assets/Screenshot_27.png";
import pic28 from "../assets/Screenshot_28.png";
import pic29 from "../assets/Screenshot_29.png";
import pic30 from "../assets/Screenshot_30.png";

import pic31 from "../assets/Screenshot_31.png";
import pic32 from "../assets/Screenshot_32.png";
import pic33 from "../assets/Screenshot_33.png";
import pic34 from "../assets/Screenshot_34.png";
import pic35 from "../assets/Screenshot_35.png";
import pic36 from "../assets/Screenshot_36.png";

import { SignalCellularAlt} from "@mui/icons-material";
import { StateContex } from "../Context/StateProvider";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "black" ? "black" : "black",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProgramExplainers_p8 = () => {
  const { open, setOpen } = useContext(StateContex);

  return (
    <Box height={"100%"} minWidth={"420px"} overflow={"hidden"}>
      <Box sx={{ backgroundColor: "#121F28" }} height={"35vh"}>
        <Grid container columns={12}>
          <Grid item lg={9} md={9} sm={9} xs={9} textAlign={"left"} p={2.5}>
            <Link to={'/'}>
            <img
              src="https://studyvillage.org/wp-content/uploads/2020/10/Logo-long-green-white_Artboard-6-15.png"
              alt=""
              width={300}
            />
            </Link>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={3}
            xs={3}
            textAlign={"right"}
            sx={{ pt: { xs: 2, sm: 1.8, md: 1, lg: 0.5 } }}
          >
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ alignSelf: "flex-end" }}
              disableRipple
            >
              <MenuIcon
                sx={{
                  width: { lg: 180, md: 100, sm: 80, xs: 50 },
                  color: "yellow",
                  height: { lg: 70, md: 60, sm: 50, xs: 40 },
                }}
              />
            </IconButton>
            <MainMenu open={open} setOpen={setOpen} />
          </Grid>
        </Grid>
      </Box>
      <Box
        width={"100%"}
        // height={"65vh"}
        sx={{ backgroundColor: "#121F28" }}
        m={0}
      >
        <h2
          style={{
            color: "white",
            margin: 0,
            textAlign: "left",
            marginLeft: 30,
            borderBottom: "1px solid yellow",
            paddingBottom: 15,
            marginRight: 30,
          }}
        >
          <i>Program Explainers</i>
        </h2>
        <Box
          height={"30px"}
          width={"300px"}
          borderRadius={2.5}
          color={"white"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#2fafd4" }}
          ml={4}
          mt={3}
          pt={1}
        >
          <Typography fontStyle={"italic"}>
            <b>
              EXPLAINERS VIDIEOS
              <span style={{ color: "#121F28" }}> STUDENT VIEW</span>
            </b>
          </Typography>
        </Box>
        <br />
        <br />
        <Box display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"}>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic25} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic26} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic27} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic28} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic29} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2, mt: 0.4 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic30} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
        </Box>
        <Box
          height={"30px"}
          width={"400px"}
          borderRadius={2.5}
          color={"white"}
          justifyContent={"center"}
          sx={{
            backgroundColor: "#2fafd4",
            height: { lg: "30px", md: "30px", sm: "30px", xs: "60px" },
            width: { lg: "400px", md: "400px", sm: "400px", xs: "300px" },
          }}
          ml={4}
          mt={3}
          pt={1}
        >
          <Typography fontStyle={"italic"}>
            <b>
              EXPLAINERS VIDIEOS
              <span style={{ color: "#121F28" }}> STUDYVILLAGE PARTNERS</span>
            </b>
          </Typography>
        </Box>
        <br />
        <br />
        <Box display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"}>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2, mt: 0.4 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic31} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic32} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic33} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic34} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic35} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
          <Box
            // width={"30%"}
            height={"315px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "80%", sm: "80%", md: "30%" },
              mb: 15,
              p: 0,
            }}
          >
            <Box
              width={"100%"}
              borderBottom={"1px solid yellow"}
              height={"40px"}
              textAlign={"left"}
            >
              <DownloadForOfflineRoundedIcon
                fontSize="large"
                sx={{ color: "yellow", marginLeft: 2, mt: 0.4 }}
              />
            </Box>
            <Box width={"100%"} height={"260px"}>
              <img src={pic36} alt="s1" width={"100%"} height={"104%"} />
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            color: "white",
            fontSize: "xx-large",
            textAlign: "left",
            ml: 4,
          }}
        >
          Happy healthy and wise
        </Typography>

        <Box
          height={"30px"}
          width={"500px"}
          borderRadius={2.5}
          color={"white"}
          justifyContent={"center"}
          sx={{
            backgroundColor: "#2fafd4",
            width: {
              xs: "65%",
              lg: "500px",
              md: "500px",
            },
            height: {
              xs: "60px",
              lg: "30px",
              md: "30px",
            },
          }}
          ml={4}
          mt={3}
          pt={1}
        >
          <Typography fontStyle={"italic"}>
            <b>
              EXPLAINERS VIDIEOS & OUTLINE SAMPLES
              <span style={{ color: "#121F28" }}> AWARD PROGRAMS</span>
            </b>
          </Typography>
        </Box>
        <br />
        <br />

        <Box>
          <Grid container spacing={2} columns={16}>
            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic1} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic2} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic3} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} mr={1} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic4} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>

            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic5} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic6} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic7} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} mr={1} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic8} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>

            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic9} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic10} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic11} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} mr={1} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic12} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>

            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic13} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic14} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>

        <Typography
          sx={{
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            color: "white",
            fontSize: "xx-large",
            textAlign: "left",
            ml: 4,
          }}
        >
          Happy healthy and wise
        </Typography>

        <Box
          height={"30px"}
          width={"500px"}
          borderRadius={2.5}
          color={"white"}
          justifyContent={"center"}
          sx={{
            backgroundColor: "#2fafd4",
            width: {
              xs: "65%",
              lg: "500px",
              md: "500px",
            },
            height: {
              xs: "60px",
              lg: "30px",
              md: "30px",
            },
          }}
          ml={4}
          mt={3}
          pt={1}
        >
          <Typography fontStyle={"italic"}>
            <b>
              EXPLAINERS VIDIEOS & OUTLINE SAMPLES
              <span style={{ color: "#121F28" }}> ELICOS PROGRAMS</span>
            </b>
          </Typography>
        </Box>
        <br />
        <br />
        <Box>
          <Grid container spacing={2} columns={16}>
            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic15} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic16} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic17} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} mr={1} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic18} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>

            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic19} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic20} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic21} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} mr={1} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic22} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>

            <Grid item lg={5} md={5} xs={8} mb={15} ml={3.5}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <DownloadForOfflineRoundedIcon
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic23} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
            <Grid item lg={2} md={2} xs={4} mb={15} ml={2}>
              <Item
                sx={{
                  border: "1px solid yellow",
                  color: "white",
                  height: "315px",
                  p: 0,
                }}
              >
                <Box
                  width={"100%"}
                  borderBottom={"1px solid yellow"}
                  height={"40px"}
                  textAlign={"left"}
                >
                  <SignalCellularAlt
                    fontSize="large"
                    sx={{ color: "yellow", marginLeft: 2 }}
                  />
                </Box>
                <Box width={"100%"} height={"260px"}>
                  <img src={pic24} alt="s1" width={"100%"} height={"104%"} />
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgramExplainers_p8;

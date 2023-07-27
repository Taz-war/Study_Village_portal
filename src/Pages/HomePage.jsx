import {
  Box,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import Menu from "../Components/Menu";
import { useState } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import MainMenu from "../Components/MainMenu";
import { YouTube } from "@mui/icons-material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";

import pic37 from "../assets/Screenshot_37.png";
import pic38 from "../assets/Screenshot_38.png";
import pic39 from "../assets/Screenshot_39.png";
import pic40 from "../assets/Screenshot_40.png";
import { useContext } from "react";
import { StateContex } from "../Context/StateProvider";

import sydney from "../assets/sydney.PNG";
import urlicon from '../assets/urlicon.PNG'

const HomePage = () => {
  // const [open, setOpen] = useState(false);
  const { open, setOpen } = useContext(StateContex);
  const matches = useMediaQuery("(max-height:963px)");
  return (
    <Box sx={{ overflow: "hidden", bgcolor: "#121F28" }}>
      <Box
        sx={{
          backgroundImage: `url(${sydney})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        height={matches === true ? "50svh" : "68svh"}
        // height={'50vh'}
      >
        <Grid container columns={12}>
          <Grid
            item
            lg={9}
            md={9}
            sm={9}
            xs={9}
            textAlign={"left"}
            p={{ sm: 2.5, xs: 0 }}
            pt={{ sm: 2.5, xs: 2 }}
          >
            <img
              src="https://studyvillage.org/wp-content/uploads/2020/10/Logo-long-green-white_Artboard-6-15.png"
              alt=""
              width={300}
            />
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
        pb={4}
        sx={{ backgroundColor: "#121F28", borderTop: "1px solid yellow" }}
      >
        <Box
          textAlign={"center"}
          height={"30px"}
          width={"250px"}
          border={"1px solid yellow"}
          borderRadius={2.5}
          color={"yellow"}
          justifyContent={"center"}
          margin={"0 auto"}
          mt={2}
          pt={1}
        >
          <Typography fontStyle={"italic"}>WHAT DO YOU WANT TO DO?</Typography>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          width={"100%"}
          justifyContent={"space-evenly"}
          mt={4}
          // p={2}
        >
          <Box
            // width={"30%"}
            height={"220px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "350px", md: "300px", lg: "272px" },

              mb: 5,
              p: 0,
            }}
          >
            <Box width={"100%"} height={"220px"}>
              <img src={pic37} alt="s1" width={"100%"} height={"99%"} />
            </Box>
            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"50px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b> APPLY FOR A STUDENT</b>
            </Typography>
          </Box>
          <Box
            // width={"30%"}
            height={"220px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "350px", md: "300px", lg: "272px" },
              // height: { xs: "200px", sm: "200px", md: "220px", lg: "260px" },
              mb: 5,
              p: 0,
            }}
          >
            <Box width={"100%"} height={"220px"}>
              <img src={pic38} alt="s1" width={"100%"} height={"99%"} />
            </Box>
            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"50px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b> LAUNCH A CAMPAIGN </b>
            </Typography>
          </Box>
          <Box
            // width={"30%"}
            height={"220px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "350px", md: "300px", lg: "272px" },
              // height: { xs: "200px", sm: "200px", md: "220px", lg: "260px" },
              mb: 5,
              p: 0,
            }}
          >
            <Box width={"100%"} height={"220px"}>
              <img src={pic39} alt="s1" width={"100%"} height={"99%"} />
            </Box>
            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"50px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b> CHECK STUDENT(S) PROGRESS</b>
            </Typography>
          </Box>

          <Box
            // width={"30%"}
            height={"220px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "350px", md: "300px", lg: "272px" },
              // height: { xs: "200px", sm: "200px", md: "220px", lg: "260px" },
              mb: 5,
              p: 0,
            }}
          >
            <Box width={"100%"} height={"220px"}>
              <img src={pic40} alt="s1" width={"100%"} height={"99%"} />
            </Box>
            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"30px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b> ACCESS TRAINING & SALES RESOURCES</b>
            </Typography>
          </Box>
          {/* </Box> */}
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: "yellow", display: "flex", flexWrap: "wrap" }}
        pb={3}
      >
        <Box
          pt={3}
          display={"flex"}
          flexWrap={"wrap"}
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}
          textAlign={{ xs: "center", md: "left" }}
          justifyContent={{ xs: "center" }}
        >
          <Box
            borderRadius={"50%"}
            sx={{ outline: "1px solid black" }}
            width={"50px"}
            height={"45px"}
            pt={"5px"}
            // ml={10}
            textAlign={"center"}
          >
            <CallRoundedIcon
              color="black"
              fontSize="large"
              sx={{ margin: "0 auto" }}
            />
          </Box>
          <Typography
            textAlign={{ md: "left", xs: "center" }}
            ml={3}
            mt={1.8}
            fontSize={"large"}
          >
            <b>(+613) 703 603 47</b>
          </Typography>
        </Box>
        <Box
          textAlign={{ xs: "center", md: "center" }}
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}
        >
          <Link>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/very-thin-linear-icon/linkedin-103.png"
              alt=""
              height={35}
              width={35}
              style={{ marginLeft: 16, marginTop: 30 }}
            />
          </Link>
          <Link href="facebook.com">
            <FacebookRoundedIcon
              fontSize="large"
              sx={{ margin: "0 auto", mt: 3, color: "black", ml: 2 }}
            />
          </Link>
          <Link>
            <MailRoundedIcon
              fontSize="large"
              sx={{ mt: 3, color: "black", ml: 3 }}
            />
          </Link>
          <Link pt={2} height={40} width={45}>
            <img
              src="https://icon-library.com/images/web-link-icon/web-link-icon-16.jpg"
              alt=""
              height={40}
              width={45}
              style={{ marginLeft: 16, marginTop: 30 }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

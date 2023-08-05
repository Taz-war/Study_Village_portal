import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import WheelsEA from "../Learning-resource/learning-assets/WheelsEA.png";
import WheelsEB from "../Learning-resource/learning-assets/WheelsEB.png";
import WheelsEC from "../Learning-resource/learning-assets/WheelsEC.png";
import WheelsED from "../Learning-resource/learning-assets/WheelsED.png";
import WheelsEE from "../Learning-resource/learning-assets/WheelsEE.png";
import Wheels1 from "../Learning-resource/learning-assets/Wheels1.png";
import Wheels2 from "../Learning-resource/learning-assets/Wheels2.png";
import Wheels3 from "../Learning-resource/learning-assets/Wheels3.png";
import Wheels4 from "../Learning-resource/learning-assets/Wheels4.png";
import Wheels5 from "../Learning-resource/learning-assets/Wheels5.png";
import Wheels6 from "../Learning-resource/learning-assets/Wheels6.png";
import Wheels7 from "../Learning-resource/learning-assets/Wheels7.png";
import Wheels8 from "../Learning-resource/learning-assets/Wheels8.png";

const SvPrograms = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#121F28",
          pb: 12,
          color: "white",
          //   maxWidth: "1050px",
          width: "100%",
          p: "12px",
          pl: { lg: 6, xs: 1 },
          mt: 3,
          ml: 1,
        }}
      >
        <Grid container columns={16} columnSpacing={0}>
          <Grid item lg={3} md={3} sm={4} xs={8}>
            <Typography
              sx={{
                fontFamily: "Brush Script MT, Brush Script Std, cursive",
                color: "white",
                fontSize: { lg: "2.2vw", md: "2.5vw", sm: "3vw", xs: "5vw" },
                textAlign: "left",
                display: { md: "inline-block" },
              }}
            >
              Happy healthy & wise
            </Typography>
          </Grid>
          <Grid
            item
            lg={2}
            md={3}
            sm={4}
            xs={8}
            pl={0}
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Typography
              fontSize={{ lg: "1.1vw", md: "1.4vw", sm: "2vw" }}
              m={"0px"}
              alignSelf={"center"}
              pr={3}
            >
              {" "}
              <b> ENGLISH LANGUAGE</b>
            </Typography>
          </Grid>
          <Grid item lg={11} md={10} sm={8} xs={16} alignItems={"center"}>
            <Divider
              sx={{
                color: "blue",
                // margin: "0 auto",
                // width: "100%",
                marginTop: { lg: "26px", md: "16px", sm: "15px" },
                alignSelf: "center",
                // marginLeft: "33px",
                height: "0.5px",
                border: "none",
                borderBottom: "1px solid skyblue",
              }}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            backgroundColor: "#121F28",
            pb: 12,
            color: "white",
            maxWidth: "1350px",
            width: "100%",
            p: "12px",
            //   pl: { lg: 6, xs: 1 },
            mt: 3,
            mb: 6,
            //   ml:1
          }}
        >
          {/* 1 no */}
          <Grid
            container
            columns={15}
            columnSpacing={2}
            columnGap={2}
            pb={2}
            width={"100%"}
            borderBottom={"1px solid skyblue"}
          >
            <Grid item md={3} xs={5} mb={3}>
              <img src={WheelsEA} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  ELICOS program <span style={{ color: "yellow" }}>1</span>
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                As the name suggests ELICOS is all about supporting your success
                during your English language studies. Your StudyVillage ELICOS
                program consists of one 5 week block (ELICOS A) and often takes
                place before your for ‘Award’ studies. <br />
                <br /> Remember your program features both structured
                interactions – which your Student Supporter will setup, and an
                Open hours facility. If you want to know more detail, there’s
                short video guides to each key aspect of the StudyVillage
                program. Make sure you make the most of your time with us
              </Typography>
            </Grid>
            <Grid item mb={3} md={3} xs={5}>
              <img src={WheelsEB} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  ELICOS program <span style={{ color: "yellow" }}>2</span>
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                our StudyVillage ELICOS program consists of two 5 week blocks
                (ELICOS A and ELICOS B) and often takes place before your for
                ‘Award’ studies. <br />
                <br />
                Remember your program features both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. If you want to know more detail, there’s short video
                guides to each key aspect of the StudyVillage program. Make sure
                you make the most of your time with us!
              </Typography>
            </Grid>
          </Grid>

          {/* 2 no */}
          <Grid
            container
            columns={15}
            columnSpacing={2}
            columnGap={2}
            pb={2}
            width={"100%"}
            borderBottom={"1px solid skyblue"}
            mt={4}
          >
            <Grid item mb={3} md={3} xs={5}>
              <img src={WheelsEC} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  ELICOS program <span style={{ color: "yellow" }}>3</span>
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your StudyVillage ELICOS program consists of three 5 week blocks
                (ELICOS A, B and C) and often takes place before your for
                ‘Award’ studies. <br />
                <br />
                Remember your program features both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. If you want to know more detail, there’s short video
                guides to each key aspect of the StudyVillage program. Make sure
                you make the most of your time with us!
              </Typography>
            </Grid>
            <Grid item mb={3} md={3} xs={5}>
              <img src={WheelsED} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  ELICOS program <span style={{ color: "yellow" }}>4</span>
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your StudyVillage ELICOS program consists of four 5 week blocks
                (ELICOS A, B and C) and often takes place before your for
                ‘Award’ studies. <br />
                <br />
                Remember your program features both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. If you want to know more detail, there’s short video
                guides to each key aspect of the StudyVillage program. Make sure
                you make the most of your time with us!
              </Typography>
            </Grid>
          </Grid>

          {/* 3 no */}
          <Grid
            container
            columns={15}
            columnSpacing={2}
            columnGap={2}
            pb={2}
            width={"100%"}
            mt={4}
          >
            <Grid item mb={3} md={3} xs={5}>
              <img src={WheelsEE} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  ELICOS program <span style={{ color: "yellow" }}>5</span>
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your StudyVillage ELICOS program consists of six 5 week blocks
                (ELICOS A, B, C, D, E and F) – equalling 30 weeks in total and
                often takes place before your for ‘Award’ studies. Remember your
                program features both structured interactions – which your
                Student Supporter will setup, and an Open hours facility. <br />{" "}
                <br /> A key feature of your program is your early opportunity
                to set your goals and work towards them with the help of your
                student supporter. If you want to know more detail, there’s
                short video guides to each key aspect of the StudyVillage
                program. Make sure you make the most of your time with us!
              </Typography>
            </Grid>
            {/* <Grid item lg={3}>
              <img src={WheelsEB} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item lg={4} >
              <Typography variant="h6">
                <b>
                  ELICOS program <span style={{ color: "yellow" }}>2</span>
                </b>
              </Typography>
              <Typography fontSize={{lg:'small',md:'x-small',xs:'xx-small',sm:'x-small'}}>
                our StudyVillage ELICOS program consists of two 5 week blocks
                (ELICOS A and ELICOS B) and often takes place before your for
                ‘Award’ studies. <br />
                <br />
                Remember your program features both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. If you want to know more detail, there’s short video
                guides to each key aspect of the StudyVillage program. Make sure
                you make the most of your time with us!
              </Typography>
            </Grid> */}
          </Grid>
        </Box>

        <Grid container columns={16} columnSpacing={0}>
          <Grid item lg={3} md={3} sm={4} xs={8}>
            <Typography
              sx={{
                fontFamily: "Brush Script MT, Brush Script Std, cursive",
                color: "white",
                fontSize: { lg: "2.2vw", md: "2.5vw", sm: "3vw", xs: "5vw" },
                textAlign: "left",
                display: { md: "inline-block" },
              }}
            >
              Happy healthy & wise
            </Typography>
          </Grid>
          <Grid
            item
            lg={2}
            md={3}
            sm={4}
            xs={8}
            pl={0}
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Typography
              fontSize={{ lg: "0.86vw", md: "1.1vw", sm: "1.6vw" }}
              m={"0px"}
              alignSelf={"center"}
              pr={3}
            >
              {" "}
              <b> AWARD COURSE PROGRAM</b>
            </Typography>
          </Grid>
          <Grid item lg={11} md={10} sm={8} xs={16} alignItems={"center"}>
            <Divider
              sx={{
                color: "blue",
                // margin: "0 auto",
                // width: "100%",
                marginTop: { lg: "26px", md: "16px", sm: "15px" },
                alignSelf: "center",
                // marginLeft: "33px",
                height: "0.5px",
                border: "none",
                borderBottom: "1px solid skyblue",
              }}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            backgroundColor: "#121F28",
            pb: 12,
            color: "white",
            maxWidth: "1350px",
            width: "100%",
            p: "12px",
            //   pl: { lg: 6, xs: 1 },
            mt: 3,
            mb: 6,
            //   ml:1
          }}
        >
          {/* 1 no */}
          <Grid
            container
            columns={15}
            columnSpacing={2}
            columnGap={2}
            pb={2}
            width={"100%"}
            borderBottom={"1px solid skyblue"}
          >
            <Grid item md={3} xs={5} mb={3}>
              <img src={Wheels1} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  <span style={{ color: "yellow" }}>1</span> Semester Award
                  Program
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your one semester program consists of just one module but it
                packs a lot of punch. Goalsetting B designed to ensure you’re
                settled in, tracking well in your studies and ready to take on
                what comes next post-study. There’s a detailed description of
                what this unique module entails below, and of course short video
                explainers in the resources section. <br />
                <br />
                As the name suggests, your module is about setting goals and
                working toward your desired outcomes – by importantly with your
                student supporter who is there to support you all the way!
                Remember it consists of both structured interactions – which
                your student supporter will setup, and an Open hours facility.
                Make sure you make the most of your time with us!
              </Typography>
            </Grid>
            <Grid item mb={3} md={3} xs={5}>
              <img src={Wheels2} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  <span style={{ color: "yellow" }}>2</span> Semester Award
                  Program
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your two-semester program consists of just two modules but it
                packs a lot of punch. The program is designed to ensure you’re
                settled in, tracking well in your studies and ready to take on
                what comes next post-study. There’s a detailed description of
                what these unique modules entail below, and of course short
                video explainers in the resources section. <br />
                <br />
                As the name suggests, Goalsetting B is about setting goals and
                working toward your desired outcomes – by importantly with your
                study. If you want to know more detail, there’s short video
                guides to each key aspect of the StudyVillage program. Make sure
                you make the most of your time with us!
              </Typography>
            </Grid>
          </Grid>

          {/* 2 no */}
          <Grid
            container
            columns={15}
            columnSpacing={2}
            columnGap={2}
            pb={2}
            width={"100%"}
            borderBottom={"1px solid skyblue"}
            mt={4}
          >
            <Grid item mb={3} md={3} xs={5}>
              <img src={Wheels3} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  <span style={{ color: "yellow" }}>3</span> Semester Award
                  Program
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your three-semester program consists of three modules and packs
                a lot of punch. The program is designed to ensure you’re settled
                in, tracking well in your studies and ready to take on what
                comes next post-study. There’s a detailed description of what
                this unique program entails below, and of course short video
                explainers in the resources section. <br />
                <br />
                As the name suggests, key module Goalsetting is about setting
                goals and working toward your desired outcomes – by importantly
                with your student supporter who is there to support you all the
                way! Remember it consists of both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. Make sure you make the most of your time with us!
              </Typography>
            </Grid>
            <Grid item mb={3} md={3} xs={5}>
              <img src={Wheels4} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  <span style={{ color: "yellow" }}>4</span> Semester Award
                  Program
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your four-semester program consists of four modules and packs a
                lot of punch. The program is designed to ensure you’re settled
                in, tracking well in your studies and ready to take on what
                comes next post-study. There’s a detailed description of what
                this unique module entails below, and of course short video
                explainers in the resources section. <br />
                <br />
                As the name suggests, key module Goalsetting is about setting
                goals and working toward your desired outcomes – by importantly
                with your student supporter who is there to support you all the
                way! Remember it consists of both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. Make sure you make the most of your time with us!
              </Typography>
            </Grid>
          </Grid>

          {/* 3 no */}
          <Grid
            container
            columns={15}
            columnSpacing={2}
            columnGap={2}
            pb={2}
            borderBottom={'1px solid skyblue'}
            width={"100%"}
            mt={4}
          >
            <Grid item mb={3} md={3} xs={5}>
              <img src={Wheels5} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  <span style={{ color: "yellow" }}>5</span> Semester Award
                  Program
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your five-semester program consists of five modules and packs a
                lot of punch. The program is designed to ensure you’re settled
                in, tracking well in your studies and ready to take on what
                comes next post-study. There’s a detailed description of what
                this unique program entails below, and of course short video
                explainers in the resources section. <br />
                <br />
                As the name suggests, key module Goalsetting is about setting
                goals and working toward your desired outcomes – but importantly
                with your student supporter who is there to support you all the
                way! Remember it consists of both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. Make sure you make the most of your time with us!
              </Typography>
            </Grid>
            <Grid item mb={3} md={3} xs={5}>
              <img src={Wheels6} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  <span style={{ color: "yellow" }}>6</span> Semester Award
                  Program
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your six-semester program consists of six modules and packs a
                lot of punch. The program is designed to ensure you’re settled
                in, tracking well in your studies and ready to take on what
                comes next post-study. There’s a detailed description of what
                this unique program entails below, and of course short video
                explainers in the resources section. <br />
                <br />
                As the name suggests, key module Goalsetting is about setting
                goals and working toward your desired outcomes – by importantly
                with your student supporter who is there to support you all the
                way! Remember it consists of both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. Make sure you make the most of your time with us!
              </Typography>
            </Grid>
          </Grid>

          {/* 4 no */}
          <Grid
            container
            columns={15}
            columnSpacing={2}
            columnGap={2}
            pb={2}
            width={"100%"}
            borderBottom={"1px solid skyblue"}
            mt={4}
          >
            <Grid item mb={3} md={3} xs={5}>
              <img src={Wheels7} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  <span style={{ color: "yellow" }}>7</span> Semester Award
                  Program
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your seven-semester program consists of seven modules and packs
                a lot of punch. The program is designed to ensure you’re settled
                in, tracking well in your studies and ready to take on what
                comes next post-study. There’s a detailed description of what
                this unique program entails below, and of course short video
                explainers in the resources section. <br />
                <br />
                As the name suggests, key module Goalsetting is about setting
                goals and working toward your desired outcomes – by importantly
                with your student supporter who is there to support you all the
                way! Remember it consists of both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. Make sure you make the most of your time with us!
              </Typography>
            </Grid>
            <Grid item mb={3} md={3} xs={5}>
              <img src={Wheels8} alt="" width={"100%"} height={"auto"} />
            </Grid>
            <Grid item mb={3} md={4} xs={7}>
              <Typography variant="h6">
                <b>
                  <span style={{ color: "yellow" }}>8</span> Semester Award
                  Program
                </b>
              </Typography>
              <Typography
                fontSize={{
                  lg: "small",
                  md: "x-small",
                  xs: "xx-small",
                  sm: "x-small",
                }}
              >
                Your eight-semester program consists of eight modules and packs
                a lot of punch. The program is designed to ensure you’re settled
                in, tracking well in your studies and ready to take on what
                comes next post-study. There’s a detailed description of what
                this unique program entails below, and of course short video
                explainers in the resources section. <br />
                <br />
                As the name suggests, key module Goalsetting is about setting
                goals and working toward your desired outcomes – by importantly
                with your student supporter who is there to support you all the
                way! Remember it consists of both structured interactions –
                which your Student Supporter will setup, and an Open hours
                facility. Make sure you make the most of your time with us!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SvPrograms;

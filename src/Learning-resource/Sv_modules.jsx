import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import eapc from "../Learning-resource/learning-assets/eapc.PNG";
import eatab from "../Learning-resource/learning-assets/eatab.PNG";
import ebpc from "../Learning-resource/learning-assets/ebpc.PNG";
import ebtab from "../Learning-resource/learning-assets/ebtab.PNG";
import settling from "../Learning-resource/learning-assets/settling.PNG";
import Settlingtab from "../Learning-resource/learning-assets/Settlingtab.PNG";
import CSpc from "../Learning-resource/learning-assets/CSpc.PNG";
import cstab from "../Learning-resource/learning-assets/cstab.PNG";
import tppc from "../Learning-resource/learning-assets/tppc.PNG";
import tptab from "../Learning-resource/learning-assets/tptab.PNG";
import gspc from "../Learning-resource/learning-assets/gspc.PNG";
import gstab from "../Learning-resource/learning-assets/gstab.PNG";
import accelapc from "../Learning-resource/learning-assets/accelapc.PNG";
import accelatab from "../Learning-resource/learning-assets/accelatab.PNG";
import accelbpc from "../Learning-resource/learning-assets/accelbpc.PNG";
import accelbtab from "../Learning-resource/learning-assets/accelbtab.PNG";
// import accelbpc from "../Learning-resource/learning-assets/accelbpc.PNG";
import gttab from "../Learning-resource/learning-assets/gttab.PNG";
import transpc from "../Learning-resource/learning-assets/transpc.PNG";
import transtab from "../Learning-resource/learning-assets/transtab.PNG";
const Sv_modules = () => {
  return (
    <>
    {/* <Box
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
      > */}
        <Grid container columns={16} columnSpacing={0} ml={1} pl={{lg:6,xs:1}}>
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
          
          <Grid item lg={13} md={13} sm={12} xs={16} alignItems={"center"}>
            <Divider
              sx={{
                color: "blue",
                // margin: "0 auto",
                // width: "100%",
                marginTop: { lg: "3.2vh", md: "2.8vh", sm: "2vh" },
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
        ml: { md: 6, sm: 3, xs: 0 },
        mt: 3,
        maxWidth: "1321px",
        width: "100%",
        p:1,
        pr:2
      }}
    >
      {/* <Box display={"flex"}> */}
        {/* <Grid container columns={12} columnSpacing={2}>
          <Grid item lg={2} md={3} sm={3} xs={12}>
          <Typography
          sx={{
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            color: "white",
            fontSize: {lg:"1.7vw",md:'2.8vw',sm:'3vw',xs:'5vw'},
            textAlign: "left",
            display:{md: "inline-block"},
          }}
        >
          Happy healthy & wise
        </Typography>
          </Grid>
          <Grid item lg={10} md={9} sm={9} xs={12}>
          <Divider
              sx={{
                color: "blue",
                // margin: "0 auto",
                // width: "100%",
                marginTop: { lg: "22px", md: "25px", sm: "18px" },
                alignSelf: "center",
                // marginLeft: "33px",
                height: "0.5px",
                border: "none",
                borderBottom: "1px solid skyblue",
              }}
            />
          </Grid>
        </Grid> */}
        
        
      {/* </Box> */}
      {/* 1 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        borderBottom={"1px solid skyblue"}
        pb={2}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} >
          <Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>ELICOS A </b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={"auto"}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}} sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6}  mb={2} pr={1}>
          <img src={eapc} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}}/>
        </Grid>
        <Grid item md={1} xs={3} >
          <img src={eatab} alt="" width={"94%"} height={'auto'}/>
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            For most StudyVillage students, this is the first diploma or degree
            course module. It tracks progress in the all-important transition
            into the university phase. And it often involves the very first
            meeting with your mentor; a friend, muse, and all-round useful
            buddy. The Settling In module is about: Finding your feet; Adjusting
            to your new environment; Establishing your study habits; Getting
            connected and; Preparing for success.
          </Typography>
        </Grid>
      </Grid>
      {/* 2 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        borderBottom={"1px solid skyblue"}
        pb={2}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} mb={2}>
<Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>ELICOS B</b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={'auto'}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}}  sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <img src={ebpc} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}} />
        </Grid>
        <Grid item md={1} xs={3}>
          <img src={ebtab} alt="" width={"94%"} height={'auto'} />
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            For most StudyVillage students, this is the first diploma or degree
            course module. It tracks progress in the all-important transition
            into the university phase. And it often involves the very first
            meeting with your mentor; a friend, muse, and all-round useful
            buddy. The Settling In module is about: Finding your feet; Adjusting
            to your new environment; Establishing your study habits; Getting
            connected and; Preparing for success.
          </Typography>
        </Grid>
      </Grid>

      {/* 3 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        borderBottom={"1px solid skyblue"}
        pb={2}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} mb={2} pr={1}>
      <Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>Settling In </b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={'auto'}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}}  sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <img src={settling} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}} />
        </Grid>
        <Grid item md={1} xs={3}>
          <img src={Settlingtab} alt="" width={"94%"} height={'auto'} />
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            For most StudyVillage students, this is the first diploma or degree
            course module. It tracks progress in the all-important transition
            into the university phase. And it often involves the very first
            meeting with your mentor; a friend, muse, and all-round useful
            buddy. The Settling In module is about: Finding your feet; Adjusting
            to your new environment; Establishing your study habits; Getting
            connected and; Preparing for success.
          </Typography>
        </Grid>
      </Grid>
      {/* 4 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        borderBottom={"1px solid skyblue"}
        pb={2}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>Consolidating Studies </b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={'auto'}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}}  sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <img src={CSpc} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}} />
        </Grid>
        <Grid item md={1} xs={3}>
          <img src={cstab} alt="" width={"94%"} height={'auto'} />
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            Now established in student life, the Consolidating Studies module
            introduces broader elements of happiness and wellbeing, setting the
            pre-conditions for balance, stability and success. With a focus on
            study habits and performance, this sections also checks parameters
            on part time work. Trends and scope for study improvement emerge in
            this phase.
          </Typography>
        </Grid>
      </Grid>

      {/* 5 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        borderBottom={"1px solid skyblue"}
        pb={2}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} mb={2} pr={1}>
        <Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>Tracking Progress </b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={'auto'}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}}  sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <img src={tppc} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}} />
        </Grid>
        <Grid item md={1} xs={3}>
          <img src={tptab} alt="" width={"94%"} height={'auto'} />
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            s the name suggests, Tracking Progress is about how you’re going so
            far in your new life abroad. It’s about identifying trends,
            focussing on areas for improvement and celebrating achievements. But
            it’s also about setting up the middle and end stages of your
            studies. The Tracking Progress module is about setting the
            foundation for the all-important second and third years of study;
            closing the gaps between ambition and reality; taking opportunities;
            Honestly addressing challenges
          </Typography>
        </Grid>
      </Grid>

      {/* 6 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        borderBottom={"1px solid skyblue"}
        pb={2}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} mb={2} pr={1}>
        <Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>Goal Setting </b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={'auto'}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}}  sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <img src={gspc} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}} />
        </Grid>
        <Grid item md={1} xs={3}>
          <img src={gstab} alt="" width={"94%"} height={'auto'} />
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            t’s time to re-focus on broader ambitions and what it will take to
            get there. In this module we help you focus by setting some specific
            goals in important areas of life. We also start to think about what
            direction you would like to take after you finish your studies. The
            Goal Setting module is about: Building on the foundation you’ve
            already set; Continuing to practice positive habits and lifestyle
            choices; Thinking about your post-study future; Setting core goals
            to carry you through to the end of your studies.
          </Typography>
        </Grid>
      </Grid>

      {/* 7 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        borderBottom={"1px solid skyblue"}
        pb={2}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>Accelerator A </b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={'auto'}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}}  sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <img src={accelapc} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}} />
        </Grid>
        <Grid item md={1} xs={3}>
          <img src={accelatab} alt="" width={"94%"} height={'auto'} />
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'x-small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            Accelerator A is only available to students taking a four-year
            degree program. This module checks in on progress made against the
            goals and aspirations developed in the Goalsetting outline – and
            again asks you to consider what you plan to do post study. The
            Accelerator A module is about: <br />
            1. Staying motivated and maintaining good habits;
            <br />
            2. Using your goals to drive you on;
            <br />
            3. Breaking ambitious goals down into simple steps;
            <br />
            4. Thinking toward your post-study future.
          </Typography>
        </Grid>
      </Grid>

      {/* 8 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        borderBottom={"1px solid skyblue"}
        pb={2}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>Accelerator B</b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={'auto'}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}}  sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <img src={accelbpc} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}} />
        </Grid>
        <Grid item md={1} xs={3}>
          <img src={accelbtab} alt="" width={"94%"} height={'auto'} />
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'x-small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            his module offers you a chance to refresh and choose a new set of
            goals to carry you through to degree completion. Having experienced
            one round of goalsetting and tracking, you’re well placed to refine
            your own process, the way you work with your student supporter, and
            sharpen your ambitions. It’s time to setup for a big final year of
            study. The Accelerator B module is about: <br />
            1. A chance to refresh; <br />
            2.New goals to carry you through to the end of your studies; <br />
            3.Continuing to practice those positive habits and life-style
            choices;
            <br />
          </Typography>
        </Grid>
      </Grid>

      {/* 9 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        borderBottom={"1px solid skyblue"}
        pb={2}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>Goal Tracking</b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={'auto'}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}}  sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <img src={eapc} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}} />
        </Grid>
        <Grid item md={1} xs={3}>
          <img src={gttab} alt="" width={"94%"} height={'auto'} />
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            Like its name suggests, Goaltracking is about tracking the specific
            goals you’ve set yourself as we plan for a post-study future. You’re
            now embarking on your penultimate semester of study. The other key
            aspects of GoalTracking is exploring actions around post-study
            intentions. The Goal Tracking module is about: Reviewing set goals;
            Following through; Being accountable for what you’ve set yourself;
            Nominating actions to make your post-study transition a success.
          </Typography>
        </Grid>
      </Grid>

      {/* 10 */}
      <Grid
        container
        columns={12}
        columnSpacing={2}
        pb={7}
        pr={1}
        mt={2}
      >
        <Grid item md={2} xs={6} mb={2} pr={1}>
    <Typography variant="h5" sx={{ color: "white", marginTop: 0,mb:2 }}> <b>Transition</b></Typography>
          <Box width={"100%"} display={"flex"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={'auto'}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}}  sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={6} mb={2} pr={1}>
          <img src={transpc} alt="" width={"100%"} height={'auto'} style={{maxHeight:'170px',maxWidth:'330px'}} />
        </Grid>
        <Grid item md={1} xs={3}>
          <img src={gttab} alt="" width={"94%"} height={'auto'} />
        </Grid>
        <Grid item md={6} sm={8} xs={9}>
          <Typography
            fontSize={{lg:"small",md:'x-small',sm:'small',xs:'small'}}
            sx={{ wordSpacing: "1px" }}
            color={"white"}
          >
            Transition helps you through your final semester of study. The
            module is a timely opportunity to consolidate and assess your plans
            as you move into post-study life. Whether you’re planning to return
            home or stay in the destination country, ‘Transition’ requires you
            to think critically about how you’re now positioned.
          </Typography>
        </Grid>
      </Grid>
    </Box>
    {/* </Box> */}
    </>
  );
};

export default Sv_modules;

import { Box,Container, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import pic41 from '../assets/Screenshot_41.png'
import wevemissedyou from '../assets/wevemissedyou.PNG'

const DestinationPrep = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121F28",
        pb:12,
        color: "white",
        maxWidth:'1050px',
        width:'100%',
        p:'12px',
        pl:{lg:6,xs:1},mt:3
      }}
    >
      
        <Grid container columns={12} columnSpacing={1} rowSpacing={1} p={1} pr={{xs:3,md:3,sm:3}}>
        {/* <Grid item lg={6} md={6} sm={12} xs={12} maxWidth={"521px"} width={'100%'}>
            <Box
              // width={{lg:"90%",md:'90%',xs:'98%'}}
              sx={{
                border: "1px solid white",
                width:'cover',
                p: 1,
                pl: 2,
                display: "flex",
                height: {lg:"55px",md:'72px',sm:'65px',xs:'70px'},
                cursor: "pointer",
                "&:hover": {
                  border: "1px solid skyblue",
                  "& .addHover": {
                    color: "skyblue",
                  },
                  "& .addIconHover": {
                    border: "1px solid skyblue",
                  },
                },
              }}
            >
              <ArrowForwardIosRoundedIcon
                className="addHover addIconHover"
                sx={{
                  border: "1px solid white",
                  borderRadius: "50%",
                  color: "white",
                  height: "80%",
                  width: "40px",
                  
                }}
              />
              <Link
                href="#"
                className="addHover"
                sx={{
                  color: "white",
                  ml: 2,
                  
                }}
              >
                <b>StudyVillage Campaign Resources</b>
                <br />
                Assisting you convert students to SV students
              </Link>
            </Box>
          </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} maxWidth={"521px"} width={'100%'}>
            <Box
            //  width={{lg:"90%",md:'90%',xs:'98%'}}
              sx={{
                border: "1px solid white",
                p: 1,
                pl: 2,
                display: "flex",
                height: {lg:"55px",md:'72px',sm:'65px',xs:'70px'},
                "&:hover": {
                  border: "1px solid skyblue",
                  "& .addHover": {
                    color: "skyblue",
                  },
                  "& .addIconHover": {
                    border: "1px solid skyblue",
                  },
                },
              }}
            >
              <ArrowForwardIosRoundedIcon
              className="addHover addIconHover"
                sx={{
                  border: "1px solid white",
                  borderRadius: "50%",
                  color: "white",
                  height: "80%",
                  width: "40px",
                 
                }}
              />
              <Link
              className="addHover"
                href="#"
                sx={{
                  color: "white",
                  ml: 2,
                 
                }}
              >
                <b>Let us do the work for you</b>
                <br />
                Enter individual or bulk lead StudyVillage will Convert
              </Link>
            </Box>
          </Grid> */}


          <Grid item lg={6} md={6} sm={12} xs={12} p={{sm:2,xs:0}} maxWidth={"529px"} width={'100%'} textAlign={'center'}>
            <Typography fontSize={"medium"} textAlign={'justify'}>
              Developed by teachers, academics and expert instructional
              designers, DestinationPREP is a free resource providing students
              an interactive insight into key study destinations. It's
              purpose-built for students thinking about Canada, the UK and
              Australia for higher education, whether that's pre-degree,
              undergraduate or postgraduate study. A self-contained
              pre-departure program, it's an ideal leadup to study, and a way
              for your agency to demonstrate real value for your prospective
              students. <br />
              <br /> Depending on your pace, level of understanding and
              enthusiasm for exploring further resources, this course will take
              you between 30 minutes to 2 hours to complete
            </Typography><br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                border: "1px solid white",
                height: {lg:40,md:40,sm:45,xs:46},
                backgroundColor: "#FF66C4",
                color: "white",
                width:'80%',
                
              }}
            >
             <b> RUN YOUR OWN DESTINATION PREP CAMPAIGN</b>
            </Button>
            <br /><br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                border: "1px solid white",
                height: {lg:40,md:40,sm:45,xs:46},
                backgroundColor: "#FF914D",
                color: "white",
                
                width:'80%',
                
              }}
            >
             <b> TRY DESTINATIONPREP FOR YOURSELF</b>
            </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}  maxWidth={"529px"} width={'100%'} textAlign={'center'} justifyContent={'space-around'}>
              <Box p={1} pr={{md:1,xs:2}} width={{xs:'70%'}} mt={2} margin={'0px auto'} justifyContent={'space-around'} >
                <img src={wevemissedyou} alt="" width={'100%'}/>
              </Box>
          </Grid>
        </Grid>
      
    </Box>
  );
};

export default DestinationPrep;

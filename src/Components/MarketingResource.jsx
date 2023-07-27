import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import pic31 from "../assets/Screenshot_31.png";
import pic38 from "../assets/Screenshot_38.png";
import pic35 from "../assets/Screenshot_35.png";
import pic36 from "../assets/Screenshot_36.png";
import pic25 from "../assets/Screenshot_25.png";
import pic30 from "../assets/Screenshot_30.png";
import { YouTube } from "@mui/icons-material";
import ImportantDevicesRoundedIcon from "@mui/icons-material/ImportantDevicesRounded";
import httpagentpage from '../assets/httpagentpage.PNG'
import counselsessionicon from '../assets/counselsessionicon.PNG'
const MarketingResource = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121F28",
        pb: 10,
        color: "white",
      }}
    >
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
          </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} maxWidth={"521px"} width={'100%'}>
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

          <Grid item lg={12} p={2} textAlign={'justify'} pr={{md:2,sm:1,xs:0}}>
            <Typography fontSize={"medium"} >
              Here's some amazing partner resources that are yours to use. The
              order below suggest a typical StudyVillage campaign lifecycle,
              though you're free to use as you wish. We're always adding to this
              list, and call your StudyVillage Rep if you have further campaign
              ideas or media requirements. Of course, we're happy to do the
              promo for you - just email us students leads, individually or in
              bulk and we'll roll out a campaign on your behalf. (Use the submit
              student leads link above).
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{  ml: {md:6,sm:3,xs:0.5}, mt: 3,maxWidth:'1321px',width: "100%" }}>
        <Grid container columns={12} borderBottom={"1px solid yellow"} pb={2} pr={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                1
              </Typography>
              <h4>
                <span style={{ fontSize: "25px" }}> Easy SV Promo</span> <br />{" "}
                <i>
                  {" "}
                  20 Page Student and Parent Brochure <br /> including FAQs
                </i>
              </h4>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%",mt: {sm:4,xs:1}}}>
                <img
                  src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box sx={{ width: "35%", mt: {sm:4,xs:1} ,ml:{sm:1,xs:2} }}>
                <Link href="#" sx={{ color: "yellow" }}>
                  Download the StudyVillage <br /> Brochure for Students and
                  Parents
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: {md:11,sm:5,xs:3} }}>
                <img src={pic31} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container columns={12} borderBottom={"1px solid yellow"} mt={4} pb={2} pr={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                2
              </Typography>
              <h4>
                <span style={{ fontSize: "25px" }}>Parent Promo email</span>{" "}
                <br />{" "}
                <i>
                  {" "}
                  Letter to Email to parents introducing <br /> SV including
                  complimentary DestinationPrep
                </i>
              </h4>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: {sm:4,xs:1} }}>
                <img
                  src="https://icon-library.com/images/doc-icon-png/doc-icon-png-4.jpg"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box sx={{ width: "35%", mt: {sm:4,xs:1} ,ml:{sm:1,xs:2} }}>
                <Link href="#" sx={{ color: "yellow" }}>
                  Download the StudyVillage <br /> Parents promo email
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: {md:11,sm:5,xs:3} }}>
                <img src={pic38} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container columns={12} borderBottom={"1px solid yellow"} mt={4} pb={2} pr={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box m={0} p={0} display={"flex"} >
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                3
              </Typography>
              <h4>
                <span style={{ fontSize: "25px" }}>Student Promo email</span>{" "}
                <br />{" "}
                <i>
                  {" "}
                  Letter to Email to parents introducing <br /> SV including
                  complimentary DestinationPrep
                </i>
              </h4>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%",  mt: {sm:4,xs:1} }}>
                <img
                  src="https://icon-library.com/images/doc-icon-png/doc-icon-png-4.jpg"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box sx={{ width: "35%",  mt: {sm:4,xs:1} ,ml:{sm:1,xs:2} }}>
                <Link href="#" sx={{ color: "yellow" }}>
                  Download the StudyVillage <br /> Parents promo email
                </Link>
              </Box>
              <Box sx={{ width: "55%",ml: {md:11,sm:5,xs:3}}}>
                <img src={pic38} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container columns={12} borderBottom={"1px solid yellow"} mt={4} pb={2} pr={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                4
              </Typography>
              <h4>
                <span style={{ fontSize: "25px" }}>Explainers Video</span>{" "}
                <br />{" "}
                <i>
                  {" "}
                  5 minute video outlining the <br /> Happy, Healthy and Wise
                  Program
                </i>
              </h4>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: {sm:4,xs:1} }}>
                <YouTube
                  fontSize="large"
                  sx={{
                    color: "yellow",
                    border: "1px solid yellow",
                    borderRadius: "50%",
                    p: 1,
                  }}
                />
              </Box>
              <Box sx={{ width: "35%", mt: {sm:4,xs:1} ,ml:{sm:1,xs:2}}}>
                <Link href="#" sx={{ color: "yellow" }}>
                  Download the StudyVillage <br /> Explainer Video
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: {md:11,sm:5,xs:3} }}>
                <img src={pic25} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container columns={12} borderBottom={"1px solid yellow"} mt={4} pb={2} pr={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                5
              </Typography>
              <h4>
                <span style={{ fontSize: "25px" }}>Parent's FAQs</span> <br />{" "}
                <i>
                  {" "}
                  Document outlining <br /> Frequently Asked Questions
                </i>
              </h4>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: {sm:4,xs:1}  }}>
                <img
                  src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box sx={{ width: "35%", mt: {sm:4,xs:1} ,ml:{sm:1,xs:2} }}>
                <Link href="#" sx={{ color: "yellow" }}>
                  Download the file addressing <br /> FAQs for students and
                  parents
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: {md:11,sm:5,xs:3}}}>
                <img src={pic31} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container columns={12} borderBottom={"1px solid yellow"} mt={4} pb={2} pr={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                6
              </Typography>
              <h4>
                <span style={{ fontSize: "25px" }}>Book an info session</span>{" "}
                <br />{" "}
                <i>
                  {" "}
                  For a limited time, all students are eligible <br /> for a
                  one-on-one counselling session
                </i>
              </h4>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: {sm:4,xs:1} }}>
                {/* <ImportantDevicesRoundedIcon
                  fontSize="large"
                  sx={{
                    color: "yellow",
                    border: "1px solid yellow",
                    borderRadius: "50%",
                    p: 1,
                  }}
                /> */}
                
                <img
                  src={counselsessionicon}
                  alt=""
                  height={45}
                  width={40}
                  style={{ textDecorationColor: "yellow" }}
                />
             
              </Box>
              <Box sx={{ width: "35%", mt: {sm:4,xs:1} ,ml:{sm:1,xs:2}}}>
                <Link href="#" sx={{ color: "yellow" }}>
                  Book an individual counselling session <br />
                  with a StudyVillage team-member
                </Link>
              </Box>
              <Box sx={{ width: "55%",ml: {md:11,sm:5,xs:3} }}>
                <img src={pic30} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container columns={12} borderBottom={"1px solid yellow"} mt={4} pb={2} pr={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                7
              </Typography>
              <h4>
                <span style={{ fontSize: "25px" }}>The Why File</span> <br />{" "}
                <i>
                  {" "}
                  Why StudyVillage exists for
                  <br /> unfamiliar parents
                </i>
              </h4>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: {sm:4,xs:1}  }}>
                <img
                  src={httpagentpage}
                  alt=""
                  height={40}
                  width={50}
                  style={{ textDecorationColor: "yellow" }}
                />
              </Box>
              <Box sx={{ width: "35%", mt: {sm:4,xs:1} ,ml:{sm:1,xs:2} }}>
                <Link href="#" sx={{ color: "yellow" }}>
                  Read the 'Why File' explaining how <br />
                  ndividual student support makes all the differnce
                </Link>
              </Box>
              <Box sx={{ width: "55%",ml: {md:11,sm:5,xs:3} }}>
                <img src={pic35} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container columns={12} mt={4}  pr={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                8
              </Typography>
              <h4>
                <span style={{ fontSize: "25px" }}>Resolve Magazine</span>{" "}
                <br />{" "}
                <i>
                  {" "}
                  A Magazine talking about the life of an
                  <br /> international student to send on - can be Co-branded
                  with your agency
                </i>
              </h4>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={0}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%",mt: {sm:4,xs:1}  }}>
                <img
                  src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box sx={{ width: "35%",mt: {sm:4,xs:1} ,ml:{sm:1,xs:2} }}>
                <Link href="#" sx={{ color: "yellow" }}>
                  Download latest Resolve Magazine <br /> for students parents
                </Link>
              </Box>
              <Box sx={{ width: "55%",ml: {md:11,sm:5,xs:3} }}>
                <img src={pic36} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MarketingResource;

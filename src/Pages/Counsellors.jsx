import {
    Box,
    Button,
    Grid,
    IconButton,
    Table,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    tableCellClasses,
  } from "@mui/material";
  import React from "react";
  import MenuIcon from "@mui/icons-material/Menu";
  import "./EveryPage.css";
  import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MainMenu from "../Components/MainMenu";
import { StateContex } from "../Context/StateProvider";
import { useContext } from "react";
  const datas = [
    { api_name: "First name", field: "Katy" },
    { api_name: "Last name", field: "Holmes" },
    { api_name: "email address", field: "katy@dreamagent.com" },
    { api_name: "Mobile/Cell number (optional)", field: "+92 4567 8943" },
    { api_name: "Telephone", field: "+92 123 45556" },
    { api_name: "Portal access", field: "Granted" },
    { api_name: "StudyVillage training status", field: "Complete" },
  ];
  
  const keys = Object.keys(datas);
  const Counsellors = () => {
    const {open,setOpen}=useContext(StateContex)
    return (
      <Box
        style={{
          backgroundColor: "#121F28",
          height: "100vh",
  
          overflowY: "hidden",
        }}
      >
        <Box sx={{ p: { xs: 1, sm: 8, md: 12, lg: 12 } }}>
          <Box style={{ display: "flex", paddingBottom: "30px" }}>
            <Box sx={{ width: { xs: "75%", sm: "93%", md: "93%", lg: "93%" } }}>
              <img
                src={
                  "https://studyvillage.org/wp-content/uploads/2020/10/Logo-long-green-white_Artboard-6-15.png"
                }
                alt="pic"
                style={{ width: "280px", height: "70px", paddingTop: "20px" }}
              />
            </Box>
            <Box sx={{ width: { xs: "25%", sm: "7%", md: "7%", lg: "7%" } }}>
            <IconButton onClick={() => setOpen(true)} sx={{alignSelf:'flex-end'}} disableRipple>
              <MenuIcon
                size="large"
                sx={{
                  color: "yellow",
                  height: "100px",
                  width: { xs: "55px", sm: "70px", md: "100px" },
                }}
              />
              </IconButton>
              <MainMenu open={open} setOpen={setOpen} />
            </Box>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Box sx={{ width: "60%", xs: { width: "20%" } }}>
                <h2>
                  <i style={{ color: "white" }}>Your Counsellors</i>
                </h2>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Box
                sx={{
                  width: "95%",
                  paddingRight: "5px",
                  height: "40px",
                  border: "1px solid #2FAFD4",
                  paddingTop: "2px",
                  borderRadius: "10px",
                  display: "flex",
                }}
              >
                <SearchIcon
                  sx={{
                    color: "#2FAFD4",
                    width: "40px",
                    height: "40px",
                    paddingLeft: "8px",
                  }}
                />
                <b
                  style={{
                    color: "#2FAFD4",
                    paddingTop: "5px",
                    fontSize: "15px",
                  }}
                >
                  SEARCH
                </b>
                <input
                  style={{
                    backgroundColor: "white",
                    maxHeight: "60%",
                    width: "74%",
  
                    marginTop: "6px",
                    border: "0px solid white",
                    marginLeft: "6px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <hr style={{ border: "1px solid #C5D512", marginBottom: "30px" }} />
          <Box style={{ maxWidth: "60%" }}>
            <p style={{ color: "#C5D512", fontSize: "15px" }}>
              Use this page to grant your education counsellors access to your
              Company’s StudyVillage portal. To grant access to your staff
              members, tick the ‘portal access’ box and a notification with a
              temporary password will be sent. Please encourage any new
              counsellors to access our free counsellor training available from
              the Resources page.
            </p>
          </Box>
          <TableContainer sx={{ maxWidth: "850px", paddingBottom: "40px" }}>
            <Table
              sx={{
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: "none",
                },
                borderCollapse: "separate",
                borderSpacing: "0px 10px",
              }}
            >
              {datas.map((data, index) => {
                return (
                  <TableRow
                    className="cellColor"
                    style={{
                      // backgroundColor: "#2FAFD4",
                      overflow: "hidden",
                      height: "10px",
                      whiteSpace: "nowrap ",
                    }}
                  >
                    <TableCell
                      key={data.id}
                      align={data.align}
                      style={{
                        borderCollapse: "separate",
                        borderSpacing: "10px",
                        top: 57,
                        minWidth: data.minWidth,
                        padding: "12px 12px 12px 12px",
                        display: "flex",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <b>{data.api_name}</b>
                        </Grid>
                        <Grid item xs={4} sx={{ color: "#2E4E64" }}>
                          {data.field}
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
            </Table>
          </TableContainer>
          <Box style={{ paddingBottom: "22px" }}>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#121F28",
                border: "1px solid #2FAFD4",
                fontWeight: "bold",
                borderRadius: "15px",
                fontStyle: "italic",
                paddingLeft: "50px",
                paddingRight: "50px",
                marginRight: "20px",
              }}
            >
              ADD A COUNSELLOR
            </Button>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#121F28",
                border: "1px solid #2FAFD4",
                fontWeight: "bold",
                borderRadius: "15px",
                paddingLeft: "50px",
                paddingRight: "50px",
                fontStyle: "italic",
              }}
            >
              DELETE A COUNSELLOR
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Counsellors;
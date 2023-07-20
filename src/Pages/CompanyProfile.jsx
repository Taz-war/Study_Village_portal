import {
    Box,
    Grid,
    IconButton,
    Table,
    TableCell,
    TableContainer,
    TableRow,
    tableCellClasses,
  } from "@mui/material";
  import React from "react";
  import MenuIcon from "@mui/icons-material/Menu";
  import "./EveryPage.css";
import MainMenu from "../Components/MainMenu";
import { useState } from "react";
  const datas = [
    { api_name: "Company Principal", field: "James Anderson" },
    { api_name: "Referral ID", field: 9238627185621753 },
    { api_name: "Key Contact email address", field: "svagent111@gmail.com" },
    { api_name: "Company address", field: "95 Collins St Melbourne" },
    { api_name: "Phone Number", field: "9781 5158" },
    { api_name: "Website", field: "www.google.com" },
  ];
  
  const keys = Object.keys(datas);
  const CompanyProfile = () => {
    const [open, setOpen] = useState(false);
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
            <Box style={{ width: { xs: "25%", sm: "7%", md: "7%", lg: "7%" } }}>
            <IconButton onClick={() => setOpen(true)} sx={{alignSelf:'flex-end'}} disableRipple>
              <MenuIcon
                size="large"
                sx={{
                  color: "yellow",
                  height: "100px",
                  width: { xs: "55px", sm: "70px", md: "100px" },
                }}
              />
              <MainMenu open={open} setOpen={setOpen} />
              </IconButton>
            </Box>
          </Box>
          <h2>
            <i style={{ color: "white" }}>Your Company Profile</i>
          </h2>
          <hr style={{ border: "1px solid #C5D512", marginTop: "25px" }} />
          <Box
            sx={{
              color: "white",
              fontSize: "12px",
              paddingBottom: "40px",
              paddingTop: "35px",
            }}
          >
            <i
              style={{
                border: "1px solid #2FAFD4",
                padding: "10px 10px 10px 10px",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              PLEASE KEEP YOUR DETAILS UP TO DATE
            </i>
          </Box>
  
          <TableContainer sx={{ maxWidth: "850px" }}>
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
        </Box>
      </Box>
    );
  };
  
  export default CompanyProfile;
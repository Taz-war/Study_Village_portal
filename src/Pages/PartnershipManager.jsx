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
import MainMenu from "../Components/MainMenu";
import { useState } from "react";
import { StateContex } from "../Context/StateProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
  const datas = [
    { api_name: "First name", field: "Glen" },
    { api_name: "Last name", field: "Meehan" },
    { api_name: "email address", field: "glenmeehan@studyvillage.org" },
    { api_name: "Mobile/Cell Whatsapp number", field: "+61 411 251 535" },
    { api_name: "Telephone", field: "(+613) 703 603 47 (ext.002)" },
  ];
  
  const PartnershipManager = () => {
    const {open,setOpen}=useContext(StateContex)

    return (
      <Box
        style={{
          backgroundColor: "#121F28",
          height: "100%",
  
          overflowY: "hidden",
        }}
      >
        <Box sx={{ p: { xs: 2, sm: 8, md: 12, lg: 12 } }}>
          {" "}
          <Box style={{ display: "flex", paddingBottom: "30px" }}>
            <Box sx={{ width: { xs: "85%", sm: "93%", md: "93%", lg: "93%" } }}>
            <Link to={'/'}>
              <img
                src={
                  "https://studyvillage.org/wp-content/uploads/2020/10/Logo-long-green-white_Artboard-6-15.png"
                }
                alt="pic"
                style={{ width: "280px", height: "70px", paddingTop: "20px" }}
              />
              </Link>
            </Box>
            <Box sx={{ width: { xs: "15%", sm: "7%", md: "7%", lg: "7%" } }}>
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
          <h2>
            <i style={{ color: "white" }}>
              Your StudyVillage partnership manager
            </i>
          </h2>
          <hr style={{ border: "1px solid #C5D512", marginBottom: "30px" }} />
          <Box style={{ maxWidth: "40%" }}>
            <p style={{ color: "#C5D512", fontSize: "15px" }}>
              For account enquiries, assistance with a campaign or just a quick
              chat, please feel to reach out to your super-friendly StudyVillage
              account manager
            </p>
          </Box>
          <TableContainer
          sx={{ maxWidth: "850px", paddingBottom: "40px", paddingTop: "20px" }}
        >
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
                  {/* <TableCell
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
                  </TableCell> */}
                  <TableCell>
                    <b>{data.api_name}</b>
                  </TableCell>
                  <TableCell>
                    {data.field}
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
  
  export default PartnershipManager;
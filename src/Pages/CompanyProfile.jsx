import {
  Box,
  Button,
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
import { StateContex } from "../Context/StateProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
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
  const { open, setOpen } = useContext(StateContex);
  return (
    <Box
      style={{
        backgroundColor: "#121F28",
        height: "100%",

        overflowY: "hidden",
      }}
    >
      <Box sx={{ p: { xs: 2, sm: 8, md: 12, lg: 12 } }}>
        <Box style={{ display: "flex", paddingBottom: "30px" }}>
          <Box sx={{ width: { xs: "85%", sm: "93%", md: "93%", lg: "93%" } }}>
            <Link to={"/"}>
              <img
                src={
                  "https://studyvillage.org/wp-content/uploads/2020/10/Logo-long-green-white_Artboard-6-15.png"
                }
                alt="pic"
                style={{ width: 300, paddingTop: "20px" }}
              />
            </Link>
          </Box>
          <Box style={{ width: { xs: "15%", sm: "7%", md: "7%", lg: "7%" } }}>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ alignSelf: "flex-end" }}
              disableRipple
            >
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
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#121F28",
            border: "1px solid #2FAFD4",
            borderRadius: "10px",
            '&:hover':{
              backgroundColor:'transparent'
            }
          }}
        >
          <i> Edit Details </i>
        </Button>
      </Box>
    </Box>
  );
};

export default CompanyProfile;

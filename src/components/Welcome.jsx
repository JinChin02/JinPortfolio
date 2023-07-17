import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Logos from "../Data/logo.js";
import BGI from "../Images/welcome_background12.jpg";

export default function Welcome(props) {
  let selfIntro = props.data.main.selfIntro;

  return (
    <div id="home">
      <Grid
        container
        xl={10}
        marginX={"auto"}
        sx={{
          minHeight: 470,
          display: "flex",
          flexDirection: "row",
          paddingTop: "8rem",
          gap: 10,
          marginLeft: 25,
        }}
      >
        <Grid item maxWidth={950}>
          <Typography
            textAlign={"right"}
            paddingTop={"1rem"}
            variant="h3"
            fontFamily={"verdana"}
            color={"white"}
            fontWeight={"bold"}
          >
            Software <br />
            Developer <br /> _____
          </Typography>

          <Typography
            textAlign={"justify"}
            paddingTop={"1rem"}
            variant="h5"
            fontFamily={"verdana"}
            color={"white"}
          >
            {/* Optimistic, Initiative, TeamPlayer, Leadership */}
            {selfIntro}
          </Typography>
        </Grid>

        <Grid item>
          <CardMedia
            component="img"
            sx={{ height: 400 }}
            image={require("../Images/mainPic.png")}
            alt="main"
          />
        </Grid>
      </Grid>
    </div>
  );
}

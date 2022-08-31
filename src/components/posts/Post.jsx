import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import postImage from "../../assets/postImage.png";
import profilePic from "../../assets/mule.jpg";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgColor: "red" }}
            arial-label="recipe"
            src={profilePic}
          />
        }
        actions={
          <IconButton areal-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Mulualem Eshetu"
        subheader="August 31, 2022"
      />
      <CardMedia component="img" height="20%" image={postImage} alt="React" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="h6">
            1. Keep components small and function-specific
          </Typography>
          As we all know, with React, it’s possible to have huge components that
          execute a number of tasks. But a better way to design components is to
          keep them small, so that one component corresponds to one function.
          Ideally, a single component should render a specific bit of your page
          or modify a particular behavior.
        </Typography>
      </CardContent>
      <CardActions disableSSpacing>
        <IconButton areal-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton areal-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;

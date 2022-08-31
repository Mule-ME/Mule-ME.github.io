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
import postImage from "../../assets/post3Image.png";
import sura from "../../assets/sura.avif";

const Post3 = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar src={sura} width="30" height="30" />}
        actions={
          <IconButton areal-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Surafel Kifle"
        subheader="August 31, 2022"
      />
      <CardMedia component="img" height="20%" image={postImage} alt="React" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Modern JavaScript is a safe and secure programming language. Partly
          because it does not provide low-level tools and does not have access
          to low-level resources like working with memory or processor. In fact,
          JS was initially focused on browsers and interaction within browsers
          only. And the browser space is separated from OS, that’s why
          JavaScript is playing on the safe side. However, over the time
          developers started to apply JavaScript outside of the browser space.
          That’s why the possibilities of JavaScript now depend only on the
          environment where it’s running. When it’s running in the browser,
          JavaScript is able to proceed anything related to web page
          manipulations, users’ interactions and interactions with the server
          (to some extent). Create new HTML tags, delete existing ones, change
          elements style, show or hide elements etc. React on users activity
          such as mouse movements and clicks, typing on a keyboard etc. Send
          request to the server and download data without reloading the page
          (AJAX technology). Receive and set up cookies, request data, display
          messages etc. Lots of other features and possibilities. or modify a
          particular behavior.
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

export default Post3;

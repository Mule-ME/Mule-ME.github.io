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
import postImage from "../../assets/post2Image.png";
import profilePic from "../../assets/mule.jpg";

const Post2 = () => {
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
      <CardMedia component="img" height="10%" image={postImage} alt="React" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="h6">
            2. Reusability is important, so keep creation of new components to
            the minimum required
          </Typography>
          By sticking to the rule of one function = one component, you can
          improve the reusability of components. What this means is that you
          should skip trying to build a new component for a function if there
          already exists a component for that function. By reusing components
          across your project or across any number of projects, not only will
          you achieve consistency, you’ll also be contributing to the community.
          On the other hand, if any component becomes huge, unwieldy and
          difficult to maintain, it’s better to break it up into as many smaller
          components as required. For example, you can even go further and
          create a Button component that can handle icons. Then, each time you
          need a button, you’ll have a component to use. Making it more modular
          will allow you to cover many cases with the same piece of code. You
          have to aim somewhere in the middle. Your components should be
          abstract enough, but shouldn’t be overly complex.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="h6">
            3. Name the component after the function
          </Typography>
          It’s a good idea to name a component after the function that it
          executes so that it’s easily recognizable. For example, ProductTable –
          it conveys instantly what the component does. On the other hand, if
          you name the component based on the need for the code, it can confuse
          you at a future point of time. Another example, it’s preferable to
          name a component Avatar so that it can be used anywhere – for authors,
          users or in comments. Instead, if we name the component AuthorAvatar
          in the context of its usage, we’d be limiting the utility of that
          component. Besides, naming a component after the function makes it
          more useful to the community as it’s more likely to be discovered.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="h6">4. Comment only where necessary</Typography>
          Attach comments to code only where necessary. This is not only in
          keeping with React best practices, it also serves two purposes at the
          same time: It’ll keep code visually clutter free. You’ll avoid a
          potential conflict between comment and code, if you happen to alter
          the code at some later point in time.
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

export default Post2;

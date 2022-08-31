import React, { useState } from "react";
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import profilePic from "../assets/mule.jpg";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="#186569" areal-label="Add post">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        areal-labelledby="modal-modal-title"
        areal-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={290}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="span" fontWeight={500}>
            Create post
          </Typography>
          <UserBox>
            <Avatar src={profilePic} sx={{ width: 40, height: 40 }} />
            <Typography fontWeight={300} variant="span">
              Mulualem Eshetu
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            placeholder="What's on your mind?"
            multiline
            rows={4}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions sx={{ color: "#FFD300" }} />
            <Image sx={{ color: "#acacac" }} />
            <PersonAdd color="#error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;

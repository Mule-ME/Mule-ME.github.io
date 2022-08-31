import React, { useState } from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import Post from "./posts/Post";
import Post2 from "./posts/Post2";
import Post3 from "./posts/Post3";

function NewsFeed() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [4000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <>
          <Stack spacing={1} sx={{ margin: 5 }}>
            <Stack spacing={1}>
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
            <Skeleton variant="rectangle" height={300} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
          </Stack>
          <Stack spacing={1} sx={{ margin: 5 }}>
            <Stack spacing={1}>
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
            <Skeleton variant="rectangle" height={300} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
          </Stack>
          <Stack spacing={1} sx={{ margin: 5 }}>
            <Stack spacing={1}>
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
            <Skeleton variant="rectangle" height={300} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
          </Stack>
          <Stack spacing={1} sx={{ margin: 5 }}>
            <Stack spacing={1}>
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
            <Skeleton variant="rectangle" height={300} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
          </Stack>
        </>
      ) : (
        <>
          <Post />
          <Post2 />
          <Post3 />
          <Post />
          <Post2 />
          <Post3 />
        </>
      )}
    </Box>
  );
}

export default NewsFeed;

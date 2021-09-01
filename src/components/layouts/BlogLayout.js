import * as React from "react";
import { Box, Container, CssBaseline, Grid } from "@material-ui/core";
import PrimarySearchAppBar from "../PrimarySearchAppBar";
import IconBreadcrumbs from "../IconBreadcrumbs";
import SidebarList from "../SidebarList";

const BlogLayout = ({ postTitle, children }) => {
  return (
    <CssBaseline>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box mt={2}>
              <IconBreadcrumbs></IconBreadcrumbs>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {children}
          </Grid>
          <Grid item xs={12} sm={6}>
            <SidebarList></SidebarList>
          </Grid>
        </Grid>
      </Container>
    </CssBaseline>
  );
};

export default BlogLayout;

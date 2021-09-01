import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, CssBaseline, Grid } from "@material-ui/core";
import PrimarySearchAppBar from "../PrimarySearchAppBar";
import IconBreadcrumbs from "../IconBreadcrumbs";
import SidebarList from "../SidebarList";
import BlogRoll from "../BlogRoll";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    maxWidth: "350px",
  },
}));

const HomeLayout = ({ pageTitle, children }) => {
  const classes = useStyles();
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
            <Box className={classes.sidebar}>
              <SidebarList></SidebarList>
              <BlogRoll maxSize="100"></BlogRoll>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </CssBaseline>
  );
};

export default HomeLayout;

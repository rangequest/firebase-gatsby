import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "gatsby-theme-material-ui";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function IconBreadcrumbs() {
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/">
        <Typography color="textPrimary" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Home
        </Typography>
      </Link>
      <Link to="/blog">
        <Typography color="textPrimary" className={classes.link}>
          <AppsIcon className={classes.icon} />
          Blog
        </Typography>
      </Link>
    </Breadcrumbs>
  );
}

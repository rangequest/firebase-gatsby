import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import HomeLayout from "../components/layouts/HomeLayout";
import { Grid, Typography } from "@material-ui/core";
import Seo from "../components/seo/Seo";
import TabPanel from "../components/TabPanel";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Seo pageTitle="Homepage of Range Quest"></Seo>
      <HomeLayout pageTitle="Range Quest">
        <Grid container>
          <Grid item xs={12} sm={12}>
            <StaticImage
              alt="Range Quest Logo"
              src="../images/range-quest.png"
            />
          </Grid>
          <Grid item xs={12} sm={11}>
            <Typography component="span">
              <p>
                Sint ullamco tempor qui labore duis nulla tempor velit sunt
                labore culpa aliqua laboris pariatur. Ex elit adipisicing
                excepteur magna laborum deserunt duis eu eu enim elit deserunt
                aliquip officia. Laboris proident tempor esse in. Adipisicing
                excepteur eiusmod cupidatat esse adipisicing occaecat
                incididunt. Labore aute dolore dolore sint deserunt. Commodo
                adipisicing in in labore irure non. Dolor ullamco amet eu nisi
                mollit commodo proident voluptate proident consectetur. Ullamco
                minim quis enim aliquip in in do nostrud adipisicing anim
                nostrud eu. Excepteur irure in magna aliqua ut aute ullamco. Ex
                irure do nulla dolore ex adipisicing ad incididunt excepteur
                occaecat incididunt fugiat do. Consectetur velit exercitation
                amet fugiat sit esse mollit mollit ut dolore elit aute quis
                excepteur.
              </p>
              <p>
                Excepteur incididunt magna culpa laborum id aliquip culpa.
                Cillum est sint magna laborum ipsum ipsum labore deserunt. Elit
                ea aliqua quis pariatur aliqua officia sunt elit proident dolore
                amet excepteur velit reprehenderit. Aliquip aliqua consectetur
                ex ipsum dolor eu anim.
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TabPanel></TabPanel>
          </Grid>
        </Grid>
      </HomeLayout>
    </React.Fragment>
  );
};

export default IndexPage;

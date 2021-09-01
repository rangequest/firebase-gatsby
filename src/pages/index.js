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
                Excepteur incididunt magna culpa laborum id aliquip culpa.
                Cillum est sint magna laborum ipsum ipsum labore deserunt. Elit
                ea aliqua quis pariatur aliqua officia sunt elit proident dolore
                amet excepteur velit reprehenderit. Aliquip aliqua consectetur
                ex ipsum dolor eu anim.
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={11}>
            <TabPanel></TabPanel>
          </Grid>
          <Grid item xs={12} sm={11}>
            <Typography component="span">
              <p>
                Excepteur incididunt magna culpa laborum id aliquip culpa.
                Cillum est sint magna laborum ipsum ipsum labore deserunt. Elit
                ea aliqua quis pariatur aliqua officia sunt elit proident dolore
                amet excepteur velit reprehenderit. Aliquip aliqua consectetur
                ex ipsum dolor eu anim.
              </p>
              <p>
                Aliquip tempor nisi anim in labore consequat sint labore eiusmod
                eu. Ex ex deserunt ad incididunt incididunt commodo. Dolore sint
                in Lorem non. Esse aliquip ullamco ipsum occaecat sunt laboris
                incididunt adipisicing. Pariatur cillum ex amet exercitation
                ipsum aute non eiusmod consectetur sint consequat eu
                exercitation. Amet anim sit cillum velit ipsum aliqua ullamco
                magna voluptate culpa qui duis est.
              </p>
              <p>
                Pariatur anim pariatur fugiat aliquip anim anim et anim magna
                adipisicing dolor nostrud. Enim duis ipsum laborum quis pariatur
                est fugiat duis velit irure id commodo est. Sunt commodo ea
                irure aliquip id veniam Lorem incididunt laborum consectetur qui
                labore. Minim minim ea adipisicing exercitation occaecat. Mollit
                ullamco eiusmod anim minim. Incididunt quis ullamco dolore
                tempor dolor officia cupidatat Lorem ipsum cupidatat
                reprehenderit non id nostrud. Reprehenderit magna deserunt ipsum
                consequat laborum ipsum eu sunt et eiusmod. Id non consectetur
                occaecat aliqua ex. Minim laboris nostrud voluptate deserunt in
                aliqua velit culpa. Veniam eiusmod anim tempor aliqua velit
                pariatur irure nisi. Voluptate esse reprehenderit aute eu in ex
                consequat non minim est laborum labore ea aliqua. Veniam elit
                veniam in proident consectetur exercitation exercitation sit qui
                occaecat sint nostrud sunt. Quis et dolore ex nisi tempor eu
                cupidatat proident. Amet ex do officia pariatur ad irure esse
                est nostrud est.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </HomeLayout>
    </React.Fragment>
  );
};

export default IndexPage;

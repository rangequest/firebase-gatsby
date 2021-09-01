import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<PhoneIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab
            icon={<FavoriteIcon />}
            aria-label="favorite"
            {...a11yProps(1)}
          />
          <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(2)} />
          <Tab icon={<HelpIcon />} aria-label="help" {...a11yProps(3)} />
          <Tab
            icon={<ShoppingBasket />}
            aria-label="shopping"
            {...a11yProps(4)}
          />
          <Tab icon={<ThumbDown />} aria-label="up" {...a11yProps(5)} />
          <Tab icon={<ThumbUp />} aria-label="down" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Ipsum eu dolore qui nostrud nostrud deserunt eiusmod dolor culpa tempor.
        Aute anim sint commodo et magna ullamco esse. Adipisicing occaecat non
        et in esse. Excepteur esse consequat excepteur pariatur exercitation
        minim exercitation consectetur ullamco velit laboris ea in. Consequat
        aliqua aliqua anim dolore laborum cupidatat est excepteur do irure esse
        laboris. Reprehenderit ullamco enim aliqua eu incididunt.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Aliquip officia duis velit eiusmod. Nostrud irure quis reprehenderit
        dolore. Est sit ut ipsum aliqua commodo proident occaecat. Culpa
        occaecat proident sunt laborum pariatur ex labore.
      </TabPanel>
      <TabPanel value={value} index={2}>
        Voluptate anim est cillum cupidatat cupidatat deserunt consequat ullamco
        culpa in labore in. Enim nostrud exercitation commodo aute dolore
        nostrud dolor non reprehenderit esse sint aute in quis. Duis sint qui
        dolore mollit consequat et in non dolor nostrud ea magna ipsum esse.
      </TabPanel>
      <TabPanel value={value} index={3}>
        Aliquip excepteur labore magna ea do. Eu ea qui nisi aliqua deserunt ut
        eu labore et aliquip aliqua minim. Consectetur nulla officia eiusmod
        labore tempor in elit nisi. Aute eiusmod duis proident pariatur nulla.
        Esse deserunt ipsum proident culpa duis Lorem voluptate incididunt
        ipsum. Aliquip culpa sit consequat amet officia reprehenderit aliquip
        voluptate cillum. Voluptate magna quis excepteur aute proident.
      </TabPanel>
      <TabPanel value={value} index={4}>
        Commodo dolore incididunt ullamco mollit tempor ea amet. Do mollit
        deserunt fugiat duis labore nostrud anim Lorem. Laboris nostrud anim
        cillum fugiat esse duis amet fugiat elit aliqua ad anim. Minim tempor
        culpa ullamco non quis tempor exercitation. Occaecat anim Lorem nulla id
        quis est irure incididunt eiusmod sint dolore. Adipisicing nisi
        consequat veniam veniam adipisicing amet consequat enim aute occaecat do
        proident voluptate dolore.
      </TabPanel>
      <TabPanel value={value} index={5}>
        Incididunt eiusmod voluptate eu sunt eiusmod consectetur incididunt
        fugiat anim ut culpa enim. Excepteur sunt nostrud duis cillum enim
        laborum proident minim sint irure. Aliquip irure officia Lorem
        exercitation do consectetur veniam nisi. In deserunt irure ullamco qui
        laboris Lorem ut qui duis mollit id ipsum.
      </TabPanel>
      <TabPanel value={value} index={6}>
        Fugiat irure sit adipisicing occaecat dolor Lorem quis. Elit consequat
        occaecat adipisicing mollit proident deserunt voluptate fugiat. Laboris
        magna aute fugiat duis qui fugiat ea enim. Minim ad ad irure occaecat et
        velit in.
      </TabPanel>
    </div>
  );
}

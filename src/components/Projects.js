import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Webdev from "./Category/Webdev";
import Datastr from "./Category/Datastr";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "70%",
    backgroundColor: theme.palette.background.paper,
    marginLeft: "15%",
    marginRight: "15%",
  },
}));

export default function Projects() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="projects">
      <h1 className="title">Projects</h1>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Web Development" {...a11yProps(1)} />
          <Tab label="Web-Games" {...a11yProps(2)} />
          <Tab label="Data Structure Project" {...a11yProps(3)} />
          <Tab label="Machine Learning" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Webdev />
        <Datastr />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Webdev />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Web-Games
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Datastr />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Machine Learning
      </TabPanel>
    </div>
  );
}

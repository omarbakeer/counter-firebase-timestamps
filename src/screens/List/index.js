import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Typography from "@material-ui/core/Typography";
export default class Routes extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Button
          onClick={() => this.props.history.push("/")}
          style={{ position: "absolute", top: "70px", left: "10%" }}
        >
          <ArrowBack />
          Go to the App
        </Button>
        <Card style={{ width: "50vw" }}>
          <List
            subheader={
              <ListSubheader
                color="primary"
                component="h1"
                style={{ fontSize: "28px" }}
              >
                Timestamp List
              </ListSubheader>
            }
          >
            <ListItem divider button selected>
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText>Hello world</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText>Hello world</ListItemText>
            </ListItem>
          </List>
        </Card>
        <Typography style={{ marginTop: "30px" }}>
          Made by Omar Bakier
        </Typography>
      </Grid>
    );
  }
}

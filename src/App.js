import React from "react";
import Grid from "@material-ui/core/Grid";
import EventListener from "react-event-listener";

function App() {
  return (
    <>
      <EventListener target="document" />
      <Grid container={true} alignItems="stretch" justify="center">
        <Grid item={true}>SomeText</Grid>
        <Grid item={true}>
          <img alt="some image" href="etc" />
        </Grid>
      </Grid>
      <Grid container={true} alignItems="stretch" justify="center">
        <Grid item={true} xs={12}>
          Some item
        </Grid>
      </Grid>
    </>
  );
}

export default App;

import React from "react";
import { Grid } from "semantic-ui-react";
import ColorPanel from "../components/ColorPanel/ColorPanel";
import SidePanel from "../components/SidePanel/SidePanel";
import Messages from "../components/Messages/Messages";
import MetaPanel from "../components/MetaPanel/MetaPanel";

function App() {
  return (
    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
      <ColorPanel />
      <SidePanel />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>
      <Grid.Column style={{ width: 4 }}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
}

export default App;

import React, { Component } from "react";
import { Header, Segmend, Input, Icon, Segment } from "semantic-ui-react";

class MessagesHeader extends React.Component {
  render() {
    return (
      <Segment>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottem: 0 }}>
          <span>
            Channel
            <Icon name={"star outline"} color="black" />
          </span>
          <Header.Subheader>Users</Header.Subheader>
        </Header>
        {/* Channel Search Input */}
        <Header floated="right">
          <Input
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}

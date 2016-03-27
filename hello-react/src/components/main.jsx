'use strict';

import React from 'react';

export class Main extends React.Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron main">
          <h1>{this.state.message}</h1>
        </div>
      </div>
    );
  }
}

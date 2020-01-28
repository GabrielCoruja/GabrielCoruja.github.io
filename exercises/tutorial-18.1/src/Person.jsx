import React, { Component } from 'react';
import { Mycontext } from './Provider';

class Person extends Component {
  render() {
    return(
      <div className="person">
        <Mycontext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>Aumentar idade</button>
            </React.Fragment>
          )}
        </Mycontext.Consumer>
      </div>
    );
  };
}

export default Person;

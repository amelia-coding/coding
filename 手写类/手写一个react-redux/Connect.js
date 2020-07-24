import React from "react";
import { ReactReduxContext } from "./Context";

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <ReactReduxContext.Consumer>
          {({ store }) => {
            // mapStateToProps，传递源生 redux store
            let stateProps = mapStateToProps(store.getState());
            // mapDispatchToProps
            let dispatchProps = mapDispatchToProps(store.dispatch, this.props);
            return <WrappedComponent {...stateProps} {...dispatchProps} />;
          }}
        </ReactReduxContext.Consumer>
      );
    }
  }
  return HOC;
};

export { connect };

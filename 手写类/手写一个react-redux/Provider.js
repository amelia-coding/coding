/* Provider.js
Provider 组件，通过 Context API，
为子组件注入 Store，
并对 Store 进行监听，
一旦 Store 改变，
就会重新渲染 Provider 组件，
从而渲染 Provider 下的所有子组件。
*/
import React from "react";
import { ReactReduxContext } from "./Context";

class Provider extends React.Component {
  constructor(props) {
    super(props);
    const { store } = props;
    this.state = {
      storeState: store.getState(),
      store,
    };
  }

  // 调用源生 redux 的事件监听函数
  componentDidMount() {
    this.subscribe();
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  componentDidUpdate(prevProps) {
    this.subscribe();
  }

  subscribe() {
    // store 通过 redux.createStore() 创建
    const { store } = this.props;

    // 监听 store 更新
    this.unsubscribe = store.subscribe(() => {
      const newStoreState = store.getState();

      this.setState((providerState) => {
        return { storeState: newStoreState };
      });
    });

    // 如果 store 不一致，调用 setState 重新渲染
    if (store.getState() !== this.state.storeState) {
      this.setState({ storeState: postMountStoreState });
    }
  }

  render() {
    return (
      <ReactReduxContext.Provider value={this.state}>
        {this.props.children}
      </ReactReduxContext.Provider>
    );
  }
}

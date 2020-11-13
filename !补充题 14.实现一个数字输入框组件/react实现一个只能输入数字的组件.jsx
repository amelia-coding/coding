class A extends React.Component {
  state = {
    value: "",
  };

  onChange = (val) => {
    if (val.test(/\d{1,}/g)) {
      this.setState({
        value: val,
      });
    } else {
      return;
    }
  };

  render() {
    return <input value={this.state.value} onChange={this.onChange}></input>;
  }
}

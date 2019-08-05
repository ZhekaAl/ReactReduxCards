import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Buttons from "/src/components/buttons";
import ListItems from "/src/containers/listItems";
import AddItemForm from "/src/containers/addItemForm";
import dataJson from "/src/data123.json";
import { setData } from "/src/actions/appActions";
import axios from "axios";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  list: {
    width: 250
  }
});

class AppView extends React.Component {
  componentWillMount() {
    axios
      .get("/src/data123.json") // CodeSandBox..
      .then(response => {
        // console.log("json loaded", response.data);
        this.props.setData(dataJson.data);
      })
      .catch(function(error) {
        console.log(error);
        this.props.setData(dataJson.data); // CodeSandBox..
      });
  }

  render() {
    return (
      <div>
        <Buttons />
        <ListItems />
        <AddItemForm />
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    setData: val => dispatch(setData(val))
  };
};

AppView.propTypes = {
  setData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AppView));

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
//import { theme } from "/src/theme";
import { connect } from "react-redux";
//import Typography from "@material-ui/core/Typography";

//import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Gridon from "@material-ui/icons/GridOn";
import Dehaze from "@material-ui/icons/Dehaze";

import { setMode, setData } from "/src/actions/appActions";

const styles = theme => ({
  line: {
    display: "flex",
    justifyContent: "space-between",

    alignItems: "center"
  },
  button: {
    flex: "1",
    margin: "5px"
  },
  active: { background: theme.palette.primary.main, color: "#fff" },
  modeButtons: {
    borderBottom: "1px solid grey",
    borderTop: "1px solid grey",
    padding: "10px",
    margin: "10px 5px 5px 5px"
    // marginTop:"10px"
  },
  iconButton: {
    padding: "6px",
    borderRadius: "20%"
  },
  subTitle: { ...theme.subTitle }
});

class Buttons extends React.Component {
  setMode = mode => {
    return () => this.props.setMode(mode);
  };

  addLastToBegin = () => {
    const { data, setData } = this.props;
    if (!data || data.length === 0) return;

    const lastElement = data[data.length - 1];
    const newData = [lastElement, ...data];
    setData(newData);
  };

  addFirstToEnd = () => {
    const { data, setData } = this.props;
    if (!data || data.length === 0) return;

    const firstElement = data[0];
    const newData = [...data, firstElement];
    setData(newData);
  };

  removeFirst = () => {
    const { data, setData } = this.props;
    if (!data || data.length === 0) return;

    let newData = [...data];
    newData.shift();
    setData(newData);
  };

  removeLast = () => {
    const { data, setData } = this.props;
    if (!data || data.length === 0) return;

    let newData = [...data];
    newData.pop();
    setData(newData);
  };

  render() {
    //  console.log(theme.palette.primary);

    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.line}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.addLastToBegin}
          >
            Добавить в начало
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.addFirstToEnd}
          >
            Добавить в конец
          </Button>
        </div>
        <div className={classes.line}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.removeFirst}
          >
            Удалить первый
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.removeLast}
          >
            Удалить последний
          </Button>
        </div>
        <div
          className={
            /*{ ...classes.modeButtons, ...classes.line }*/
            /* [classes.modeButtons, classes.line].join(" ")*/
            classes.modeButtons + " " + classes.line
          }
        >
          <div className={classes.subTitle}>
            {/*<Typography variant="subtitle2" gutterBottom>*/}
            Список объектов
            {/*} </Typography>*/}
          </div>

          <div>
            {/*//gridon
            //apps
            //dehaze*/}

            <IconButton
              color="primary"
              className={
                (this.props.mode === "list" ? classes.active : "") +
                " " +
                classes.iconButton
              }
              aria-label="delete"
              onClick={this.setMode("list")}
            >
              <Dehaze />
            </IconButton>
            <IconButton
              className={
                (this.props.mode === "table" ? classes.active : "") +
                " " +
                classes.iconButton
              }
              onClick={this.setMode("table")}
              color="primary"
            >
              <Gridon />
            </IconButton>
          </div>
        </div>
      </React.Fragment>
    );
  }

  //PropTypes
}

const mapStateToProps = store => {
  return {
    mode: store.app.mode,
    data: store.app.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMode: val => dispatch(setMode(val)),
    setData: val => dispatch(setData(val))
    //setActiveTab: val => dispatch(setActiveTab(val)),
    // setLeftMenu: val => dispatch(setLeftMenu(val)),
    //  setSettingsDialog: val => dispatch(setSettingsDialog(val)),
  };
};

Buttons.propTypes = {
  data: PropTypes.array,
  mode: PropTypes.oneOf(["list", "table"]),
  setMode: PropTypes.func,
  setData: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Buttons));

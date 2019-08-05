import React from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    },
    color: "#000"
  },

  input: {
    width: "100%",
    borderRadius: 2,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 14,
    padding: "6px 10px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    fontFamily: "Roboto",
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: "5px 0px",
    width: "100%"
  },
  label: {
    ...theme.subTitle,
    color: theme.palette.primary.main,
    transform: "translate(0, 1.5px) scale(1)"
  }
}));

export default function CustomizedInputs(props) {
  const classes = useStyles();

  //console.log("CustomizedInputs props=", props);

  const { title, value, index, onChange } = props;

  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input" className={classes.label}>
          {title}
        </InputLabel>
        <BootstrapInput
          value={value}
          onChange={e => onChange(index, e.target.value)}
          id="bootstrap-input"
        />
      </FormControl>
    </div>
  );
}

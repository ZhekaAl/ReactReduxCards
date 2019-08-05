import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setForm, setData } from "/src/actions/appActions";

import InputElement from "/src/components/inputElement";

const styles = theme => ({
  base: {
    margin: "5px 5px",
    padding: "5px",
    borderBottom: "1px solid grey",
    borderRight: "1px solid grey"
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
  title: { ...theme.subTitle }
});

/*{
  header:"zagolovok1"
  description:"desc0 dfbdf"
  points:["poin1","point2"]

}*/
const maxLength = 100;
const maxAttributesCount = 20;

class AddItemForm extends React.Component {
  applyForm = () => {
    const { form, data, setData, setForm } = this.props;

    if (!form || !form.header || !data || data.length === 0) return;

    const newData = [
      ...data,
      {
        title: form.header,
        attributes: form.points,
        description: form.description
      }
    ];
    setData(newData);
    setForm({});
  };

  handleHeaderInputChanged = (title, value) => {
    console.log("handleHeaderInputChanged", title, value);
    if (value.length > maxLength) return;
    const newData = {
      ...this.props.form,
      header: value
    };
    this.props.setForm(newData);
  };

  handleDescriptionInputChanged = (title, value) => {
    console.log("handleHeaderInputChanged", title, value);
    if (value.length > maxLength) return;
    const newData = {
      ...this.props.form,
      description: value
    };
    this.props.setForm(newData);
  };

  handleChangePoints = (key, value) => {
    //  console.log("handleHeaderInputChanged", key, value);
    if (value.length > maxLength) return;
    const { form } = this.props;
    if (!form) return;
    let points = form.points ? [...form.points] : [];

    if (key >= points.length && value !== "") {
      points.push(value);
    } else if (key < points.length && value !== "") {
      points[key] = value;
    } else if (key < points.length && value === "") {
      points.splice(key, 1);
    }

    const newData = {
      ...form,
      points
    };
    this.props.setForm(newData);
  };

  getPointInputs = () => {
    var that = this;
    const { form } = this.props;
    if (!form) return "";
    let arr = [];
    if (form.points) {
      arr = form.points.map((el, key) => (
        <InputElement
          value={el}
          key={key}
          index={key}
          title="Добавить пункт"
          onChange={that.handleChangePoints}
        />
      ));
    }
    const nextKey = arr.length;

    if (nextKey < maxAttributesCount) {
      arr.push(
        <InputElement
          value=""
          title="Добавить пункт"
          key={nextKey}
          index={nextKey}
          onChange={that.handleChangePoints}
        />
      );
    }
    return arr;
  };
  render() {
    const { classes, form } = this.props;
    const headerValue = form ? (form.header ? form.header : "") : "";

    return (
      <div className={classes.base}>
        <div className={classes.title}> Добавить новый объект</div>
        <InputElement
          value={headerValue}
          title="Заголовок*"
          onChange={this.handleHeaderInputChanged}
        />
        {this.getPointInputs()}
        <InputElement
          value={form ? (form.description ? form.description : "") : ""}
          title="Описание"
          onChange={this.handleDescriptionInputChanged}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.applyForm}
          disabled={headerValue === ""}
        >
          Добавить
        </Button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    form: store.app.form,
    data: store.app.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setForm: val => dispatch(setForm(val)),
    setData: val => dispatch(setData(val))
  };
};

AddItemForm.propTypes = {
  form: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddItemForm));

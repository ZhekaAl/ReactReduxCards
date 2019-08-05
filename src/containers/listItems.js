import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const styles = theme => ({
  baseStyles: {
    fontSize: "0.875rem",
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
    margin: "5px 5px",
    borderBottom: "1px solid grey",
    wordBreak: "break-all"
  },

  flexGap: { margin: "0 -5px" },

  oneCard: {
    margin: "5px 5px",
    padding: "5px",
    background: "#f3f3f3",
    flex: "1 0 150px"
  },
  key: {
    marginLeft: "5px",
    marginRight: "5px",
    color: theme.palette.primary.main
  },
  title: { marginLeft: "5px", marginRight: "5px" },
  attributes: { padding: "5px 5px 5px 15px" },
  attributeItem: { margin: "0px 5px" },
  titleRowAndAttributes: {},
  titleKeyRow: {
    display: "flex",
    justifyContent: "space-between",
    // flexShrink: "0",
    minWidth: "115px",
    padding: "5px 5px"
  },
  description: {
    padding: "5px 5px"
  }
});

class ListItems extends React.Component {
  choiceFlexBloc() {
    if (this.props.mode === "list") return { display: "flex" };
    if (this.props.mode === "table") return { display: "block" };
  }

  choiceFlexDirection() {
    if (this.props.mode === "list") return { flexDirection: "row" };
    if (this.props.mode === "table") return { flexDirection: "row-reverse" };
  }

  getStylesAttributes() {
    if (this.props.mode === "list")
      return { display: "flex", flexWrap: "wrap" };
    if (this.props.mode === "table")
      return { display: "block", borderBottom: "1px solid grey" };
  }

  getBorderTitleKey() {
    if (this.props.mode === "table") return { borderBottom: "1px solid grey" };
  }
  getBorderTitleKeyAttributes() {
    if (this.props.mode === "list") return { borderBottom: "1px solid grey" };
  }

  getCardListStyles() {
    if (this.props.mode === "table")
      return { display: "flex", flexWrap: "wrap" };
  }

  Card(item, i) {
    // console.log({ titles, attributes, description });
    const { classes } = this.props;
    return (
      <div key={i} className={classes.oneCard}>
        <div
          className={classes.titleRowAndAttributes}
          style={{
            ...this.choiceFlexBloc(),
            ...this.getBorderTitleKeyAttributes()
          }}
        >
          <div
            className={classes.titleKeyRow}
            style={{
              ...this.choiceFlexDirection(),
              ...this.getBorderTitleKey()
            }}
          >
            <div className={classes.key}>{i}</div>
            <div className={classes.title}>{item.title}</div>
          </div>
          <div
            className={classes.attributes}
            style={this.getStylesAttributes()}
          >
            {item.attributes.map((item, i) => (
              <div className={classes.attributeItem} key={i}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.description}>{item.description}</div>
      </div>
    );
  }

  render() {
    const { data, classes } = this.props;

    return (
      <div className={classes.baseStyles}>
        <div className={classes.flexGap} style={this.getCardListStyles()}>
          {data ? data.map((item, i) => this.Card(item, i)) : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    mode: store.app.mode,
    data: store.app.data
  };
};

const mapDispatchToProps = null;

ListItems.propTypes = {
  data: PropTypes.array.isRequired,
  mode: PropTypes.oneOf(["list", "table"]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ListItems));

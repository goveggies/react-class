import React from "react";

import { Header } from "semantic-ui-react";
import { connect } from "react-redux";

import { updateTitle, toggleClock } from "../actions";
import PropTypes from "prop-types";

const AboutPage = ({
  title,
  handleTitleChange,
  clockDisplayed,
  handleToggledCLock
}) => (
  <>
    <Header>About this site</Header>
    <input
      value={title}
      onChange={e => handleTitleChange(e.target.value)}
    />{" "}
    <div style={{ marginTop: "10px" }}>
      <label>Display clock </label>
      <input
        checked={clockDisplayed}
        type="checkbox"
        onChange={e => handleToggledCLock(e.target.checked)}
      />
    </div>
  </>
);
AboutPage.defaultProps = {
  handleTitleChange: a => a,
  handleToggledCLock: a => a
};

AboutPage.propTypes = {
  title: PropTypes.string,
  clockDisplayed: PropTypes.bool,
  handleTitleChange: PropTypes.func,
  handleToggledCLock: PropTypes.func
};

const mapStateToProps = state => ({
  title: state.appTitle,
  clockDisplayed: state.clockDisplayed
});

const mapDispatchToProps = dispatch => ({
  handleTitleChange: value => dispatch(updateTitle(value)),
  handleToggledCLock: value => dispatch(toggleClock(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);

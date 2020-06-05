import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class StreamForm extends Component {
  hasError = ({ error, touched }) => touched && error;

  renderError = ({ error, touched }) => {
    if (this.hasError({ error, touched })) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    return null;
  };

  renderInput = ({ input, label, meta }) => {
    const inputClassName = `field ${this.hasError(meta) ? "error" : ""}`;
    return (
      <div className={inputClassName}>
        <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button className="ui button primary">Send</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Please fill the form field";
  }

  if (!formValues.description) {
    errors.description = "Please fill the form field";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamForm);

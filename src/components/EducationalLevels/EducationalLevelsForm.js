import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
class EducationalLevelsForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="text-red-500 font-light text-left text-sm block">
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-text-900 dark:text-gray-text-300"
        >
          {label}
        </label>
        <input
          {...input}
          id="name"
          autoComplete="off"
          className=" border border-gray-text-300 text-gray-text-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <Field
          name="name"
          component={this.renderInput}
          label={"Educational Level Name"}
        />
        <Field
          name="career_id"
          component={this.renderInput}
          label={"Educational Level Conjoin"}
        />
        <div className="flex justify-between items-center w-full">
          <Link
            to={"/educationallevels"}
            className="bg-gray-text-200 w-[10rem] rounded-lg text-white-text-100 font-semibold text-center p-2 hover:bg-gray-text-300 transition-all ease-in duration-300"
          >
            Cancel
          </Link>
          <button className=" bg-green-400 w-[10rem] rounded-lg text-white-text-100 font-semibold text-center p-2 hover:bg-green-600 transition-all ease-in duration-300">
            Save Educational Level
          </button>
        </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name && !formValues.career_id) {
    errors.name = "Please, enter a valid Educational Level name";
  }

  return errors;
};

export default reduxForm({
  form: "educationalLevelForm",
  validate,
})(EducationalLevelsForm);

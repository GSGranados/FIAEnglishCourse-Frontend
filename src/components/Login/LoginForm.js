import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import minerva from '../../assets/minerva2.png'
export class LoginForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="text-red-500 font-light text-left text-sm block">
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type, placeholder }) => {
    return (
      <div>
        <label
          htmlFor={input.name}
          className="block mb-2 text-sm font-medium text-gray-text-900"
        >
          {label}
        </label>
        <input
          {...input}
          id={input.name}
          autoComplete="off"
          type={type}
          placeholder={placeholder}
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
      <div className="w-full h-full border-r-[4px] border-r-white-text-100 bg-blue-200 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(this.onSubmit)}
          className="w-80 border-[2.5px] p-8 border-black-800 shadow-2xl bg-white-text-100 rounded-lg flex flex-col gap-6"
        >
        <img className="w-[9rem] h-auto block my-0 mx-auto" src={minerva} alt="Minerva Logo UES"/>
          <Field
            name="username"
            component={this.renderInput}
            label={"Username"}
            type={"email"}
            placeholder={"email@mail.com"}
          />
          <Field
            name="password"
            component={this.renderInput}
            label={"Password"}
            type={"password"}
          />
          <div className="flex justify-between items-center w-full">
            <button className=" bg-blue-400 w-[10rem] my-0 mx-auto rounded-lg text-white-text-100 font-semibold text-center p-2 hover:bg-blue-600 transition-all ease-in duration-300">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "Please, enter a Username";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.username)
  ) {
    errors.username = "Invalid Username";
  }

  if (!formValues.password) {
    errors.password = "Please, enter a Password";
  }

  return errors;
};

export default reduxForm({
  form: "loginForm",
  validate,
})(LoginForm);

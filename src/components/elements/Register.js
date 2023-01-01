import React, { useState } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "../sections/partials/SectionHeader";
import { RegisterForm } from "./RegisterForm";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Register = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "Register",
    paragraph: "We want to remember you.",
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // handle form submission and validation
  const handleSubmit = (event) => {
    event.preventDefault();

    // validate form data
    setErrors({});
    let formErrors = {};
    if (formData.username.trim() === "") {
      formErrors.username = "Username is required";
    }
    if (formData.email.trim() === "") {
      formErrors.email = "Email is required";
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Password is required";
    }
    if (formData.confirmPassword.trim() === "") {
      formErrors.confirmPassword = "Confirm password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(formErrors);

    // if form is valid, send data to server for authentication
    if (Object.keys(formErrors).length === 0) {
      // send data to server
    }
  };

  // handle input change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section {...props} className={outerClasses}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SectionHeader data={sectionHeader} className="center-content" />
        <RegisterForm />
      </div>
    </section>
  );
};

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;

export default Register;

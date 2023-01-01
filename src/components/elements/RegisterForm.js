import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
// import { BiMap, BiKey, BiPowerOff } from "react-icons/bi";

function RegisterField({
  label,
  name,
  value,
  onChange,
  type = "text",
  decoration,
  inputClassName = "",
  decorationClassName = "",
  disabled,
}) {
  return (
    <Input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={label}
      aria-label={label}
      style={{ width: "400px", marginBottom: "10px" }}
      disabled={disabled}
    />
  );
}

function RegisterForm() {
  return (
    <div className="flex flex-col  w-full p-5 sm:p-10 gap-8 rounded-md">
      <RegisterField name="email" label="Email" type="email" />
      <RegisterField name="address" label="Address" />
      <RegisterField
        name="password"
        label="Password *"
        type="password"
        inputClassName="border-yellow-400"
        decorationClassName="bg-yellow-100 text-red-400 border-yellow-400"
      />
      <RegisterField name="confirmPassword" label="Confirm your password" />
      <Link to="/login" style={{ fontSize: "14px", marginBottom: "10px" }}>
        Already a part of team?
      </Link>
      <div
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <Button tag="a" color="primary" wideMobile>
          Submit
        </Button>
      </div>
    </div>
  );
}

export { RegisterForm };

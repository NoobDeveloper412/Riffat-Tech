import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
// import { BiMap, BiKey, BiPowerOff } from "react-icons/bi";

function LoginField({
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

function LoginForm() {
  return (
    <div className="flex flex-col w-full p-5 sm:p-10 gap-8 rounded-md">
      <LoginField name="email" label="Email" type="email" />

      <LoginField
        name="password"
        label="Password *"
        type="password"
        inputClassName="border-yellow-400"
        decorationClassName="bg-yellow-100 text-red-400 border-yellow-400"
      />
      <Link to="/register" style={{ fontSize: "14px", marginBottom: "10px" }}>
        Don't have an account?
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

export { LoginForm };

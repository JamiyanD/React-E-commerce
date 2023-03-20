import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/joy/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Typography, Stack } from "@mui/material";
export default function SignUp({ setShowNavbar }) {
  setShowNavbar(false);
  const URL = "http://localhost:8080/login";
  const navigate = useNavigate();
  const [errors, setErrors] = useState(true);
  const [validation, setValidation] = useState("");
  const [checked, setChecked] = React.useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    if (FETCHED_JSON.status === "success") {
      navigate("/usersList");
      setShowNavbar(true);
    }
    console.log(e.target.confirmPassword.value);
    console.log(e.target.password.value);

    if (e.target.password.value.length < 8) {
      setValidation("Password must be at least 8 characters long");
      setErrors(false);
    } else if (!/[A-Z]/.test(e.target.password.value)) {
      setValidation("Password must contain at least one uppercase letter");
      setErrors(false);
    } else if (!/[a-z]/.test(e.target.password.value)) {
      setValidation("Password must contain at least one lowercase letter");
      setErrors(false);
    } else if (!/\d/.test(e.target.password.value)) {
      setValidation("Password must contain at least one number");
      setErrors(false);
    } else if (e.target.password.value != e.target.confirmPassword.value) {
      setValidation("Passwords do not match");
      setErrors(false);
    } else {
      setErrors(true);
      setValidation("");
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="color-blue w-100 ">
        <img
          className="mx-auto d-block sign-logo m-4"
          src="https://preview.keenthemes.com/metronic8/demo30/assets/media/logos/custom-1.png"
          alt=""
        />
      </div>
      <h4 className="text-dark fw-bolder mb-3 mt-5">Sign Up</h4>
      <p className="form-text ">Your Social Campaigns </p>
      <div className="col-5 hstack mx-auto">
        <button className="btn btn-outline-secondary me-1 w-50">
          <img
            src="https://preview.keenthemes.com/metronic8/demo30/assets/media/svg/brand-logos/google-icon.svg"
            alt=""
            style={{ width: "20px" }}
            className="me-2"
          />
          <span className="form-text text-black">Sign in with Google</span>
        </button>
        <button className="btn btn-outline-secondary w-50">
          <img
            src="https://preview.keenthemes.com/metronic8/demo30/assets/media/svg/brand-logos/apple-black.svg"
            alt=""
            style={{ width: "20px" }}
            className="me-2"
          />
          <span className="form-text text-black"> Sign in with Apple</span>
        </button>
      </div>
      <p className="form-text my-4">Or with email</p>

      <form className="col-5" onSubmit={handleSubmit}>
        <FormControl variant="outlined" className=" w-100 mb-3 " size="small">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            name="email"
            type="email"
            label="Email"
            className="rounded-3  "
          />
        </FormControl>
        <FormControl variant="outlined" className="w-100 mb-3" size="small">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            error={!errors}
            name="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            className="rounded-3"
          />
          <FormHelperText id="component-helper-text" className="text-danger">
            {validation}
          </FormHelperText>
        </FormControl>
        <FormControl variant="outlined" className="w-100 mb-3" size="small">
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            error={!errors}
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            className="rounded-3"
          />
        </FormControl>
        <div className="mb-3 form-check">
          <label className="form-text float-end" for="exampleCheck1">
            <a href="#">Forget password ?</a>
          </label>
        </div>
        <Stack direction="row" alignItems="center">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography variant="body2">
            I Accept the <a href="#">Terms</a>
          </Typography>
        </Stack>
        <button type="submit" className="btn btn-primary color-blue  w-100">
          Sign Up
        </button>
      </form>
      <p className="form-text my-4">
        Already have an Account? <a href="/sign-in">Sign in</a>
      </p>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import { Typography, Stack } from "@mui/material";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function Login() {
  const CUSTOMER_URL = "https://puuzket.onrender.com/customer";
  const navigate = useNavigate();
  const [errors, setErrors] = useState(true);
  const [validation, setValidation] = useState("");
  const [checked, setChecked] = useState(true);
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      customer_email: e.target.email.value,
      customer_password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(CUSTOMER_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    if (FETCHED_JSON.status === "success") {
      navigate("/");
      Swal.fire({
        title: "Баярлалаа",
        text: "Амжилттай бүртгүүллээ",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#e84f69",
      });
    } else {
      Swal.fire({
        title: "Баярлалаа",
        text: "Амжилтгүй ",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#e84f69",
      });
    }
    console.log(data);

    if (e.target.password.value.length < 3) {
      setValidation("Password must be at least 8 characters long");
      setErrors(false);

      // } else if (!/[A-Z]/.test(e.target.password.value)) {
      //   setValidation("Password must contain at least one uppercase letter");
      //   setErrors(false);
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
  }
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="container ">
      <form
        className="col-lg-6 d-flex flex-column  gap-3 mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="dark-blue text-center">Бүртгүүлэх</h1>
        <div className="w-100 hstack mx-auto">
          <button className="btn btn-outline-secondary me-3 w-50 p-2">
            <img
              src="https://preview.keenthemes.com/metronic8/demo30/assets/media/svg/brand-logos/google-icon.svg"
              alt=""
              style={{ width: "20px", height: "20px" }}
              className="me-2"
            />
            <span className="form-text text-black">Sign in with Google</span>
          </button>
          <button className="btn btn-outline-secondary w-50 p-2">
            <img
              src="https://preview.keenthemes.com/metronic8/demo30/assets/media/svg/brand-logos/apple-black.svg"
              alt=""
              style={{ width: "20px", height: "20px" }}
              className="me-2 "
            />
            <span className="form-text text-black"> Sign in with Apple</span>
          </button>
        </div>
        <div class="">
          <label className=" dark-blue mb-2">И-мэйл хаяг</label>
          <input
            class="form-control  p-3 "
            type="email"
            name="email"
            placeholder="И-мэйл хаяг "
          />
        </div>

        <FormControl variant="outlined" className="w-100 " size="small">
          <label className="dark-blue mb-2">Нууц үг үүсгэх</label>
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
                  className="me-1"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            className="rounded  p-2"
          />
          <div id="component-helper-text" className="text-danger">
            {validation}
          </div>
        </FormControl>

        <FormControl variant="outlined" className="w-100 " size="small">
          <label className="dark-blue mb-2">Нууц үг баталгаажуулах</label>
          <OutlinedInput
            error={!errors}
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            label="Password"
            className="rounded  p-2"
          />
          <div id="component-helper-text" className="text-danger">
            {validation}
          </div>
        </FormControl>

        <Stack direction="row" alignItems="center">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography variant="body2">Хүлээн зөвшөөрөх</Typography>
        </Stack>
        <button
          className=" btn pink-bg btn-dark fw-semibold  border-0 rounded-5 p-3 text-white w-50 mx-auto"
          type="submit"
        >
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
}

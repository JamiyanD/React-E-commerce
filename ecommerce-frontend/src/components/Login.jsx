import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
export default function Login() {
  const navigate = useNavigate();
  function onSubmit(e) {
    navigate("/");
    e.preventDefault();
  }
  return (
    <div className="container">
      <h1 className="my-5 dark-blue text-center col-4">Бүртгүүлэх</h1>
      <form className="d-flex  gap-5 justify-content-center">
        <div className="d-flex flex-column col-4 me-5" onSubmit={onSubmit}>
          <label className="fw-semibold dark-blue">
            Имэйл хаяг
            <input
              class="form-control mt-2 p-3"
              type=""
              name="email"
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </label>
          <label className="fw-semibold dark-blue mt-4">
            Нууц үг
            <input
              class="form-control my-2 p-3"
              type="text"
              name="password"
              placeholder="Нууц үгээ оруулна уу"
            />
          </label>
          <label className="fw-semibold dark-blue mt-4">
            Нууц үг баталгаажуулах
            <input
              class="form-control my-2 p-3"
              type="text"
              name="password"
              placeholder="Нууц үгээ баталгаажуулна уу"
            />
          </label>
        </div>
        <div className="d-flex flex-column col-4 ms-5 pt-5" onSubmit={onSubmit}>
          <label className="fw-semibold dark-blue">
            Имэйл хаяг
            <input
              class="form-control mt-2 p-3"
              type=""
              name="email"
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </label>

          <p className="text-secondary my-4">
            Таны имэйл хаяг руу нууц үг илгээнэ.
          </p>

          <button className="btn pink-bg btn-dark fw-semibold  border-0 rounded-4 p-3 text-white ">
            Бүртгүүлэх
          </button>
        </div>
      </form>
    </div>
  );
}

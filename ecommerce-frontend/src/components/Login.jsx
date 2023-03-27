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
    <div className="d-flex container gap-5 justify-content-center">
      <form className="d-flex flex-column col-4 me-5" onSubmit={onSubmit}>
        <h1 className="my-5 dark-blue">Нэвтрэх</h1>

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
        <div className="d-flex justify-content-between align-items-center">
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Сануулах"
            labelPlacement="end"
            className="text-secondary"
          />
          <p className="text-secondary">Нууц үгээ мартсан уу?</p>
        </div>
        <button className="btn pink-bg fw-semibold btn-dark border-0 rounded-4 p-3 text-white my-4">
          Нэвтрэх
        </button>
      </form>
      <form className="d-flex flex-column col-4 ms-5" onSubmit={onSubmit}>
        <h1 className="my-5 dark-blue">Бүртгүүлэх</h1>

        <label className="fw-semibold dark-blue">
          Имэйл хаяг
          <input
            class="form-control mt-2 p-3"
            type=""
            name="email"
            placeholder="Имэйл хаягаа оруулна уу"
          />
        </label>

        <p className="text-secondary my-5">
          Таны имэйл хаяг руу нууц үг илгээнэ.
        </p>

        <button className="btn pink-bg btn-dark fw-semibold  border-0 rounded-4 p-3 text-white ">
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
}

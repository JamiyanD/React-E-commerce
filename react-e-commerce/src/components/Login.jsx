import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  function onSubmit(e) {
    navigate("/");
    e.preventDefault();
  }
  return (
    <div>
      <form className="signup-container vstack" onSubmit={onSubmit}>
        <h1 className="my-4 fw-bold">Sign in</h1>

        <label className="fw-semibold mt-3">Email*</label>
        <input
          class="form-control"
          type=""
          name="email"
          placeholder="Enter your email"
        />
        <label className="fw-semibold mt-3">Password*</label>
        <input
          class="form-control"
          type="text"
          name="password"
          placeholder="Create a password"
        />
        <label className="text-muted">Must be at least 8 characters.</label>
        <button className="btn pink text-white my-3">Create account</button>
        <label className="text-muted text-center">
          Already have an account? <strong className="Pink">Log in</strong>
        </label>
      </form>
    </div>
  );
}

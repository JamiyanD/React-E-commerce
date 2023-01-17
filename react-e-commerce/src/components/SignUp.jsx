import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MainMenu from './MainMenu';
import Header from './Header'
export default function SignUp({  }) {
 const location = useLocation();
   console.log(location)
   const addWishlist = location.state
    return (
        <div>
        <form className="SignUp-container vstack">
            <h1 className="my-4 fw-bold">Sign up</h1>
            <label className="fw-semibold mt-2">Name*</label>
            <input type="text" name="username" placeholder="Enter your name" class="form-control" />
            <label className="fw-semibold mt-3">Email*</label>
            <input class="form-control" type="" name="email" placeholder="Enter your email" />
            <label className="fw-semibold mt-3">Password*</label>
            <input class="form-control" type="text" name="password" placeholder="Create a password" />
            <label className="text-muted">Must be at least 8 characters.</label>
            <button className="btn pink text-white my-3" onClick={(e) => {
                e.preventDefault();
            }}>Create account</button>
            <label className="text-muted text-center">Already have an account? <strong className="Pink">Log in</strong></label>
        </form>
        </div>
    )
}
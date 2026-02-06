import React from "react";
import { Link } from "react-router-dom";

export default function Regisztracio() {
    return (
        <div className="m-auto" style={{ maxWidth: "400px" }}>
            <h1 className="text-center">Regisztráció</h1>
            <form>
                
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">
                        Felhasználónév:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Teljes név"
                        name="name"
                    />
                    <div>
                        <span className="text-danger"></span>
                    </div>
                </div>

                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email cím:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="email@pelda.hu"
                        name="email"
                    />
                    <div>
                        <span className="text-danger"></span>
                    </div>
                </div>

                
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Jelszó:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="jelszó"
                        name="password"
                    />
                    <div>
                        <span className="text-danger"></span>
                    </div>
                </div>

                
                <div className="mb-3">
                    <label htmlFor="pwd_confirm" className="form-label">
                        Jelszó megerősítése:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd_confirm"
                        placeholder="jelszó újra"
                        name="password_confirmation"
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success w-100">
                        Regisztráció
                    </button>

                    <p className="mt-3">
                        Már van fiókja?
                        <Link className="nav-link text-info" to="/bejelentkezes">
                            Jelentkezzen be!
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
import React from 'react';

const Kezdolap = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Üdvözöllek a Laravel-React Appban!</h3>
                        </div>
                        <div className="card-body">
                            <p className="lead">
                                Ez a kezdőoldal, amely a React frontend és a Laravel 11 API kapcsolatát mutatja be.
                            </p>
                            <hr />
                            <h5>Funkciók:</h5>
                            <ul>
                                <li>Biztonságos regisztráció és bejelentkezés</li>
                                <li>Laravel Sanctum alapú hitelesítés</li>
                                <li>Reaktív felhasználói felület</li>
                            </ul>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Kérlek, használd a fenti menüt a navigációhoz!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kezdolap;
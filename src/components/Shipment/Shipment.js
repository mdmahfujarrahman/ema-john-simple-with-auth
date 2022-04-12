import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import "./Shipment.css";

const Shipment = () => {
    const[user] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    

    const handleNameBlur = (e) => {
        setName(e.target.value);
    };
    const handleAddressBlur = (e) => {
        setAddress(e.target.value);
    };
    const handleEmailsBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneBlur = (e) => {
        setPhone(e.target.value);
    };

     const handleCreateUser = (e) => {
         e.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
     };
    
    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className="form-title">Shipping Information</h2>
                    <form onSubmit={handleCreateUser} action="">
                        <div className="input-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                onBlur={handleNameBlur}
                                type="text"
                                name="name"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={user?.email}
                                onBlur={handleEmailsBlur}
                                readOnly
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Address</label>
                            <input
                                onBlur={handleAddressBlur}
                                type="text"
                                name="address"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Phone Number</label>
                            <input
                                onBlur={handlePhoneBlur}
                                type="number"
                                name="phone-number"
                                required
                            />
                        </div>
                        <input
                            className="form-submit shipment-btn"
                            type="submit"
                            value="Add Shipping"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;

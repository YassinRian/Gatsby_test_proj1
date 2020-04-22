import React from "react";
import Header from "../components/header.js";
import { Link} from "gatsby";

export default () => (
    <div style={{ color: `teal`}}>
        <Link to="/">Home</Link>
        <Header headerText="Contact Page van Fadoua"></Header>
        <p>
            Send us a message!
        </p>
    </div>
)

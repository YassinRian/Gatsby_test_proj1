import React from "react";
import Header from "../components/header.js";
import { Link} from "gatsby";
import Container from "../components/container.js"

export default () => (
    <Container>
        <div>
            <Link to="/">Home</Link>
            <Header headerText="Contact Page van Fadoua"></Header>
            <p>
                Send us a message!
            </p>
        </div>
    </Container>
)

import React from "react";
import { Link } from "gatsby";
import Header from "../components/header.js";
import Container from "../components/container"

export default () => (
    <Container>
        <div>
            <Link to="/contact/" style={{margin: `0 10px`}}>Contact</Link>
            <Link to="/about/" style={{margin: `0 10px`}}>About</Link>
            <Header headerText="Hello Gatsby!"></Header>
            <p>
                What a world.
            </p>
            <img src="https://source.unsplash.com/random/400x200" alt=""/>
        </div>
    </Container>
)

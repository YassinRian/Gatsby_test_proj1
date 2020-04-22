import React from "react"
import Header from "../components/header.js"
import Container from "../components/container"
import aboutStyles from "../styles/about.module.css"
import { Link } from "gatsby"

const User = props => (
    <div className={aboutStyles.user}>
        <img alt="" src={props.avatar} className={aboutStyles.avatar}/>
        <div className={aboutStyles.description}>
            <h2 className={aboutStyles.username}>{props.username}</h2> 
            <p className={aboutStyles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <Container>
        <Link to="/">Home</Link>
        <Header headerText="Header van de nieuwe site"></Header>
        <h3>About CSS Modules</h3>
        <p>CSS Modules are cool</p>
        <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'am Jane Doe. Porttitor lacus, luctus accumsan tortor posuere ac ut consequat."
        ></User>
        <User
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'am Bob Smith, a vertically aligned type of guy. Porttitor lacus, luctus accumsan tortor posuere ac ut consequat."
        ></User>
    </Container>
)

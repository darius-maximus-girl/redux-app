import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <Jumbotron>
            <h1>Hello from Homepage!</h1>
            <p>
                <Link to="/about">
                    <Button variant="primary">Learn more</Button>
                </Link>
            </p>
        </Jumbotron>
    );
}

export default HomePage;
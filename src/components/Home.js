import React from "react";
//import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//Home page welcome
class Home extends React.Component {

    render() {
        return (
            <>
                <Container style={{width: '600px'}}>
                    <Row>
                        <Col style={{fontSize: '50px', margin: '30px'}}>
                            <h2>Welcome to Habitual</h2>
                        </Col>
                    </Row>
                    <Row> 
                        <Col style={{fontSize: '20px', margin: '20px'}}>We're glad you're here! We want to help you achieve your goal to be the best version of "You"; by creating healthy habits or breaking unhealthy habits.</Col>
                    </Row>
                    <Row>
                        <Col style={{fontSize: '20px', margin: '20px'}}>
                        To get started "add a habit" you would like to work on. Then you are able to add the frequency at which you are committing to working on it and see your growth in "check progress".
                        </Col>
                        </Row>
                </Container>
            </>

        );
    }
}

export default Home;
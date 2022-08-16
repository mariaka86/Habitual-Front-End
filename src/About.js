import React from 'react';
import Card from 'react-bootstrap/Card';

class About extends React.Component{

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Mary</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Mary graduated from Kirkwood in 2020 and has an associates in Allied Health Sciences(medical assisting). She had been working in the healthcare field for the last two years through the pandemic. But has now decided to switch careers and is now a student at the Delta V Codeschool pursuing a career in Software Development
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Allie</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Allie graduated from Mount Mercy University in 2022. She has her Bachelors of Science degree with her major in psychology and her minors in Criminal Justice and Child Studies. She is now a student at Delta V Code school trying to pursue a career in Software Development 
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Jack</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Teresa</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        She recently returned to the area after living the past seven years in the San Francisco Bay area. She is retired from Procter & Gamble after 22 years of service. Her most recent role with P&G was that of Analyst I (Technical and Administrative), supporting a NorCal regional sales team. Her team broke all sales records for four consecutive years. She is currently pursuing a Software Development certification through Delta V. My hobbies include walking, biking, and gardening.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
};

export default About;

import React, { Component } from 'react';
import axios from 'axios';
import { Container } from '@chakra-ui/react';
import { Alert, AlertIcon, Heading } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

const SERVER = process.env.REACT_APP_SERVER_URL;

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: undefined,
			habits: 0
		};
	}

	componentDidMount = () => {
		this.getBackend();
	};

	getBackend = async () => {
		await axios
			.get(`${SERVER}/`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
    };
    
    
	render() {
		const totalHabits = this.state.habits;
		return (
			<>
				<Heading>This will be the dashboard for our habits!</Heading>

                <Container>
                    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                        <GridItem w='100%' h='10' bg='red.400'/>
                        <GridItem w='100%' h='10' bg='red.400'/>
                        <GridItem w='100%' h='10' bg='red.400'/>
                        <GridItem w='100%' h='10' bg='red.400'/>
                        <GridItem w='100%' h='10' bg='red.400'/>
                    </Grid>
                </Container>



				{totalHabits === 0 && (
					<Alert status='error'>
						<AlertIcon />
						Looks like you don't have any habits!
					</Alert>
				)}
			</>
		);
	}
}

export default Dashboard;

import React, { Component } from 'react';
import axios from 'axios';
import {
	Grid,
	GridItem,
	Button,
	Container,
	SimpleGrid,
	Alert,
	AlertIcon,
	Heading,
	Box
} from '@chakra-ui/react';
import HabitModal from './Modal';
import HabitCard from './HabitCard';

const SERVER = process.env.REACT_APP_SERVER_URL;

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			_id: '',
			user: undefined,
			habit_quantity: 0,
			habits: [],
			showModal: false
		};
	}
	handleOnHide = () => {
		this.setState({
			showModal: false
		});
	};

	handleOnShowModal = () => {
		this.setState({
			showModal: true
		});
	};

	componentDidMount = () => {
		this.getBackend();
	};

	getBackend = async () => {
		await axios
			.get(`${SERVER}/habits`)
			.then((res) => {
				console.log(res.data); //* [{...}] Data is an array of objects
				this.setState({ user: res.data[0].name }); //* Zoe
				console.log(this.state.user);
				this.setState({ habit_quantity: res.data[0].habits.length });
				console.log(this.state.habit_quantity);
				this.setState({ habits: res.data[0].habits });
				console.log(
					`this is the state of habits: ${JSON.stringify(this.state.habits)}`
				);
				this.setState({ _id: res.data[0]._id });
				console.log(this.state._id);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	addHabit = async (newHabit) => {
		console.log(`adding habit ${JSON.stringify(newHabit)}`);
		newHabit._id = this.state._id;
		console.log(JSON.stringify(newHabit));

		await axios
			.post(`${SERVER}/habits/add`, newHabit)
			.then((res) => {
				console.log(res);
				this.getBackend();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	render() {
		const totalHabits = this.state.habit_quantity;
		return (
			<>
				<SimpleGrid spacing={5} columns={1}>
					<Box>
						<Heading>Welcome to your habit dashboard {this.state.user}!</Heading>
						{this.state.habit_quantity > 0 &&
							this.state.habits.map((habit, idx) => {
								return (
									<HabitCard
										key={idx}
										count={this.state.count}
										habit_name={habit.habit_name}
										habit_goal={habit.habit_goal}
									/>
								);
							})}
					</Box>
					<HabitCard count={this.state.count} habit_name={'jellybean'} />
					<Box>
						<Button
							as={'button'}
							onClick={this.handleOnShowModal}
							colorScheme='purple'
						>
							Modal
						</Button>
					</Box>
				
				{/* <Container>
					<Grid templateColumns='repeat(5, 1fr)' gap={6}>
						<GridItem w='100%' h='10' bg='red.400' />
						<GridItem w='100%' h='10' bg='red.400' />
						<GridItem w='100%' h='10' bg='red.400' />
						<GridItem w='100%' h='10' bg='red.400' />
						<GridItem w='100%' h='10' bg='red.400' />
					</Grid>
				</Container> */}
				<Box>
					<HabitModal
						showModal={this.state.showModal}
						onHide={this.handleOnHide}
						handleOnHide={this.handleOnHide}
					/>
				</Box>
				

				{totalHabits === 0 && (

					<Alert status='error'>
						<Box>
							<AlertIcon />
							Looks like you don't have any habits!
						</Box>
					</Alert>

				)}
				</SimpleGrid>
			</>
		);
	}
}

export default Dashboard;

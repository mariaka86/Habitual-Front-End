import React, { Component } from 'react';
import axios from 'axios';
import {
	Grid,
	GridItem,
	Button,
	Container,
	Alert,
	AlertIcon,
	Heading
} from '@chakra-ui/react';
import HabitModal from './Modal';
import HabitCard from './HabitCard';

const SERVER = process.env.REACT_APP_SERVER_URL;

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
			})
			.catch((err) => {
				console.error(err);
			});
	};

	render() {
		const totalHabits = this.state.habit_quantity;
		return (
			<>
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

				<HabitCard count={this.state.count} habit_name={'jellybean'} />

				<Button
					as={'button'}
					onClick={this.handleOnShowModal}
					colorScheme='purple'
				>
					Add A New Habit
				</Button>

				{/* <Container>
					<Grid templateColumns='repeat(5, 1fr)' gap={6}>
						<GridItem w='100%' h='10' bg='red.400' />
						<GridItem w='100%' h='10' bg='red.400' />
						<GridItem w='100%' h='10' bg='red.400' />
						<GridItem w='100%' h='10' bg='red.400' />
						<GridItem w='100%' h='10' bg='red.400' />
					</Grid>
				</Container> */}

				<HabitModal
					showModal={this.state.showModal}
					onHide={this.handleOnHide}
					handleOnHide={this.handleOnHide}
				/>

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

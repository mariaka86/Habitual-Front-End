import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


class HabitModal extends React.Component {
	handleSubmit = async (evt) => {
		evt.preventDefault();
		console.log(`Submitting form`);

		let habitName = evt.target.habitName.value;
		let habitGoal = evt.target.habitGoal.value;
		let habitFrequency = evt.target.habitFrequency.value;
		// let habitSchedule = evt.target.habitSchedule.value;
		console.log(
			` habit name: ${habitName}, habit goal: ${habitGoal}, Habit Frequency: ${habitFrequency}`
    );
    
    let newHabit = {
      habit_name: habitName,
      habitGoal: habitGoal,
      habitFrequency: habitFrequency
    }
    this.props.addHabit(newHabit);
  };
  

	render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.handleOnHide}>
				<Modal.Header closeButton>
					<Modal.Title>Add Your Habit</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group className='habitName' controlId='habitName'>
							<Form.Label>Habit Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ex: Drink more water'
								autoFocus
							/>
						</Form.Group>

						<Form.Group className='habitGoal' controlId='habitGoal'>
							<Form.Label>Habit Goal</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ex: Drink 72oz of water everyday'
								autoFocus
							/>
						</Form.Group>

						<Form.Group className='habitFrequency' controlId='habitFrequency'>
							<Form.Label>
								How often do you want to work on your goal?
							</Form.Label>
							<Form.Control type='number' autoFocus />
						</Form.Group>

						<Form.Group className='habitDays' controlId='habitSchedule'>
							<Form.Label>
								What days of the week do you want to work on your goal?
							</Form.Label>

							<Form.Check type='checkbox' label='Monday' />
							<Form.Check type='checkbox' label='Tuesday' />
							<Form.Check type='checkbox' label='Wednesday' />
							<Form.Check type='checkbox' label='Thursday' />
							<Form.Check type='checkbox' label='Friday' />
							<Form.Check type='checkbox' label='Saturday' />
							<Form.Check type='checkbox' label='Sunday' />
						</Form.Group>
						<Button type='submit' variant='primary'>
							Add
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={this.props.handleOnHide}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
export default HabitModal;

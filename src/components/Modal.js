import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class HabitModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  handleOnHide = () => {
    this.setState({
      showModal: true,
    });
  };

  handleOnShowModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.handleOnHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="habitName">
              <Form.Label>Habit Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Drink more water"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="habitGoal" controlId="nameHabitGoal">
              <Form.Label>Habit Goal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Drink 72oz of water everyday"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="habitFrequency" controlId="formHabitFreq">
              <Form.Label>
                How often do you want to work on your goal?
              </Form.Label>
              <Form.Control type="number" autoFocus />
            </Form.Group>
            <Form.Group className="habitDays" controlId="formHabitDays">
              <Form.Label>
                What days of the week do you want to work on your goal?
              </Form.Label>
              <Form.Check type="checkbox" label="Monday" />
              <Form.Check type="checkbox" label="Tuesday" />
              <Form.Check type="checkbox" label="Wednesday" />
              <Form.Check type="checkbox" label="Thursday" />
              <Form.Check type="checkbox" label="Friday" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleOnHide}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleOnHide}>
            Add Your Habit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default HabitModal;

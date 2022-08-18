import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import {Progress} from '@chakra-ui/progress';



class HabitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      count: 0
    }
  }

  increaseHabit = () => {
    this.setState({count: this.state.count + 1 });
    console.log(`increase count: ${this.state.count}`);;
  
  };

  decreaseHabit = () => {
    this.setState({count: this.state.count -1 })
    console.log(`decreasing count: ${this.state.count}`);
  }

  render() { 
    return (
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.habit_name}</Card.Title>
          <Card.Subtitle>{this.props.habit_goal}</Card.Subtitle>
          <Card.Text>{this.state.count}</Card.Text>
          <Card.Text>
            <Button variant="primary"onClick={this.increaseHabit}>➕</Button>
          </Card.Text>
          <Card.Text>
            <Button variant="primary" onClick={this.decreaseHabit}>➖</Button>
          </Card.Text>
          <Progress value={this.state.count} colorScheme='pink'/>
          </Card.Body>
      </Card>
      </>
      );
  }
}
 
export default HabitCard;

import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';

class UserPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username : this.props.username,
			email: this.props.email,
			profilePic: this.props.profilePic,
			status: this.props.status,
			strikes: this.props.streaks
		}
	}
	render(){
		if (this.state.profilePic){
			var profileImage = this.state.profilePic;
		}
		else{
			profileImage = "";
			//import default image
		}
		return (
			<Container>
			<Row>
			
			<Col>
			img src = {profileImage} alt = "profile picture" width = "150"/>
			</Col>
			<Col>
				<h1> User Page</h1>
				<Form className = "form">
		<p>(props.status)</p>
		<Form.Group controlId = "formCategory1">
			<Form.Label> Username </Form.Label>
			<Form.Control type = "text" defaultValue = {this.state.username}/>
		</Form.Group>
		
		<Form.Group controlId = "formCategory2">
			<Form.Label> Email </Form.Label>
			<Form.Control type = "email" defaultValue = {this.state.email}/>
		</Form.Group>
		
		<Form.Group controlId = "formCategory3">
			<Form.Label> Profile Picture </Form.Label>
			<Form.Control type = "file" name = "profilePicture"/>
		</Form.Group>
		
		<Form.Group controlId = "formCategory4">
			<Form.Label> Strike Count </Form.Label>
			<Form.Control type = "string" defaultValue = {this.state.streaks}/>
		</Form.Group>
		
		<Button variant = "primary" > Update Profile </Button>
	
		</Form>
		  </Col>
		  <Col></Col>
			</Row>
			</Container>
				
		)
	}
}

const mapStatetoProps = (state) => {
	return{
		username: state.user.username,
		email: state.user.email,
		profilePic: state.user.profilePic,
		status: state.user.status,
		streaks : state.user.streaks
	}
}

export default connect(mapStatetoProps)(UserProfile);


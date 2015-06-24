import React from "react";
import Bootstrap from "react-bootstrap";

let {Grid, Row, Col, Input, Button} = Bootstrap;

export default class Header extends React.Component {
	
	render() {
		
		return (
			<Grid className="header hidden-xs">
				<Row>
					<Col md={3}>
						<div className="logo"></div>
					</Col>
					<Col md={6}>
						<div className="searchArea">
							<Input type="text" buttonAfter={<Button>Search</Button>}/>
						</div>
					</Col>
					<Col md={3}>
						<div className="accountArea">
							<Button>Regist</Button>
							<Button>Login</Button>
						</div>
					</Col>
				</Row>
			</Grid>
		);	
	}
}
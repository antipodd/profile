// ******************************************************************************
// contact.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"
import helpers from "../utils/helpers"

class Contact extends React.Component{
	constructor(props) {
		super(props); 
		this.state = { name: '', email: '', message: '', isOpen: true};
		this.onChange = this.onChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
  		this.validateEmail = this.validateEmail.bind(this);
  		this.toggle = this.toggle.bind(this);
	}

	onChange(e) {
    	this.setState({[e.target.name]: e.target.value})
  	}

  	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state.name)
		console.log(this.state.email)
		console.log(this.state.message)
		helpers.sendMail({name: this.state.name, email: this.state.email, text: this.state.message})
			.then((result) => {
					this.setState({name: '', email: '', message: ''});
					this.toggle();
				})
	}

	validateEmail (value) {
	    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(value);
	}

	toggle () {
    	this.setState({
      		isOpen: !this.state.isOpen
    	});
  	}

	render() {
		return (
			<div>
				<div className="top-color">
					<div className="page-title">
						<h1 className="text-center"> Contact Karel </h1>
					</div>
				</div>
				{this.state.isOpen ? 	 
					<div className="container">
						<div className="row contact">
							<div className="col-md-12">
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<label htmlFor="name">Full Name</label>
										<br />
										<input 
											className="form-control"
											value={this.state.name} // input is now a controlled component, value set by state
											name="name"
											
											onChange={this.onChange}
											required />
									</div>
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<br />
										<input 
											className="form-control"
											value={this.state.email} // input is now a controlled component, value set by state
											name="email"
											onChange={this.onChange}
											
											required />
									</div>
									<div className="form-group">
										<label htmlFor="message">Message</label>
										<br />
										<textarea 
											className="form-control"
											value={this.state.message} // input is now a controlled component, value set by state
											name="message"
											rows="10"
											onChange={this.onChange}
											required />
									</div>
									<button 
										type="submit"
										className="btn btn-success btn-group-lg">
										Submit
									</button>
									
					  			</form>
					  		</div>
					  	</div>
					</div> : 
					<div className="container">
						<div className="row contact">
							<div className="col-md-12">
								<h1 className="text-center">Your message has been sent!</h1>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default Contact;
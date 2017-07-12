// ******************************************************************************
// contact.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"

class Contact extends React.Component{
	constructor(props) {
		super(props); 
		this.state = { name: '', email: '', message: ''};
		this.onChange = this.onChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
  		this.validateEmail = this.validateEmail.bind(this);
	}

	onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  	}

  	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state.name)
		console.log(this.state.email)
		console.log(this.state.message)
		
	}

	validateEmail (value) {
	    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(value);
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="text-center"> Contact section </h1>
				</div>
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
				
			</div>
		);
	}
}

export default Contact;
var AppointmentForm = React.createClass({

	handleChange: function(e){
		var name = e.target.name;
		obj = {};
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	},

	render: function(){
		return(
			<div>
				<h2>Make a new appointment</h2>
				<form>
					<input name="title" placeholder="Appointment title" 
						value={this.props.input_title}
						onChange={this.handleChange} />
					<input name="apt_time" placeholder="Date and time" 
						value={this.props.input_apt_time}
						onChange={this.handleChange} />
					<input type="submit" value="Make Appointment" />
				</form>
			</div>
		)
	}
});
var AppointmentForm = React.createClass({

	handleChange: function(e){
		var name = e.target.name;
		obj = {};
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	},

	handleSubmit: function(e) {
		e.preventDefault();
		this.props.onFormSubmit();
	},

	setApptTime: function(e){
		var name = 'apt_time';
		obj = {};
		if (obj[name] = e.toDate()) {
			this.props.onUserInput(obj);
		}
	},

	render: function(){
		var inputProps = {
			name: 'apt_time'
		};

		return(
			<div>
				<h2>Make a new appointment</h2>
				<form onSubmit={this.handleSubmit}>
					<input name="title" placeholder="Appointment title" 
						value={this.props.title}
						onChange={this.handleChange} />

					<Datetime input={false} open={true}
						inputProps={inputProps}
						value={this.props.apt_time}
						onChange={this.setApptTime} />
					<input type="submit" value="Make Appointment" />
				</form>
			</div>
		)
	}
});
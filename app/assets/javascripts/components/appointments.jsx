var Appointments = React.createClass({

	getInitialState: function(){
		return {
			appointments: this.props.appointments,
			title: 'Team building',
			apt_time: 'Tomorow at 9am'
		}
	},
	
	handleUserInput: function(obj){
		this.setState(obj)
	},

	render: function() {
		return(
			<div>
				<AppointmentForm 
					input_title={this.state.title} 
					input_apt_time={this.state.apt_time}
					onUserInput={this.handleUserInput} />
				<AppointmentsList appointments={this.state.appointments} />
			</div>
		)
	}
});
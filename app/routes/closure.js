import Ember from 'ember';

export default Ember.Route.extend({
	listOfstudents: [],
	beforeModel(){
		this.reset();
	},
	model(){
		return this.get('listOfStudents');
	},
	reset(){
		let st=this.get('listOfstudents');
		st.clear();
		st.pushObject('Tiffany');
		st.pushObject('Zack');
		st.pushObject('George');
	},
	actions: {
		removeRoute(){
			this.get('listOfstudents').popObject();
		},
		resetRoute(){
			this.reset();
		}
	}
});

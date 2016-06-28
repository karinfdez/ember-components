import Ember from 'ember';

export default Ember.Component.extend({
	// This fires when the components is initialized
	init(){
		this._super(...arguments);
		this.setup();
	},
// Implementing actions in components
	actions:{
		remove(){
			this.get('listOfStudents').popObject();
		},
		reset(){
			this.setup();
		}
	},
	setup(){
		let st=this.set('listOfStudents',[]);
		st.clear();
		st.pushObject('Erik');
		st.pushObject('Bob');
		st.pushObject('Suze');
		st.pushObject('Lola');
	}
});

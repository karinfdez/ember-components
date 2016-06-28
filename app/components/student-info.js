import Ember from 'ember';
const {$}=Ember
export default Ember.Component.extend({
	name: 'Erick',
	age: 12,
	nickName: 'E',
// Click event on the student-info block
	click(){
		$('html').fadeToggle('slow','linear');
		$('html').delay(250).fadeIn();
	}
});

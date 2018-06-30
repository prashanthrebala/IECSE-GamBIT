var currentQuestion = 0;
var duration = 60;
var numberOfQuestions = 15;

var participant = 

{
	'startTimeStamp': 0,
	'endTimeStamp' : 0,
	'currency': 1500,
	'encrypted': [
					'be90fe5d1060fe5f373a287eb8c0959bf2aa302f0333864185e3052adccc25e3',
					'f2e8f28667d146c465fc658612b4bf9b653d52b26cd1e03dd30371f0e4681960',
					'97b25caab3de1e76b741167c346cb929e7cb43c45981583943009b3b437bfb35',
					'44b455908b12169bfd7c3fa9089d2c956497f6ba1eede3002611ed13594cc898',
					'b28f77e95beeb963d58e08eb304139757a1eb5415cde9ab873c466011630c8d8'
				]
};

var ngui = require('nw.gui');
var nwin = ngui.Window.get();
var DataStore = require('nedb');
var path = require('path');
var db = new DataStore(
{
	filename : path.join(ngui.App.dataPath, 'gamBIT.db'),
	autoload : true
});
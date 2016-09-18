var profile= {
	firstName: null,
	lastName: null
};


//Run code, only if picture is clicked

function askQuestions(){

	var firstName= prompt ('What is your first name?');
	var lastName= prompt ('What is your last name?');
	 
	var fullName= firstName + ' ' + lastName;
	console.log(fullName);

	var age= prompt ('How old are you?');
	age= parseInt(age);

	if (age>=18) {
		console.log('User is an adult');
	} else if (age>=13){
		console.log('User is a teenager');
	} else {
		console.log('User is a child')
	}

	var favColor= prompt ("What is your favourite colour?");

	favColor= favColor.toLowerCase();
	if (favColor== 'red' || 
		favColor=='green' || 
		favColor=='blue' || 
		favColor=='yellow') {
		$('h1').css('color', favColor);
	}

	if (firstName == 'General' && lastName != 'Assembly') {
		console.log('User may be greeted')
		alert('Hello!')
	}
}


//When the page has loaded 
$(function(){
	$('img').on('click', askQuestions);

//When the user clicks an h3 element
$ ('h3').on('click',function(){


//Toggle the next section
$ (this).next().slideToggle(2000);
});

});

function isSpaceChar(char){ return (char < 33 || char > 126);}

function trimlines(string)
{
	var lines = string.split("\n");
	var ret = "";
	for(let i=0;i<lines.length;i++)
		ret += dropSpaceChars(lines[i]) + "\n";
	return dropSpaceChars(ret);
}

function dropSpaceChars(string)
{
	var x = 0, y = string.length - 1;
	while(isSpaceChar(string.charCodeAt(x))) x++;
	while(isSpaceChar(string.charCodeAt(y))) y--;
	return string.substr(x, y - x + 1);
}

/*
Question Link Format
<div id="qn13" class="questionLink" onclick="displayQuestion(13)">
	<div id="qn13T" class="questionNumber">
		Question 13
	</div>
	<div id="qn13S" class="questionStatus">
		<div>
			7
		</div>
	</div>
</div>
*/

var randomCounter = 0;

function setVariables()
{

	var questionLinksHTML = "<hr style='width: 100%;'>";
	for(let i=1;i<=numberOfQuestions;i++)
	{
		questionLinksHTML += "<div id='qn" + i + "' class='questionLink' onclick='displayQuestion("+i+")'>";
		questionLinksHTML += "<div id='qn" + i + "T' class='questionNumber'>Question " + i + "</div>";
		questionLinksHTML += "<div id='qn" + i + "S' class='questionStatus'><div>" + 
								(questions[i]['solved'] ? '&#10003;' : (questions[i]['bought'] ? questions[i]['attempts'] : "")) + "</div></div>";
		questionLinksHTML += "</div>" + (i == numberOfQuestions ? "<hr style='width: 100%;'>" : "<hr>");
	}
	$('#sideBarID').html(questionLinksHTML);

	for(let i=1;i<=numberOfQuestions;i++) if(questions[i]['bought'])
	{
		if(questions[i]['solved'])
			$("#qn" + i + "S").css({'border' : '2px solid #37B76C', 'color' : '#37B76C'});
		else if(questions[i]['attempts'] == 0)
			$("#qn" + i + "S").css({'border' : '2px solid #FF3F2F', 'color' : '#FF3F2F'});
		else
			$("#qn" + i + "S").css({'border' : '2px solid #f7b731', 'color' : '#f7b731'});
	}

	$('#countDown').countdown(participant['endTimeStamp'])
	.on('update.countdown', function(event) 
	{
		var format = '%H:%M:%S';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) 
	{
		$(this).text("00:00:00");
		$("#submitButton").css("pointer-events","none");
		alert('Your time\'s up!');
	});
	nwin.show();
	nwin.maximize();
}

function getTable()
{
	var tableContent = "<div class='tableOfScores'><div class='tableOfScoresRow'><div>Problem</div><div>Multiplier</div><div>Score</div></div><hr>";
	for(let i=1;i<=numberOfQuestions;i++)
	{
		var div1 = "<div>" + i + "</div>";
		var div2 = "<div>" + questions[i]['multiplier'] + "</div>";
		var div3 = "<div>";
		if(questions[i]['bought'])
		{
			if(questions[i]['solved'])
				div3 += "<span style='color: #37B76C'>" + questions[i]['score'] + "</span>";
			else if(questions[i]['attempts'] == 0)
				div3 += "<span style='color: #FF3F2F'>" + (questions[i]['score'] / questions[i]['multiplier']) + "</span>";
			else
				div3 += "<span style='color: #f7b731'>" + questions[i]['score'] + "</span>";
		}
		else
			div3 += "0";
		div3 += "</div>";

		tableContent += "<div class='tableOfScoresRow'>" + div1 + div2 + div3 + "</div><hr>";
	}
	tableContent += "</div>";
	return tableContent;
}

function displayQuestion(n)
{
	closeNav();
	currentQuestion = n;
	$('#appHeaderID').text("Question " + currentQuestion);
	if(questions[currentQuestion]['solved'])
		$('#questionDescriptionID').html(questionStatements[currentQuestion] + "<br><br><br> You have solved this question");
	else if(questions[currentQuestion]['bought'])
	{
		let remainingAttempts = questions[currentQuestion]['attempts'];
		if(remainingAttempts > 0)
			$('#questionDescriptionID').html(questionStatements[currentQuestion] + "<h4>Test Case</h4>" + testcases[currentQuestion][3 - remainingAttempts]);
		else
			$('#questionDescriptionID').html(questionStatements[currentQuestion] + "<h4>Test Case</h4>" + "You're out of attempts :(");
	}
	else
		$('#questionDescriptionID').html(questionStatements[currentQuestion] + "<br><br><br><b>Please buy the question to view the test case</b>");
	$('#answerText').val('');
	if(!questions[currentQuestion]['bought'])
	{
		$('#submitButton').text("Buy");
		$('#answerText').prop({'placeholder': "Please buy this question first", 'disabled': true});
	}
	else
	{
		$('#submitButton').text("Submit");
		$('#answerText').prop({'placeholder': "Enter your output here...", 'disabled': false});
	}
}

function buyQuestion()
{
	$('#mulSpecifier').text("Multiplier: " + questions[currentQuestion]['multiplier']);
	$("#purchaseAmount").val('');
	$('#purchaseConfirmationModal').delay(100).fadeIn();
}

function sellQuestion(string)
{
	let index = participant['encrypted'].indexOf(string);
	if(index >= 0 && questions[currentQuestion]['attempts'] == 0)
	{
		participant['encrypted'].splice(index, 1);
		participant['currency'] += questions[currentQuestion]['score'] / questions[currentQuestion]['multiplier'];
		$('#sDinner2').text(participant['currency']);
		$('#answerText').val('');
		alert("You have received " + (questions[currentQuestion]['score'] / questions[currentQuestion]['multiplier']) + " coins");
		return true;
	}
	return false;
}

function confirmPurchase()
{
	var amount = parseInt($("#purchaseAmount").val());
	if(!amount || amount <= 0 || amount > participant['currency'])
	{
		alert("Please enter a valid amount");
		return;
	}
	if(confirm("Are you sure you want to buy it for " + amount + " coins?"))
	{
		questions[currentQuestion]['bought'] = true;
		questions[currentQuestion]['score'] = questions[currentQuestion]['multiplier'] * amount;
		participant['currency'] -= amount;
		var id = "#qn"+currentQuestion+"S";
		$(id).css({'border' : '2px solid #f7b731', 'color' : '#f7b731'});
		$(id + " > div").text(questions[currentQuestion]['attempts']);
		$('#sDinner2').text(participant['currency']);
		closePurchaseModal();
		displayQuestion(currentQuestion);
		submit(false);
	}
}

function closePurchaseModal()
{	$('#purchaseConfirmationModal').delay(100).fadeOut();}

function openNav()
{ 
	$('#myScore').text(participant['currency']);
	$('#tableOfScoresID').html(getTable());
	$('#mySidenav').css({'width' : '28%', 'transition' : '0.3s'});
}

function closeNav()
{ 	$('#mySidenav').css({'width' : '0', 'transition' : '0.0s'});}

function submit(byUser)
{
	submitX(byUser, function()
	{
		db.remove({}, { multi: true }, function (err, numRemoved) 
		{
			db.insert(
			{
				participant: sjcl.encrypt(author, JSON.stringify(participant)),
				questions: sjcl.encrypt(author, JSON.stringify(questions))
			}, function(err, newDocs){
				console.log(err);
				console.log(newDocs);
			});
		});
	});
}

function submitX(byUser, callback) 
{

	if(!byUser) return callback();

	if(currentQuestion <= 0)
		return callback();

	var typedAnswer = $('#answerText').val();
	typedAnswer = trimlines(typedAnswer);

	if(!questions[currentQuestion]['bought'])
	{
		buyQuestion();
		return callback();
	}

	if(typedAnswer.length <= 0)
		return callback();

	var hashedAnswer = Sha256.hash(typedAnswer);

	if(sellQuestion(hashedAnswer))
		return callback();

	if(questions[currentQuestion]['solved'] || questions[currentQuestion]['attempts'] <= 0)
		return callback();

	questions[currentQuestion]['attempted'] = true;

	var id = "#qn"+currentQuestion+"S";

	// if("aeiou".indexOf(typedAnswer) >= 0)
	if(hashedAnswer === questions[currentQuestion]['answer'][3 - questions[currentQuestion]['attempts']]) 
	{
		$('#successModal').delay(100).fadeIn();
		$('#successModal').delay(300).fadeOut();
		$(id).css({'border' : '2px solid #37B76C', 'color' : '#37B76C'});
		$(id + " > div").html('&#10003;');
		questions[currentQuestion]['solved'] = true;
		questions[currentQuestion]['scored'] = questions[currentQuestion]['score'];
		participant['currency'] += questions[currentQuestion]['score'];
		$('#sDinner2').text(participant['currency']);
	}
	else
	{
		$('#wrongAnswerModal').delay(100).fadeIn();
		$('#wrongAnswerModal').delay(300).fadeOut();
		questions[currentQuestion]['attempts']--;
		$(id + " > div").text(questions[currentQuestion]['attempts']);
		if(questions[currentQuestion]['attempts'] != 0)
			$(id).css({'border' : '2px solid #f7b731', 'color' : '#f7b731'});
		else
			$(id).css({'border' : '2px solid #FF3F2F', 'color' : '#FF3F2F'});
	}
	displayQuestion(currentQuestion);
	callback();
}

function launchApp()
{
	db.find({}, function(err, docs)
	{
		if(docs.length == 0)
		{
			participant['startTimeStamp'] = new Date().getTime();
			participant['latestTimeStamp'] = participant['startTimeStamp'];
			participant['endTimeStamp']   = participant['startTimeStamp'] + duration * 60000;
			db.insert(
			{
				participant: sjcl.encrypt(author, JSON.stringify(participant)),
				questions: sjcl.encrypt(author, JSON.stringify(questions))
			},function(err, newDocs){	setVariables();	});
		}
		else
		{
			participant = JSON.parse(sjcl.decrypt(author, docs[0].participant));
			questions   = JSON.parse(sjcl.decrypt(author, docs[0].questions));
			$('#sDinner2').text(participant['currency']);
			setVariables();
		}
	});
}

$(document).ready(function() 
{
	try{ launchApp(); } 
	catch(err){ console.log(err); }
});

document.addEventListener('contextmenu', event => event.preventDefault());


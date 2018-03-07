
var le = '&le;', ge = '&ge;', lt = '&#60;', gt = '&#62;';

var questionStatements = {

	 1: "Given three integers <b>a</b>, <b>b</b> and <b>c</b>, find the index of the <b>k<sup>th</sup></b> occurrence of <b>c</b> in <b>a / b</b> after the decimal point.<br> If it does not exists, print -1.<h4>Input Format:</h4>The only input line contains four space separated integers <b>a, b, c, k</b><h4>Output Format: </h4>Contains one integer which is the <b>k<sup>th</sup></b> occurrence of <b>c</b> in <b>a / b</b><h4>Sample Input:</h4><code>12 11 0 3 </code><h4>Sample Output: </h4><code>5</code><h4>Explanation</h4><code>12 / 11 = 1.09090909....</code><br>The 3rd occurrence of 0 occurs at position 5 after the decimal point.<h4>Test Case:</h4>",
	 2: "Given a list of unsorted integers, <b>A= {a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,...,a<sub>N</sub>} </b>can you find the pair of elements that have the smallest absolute difference between them? If there are multiple pairs, find them all.<h4>Input Format</h4> The first line of input contains a single integer,<b>N</b>, representing the length of array <b>A</b>.<br> In the second line, there are <b>N</b> space-separated integers, <b>a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,...,a<sub>N</sub></b> , representing the elements of array <b>A</b>.<h4>Output Format</h4> Output the pairs of elements with the smallest difference.<br>If there are multiple pairs, output all of them in ascending order, all on the same line (consecutively) with just a single space between each pair of numbers.<br>If there's a number which lies in two pair, print it two times (see example 3 for an explanation).<h4>Sample Input 1</h4><code>10<br>-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854<br></code><h4>Sample Output 1</h4> <code>-20 30</code><h4>Explanation</h4>(30) - (-20) = 50, which is the smallest difference<br><h4>Sample Input 2</h4><code>12<br>-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470 <br></code><h4>Sample Output 2</h4> <code>-520 -470 -20 30<br></code><h4>Explanation</h4>(-470) - (-520) = 30 - (-20) = 50, which is the smallest difference.<h4>Sample Input 3</h4><code>4<br>5 4 3 2</code><h4>Sample Output 3</h4> <code>2 3 3 4 4 5</code><h4>Explanation</h4>Here, the minimum difference will be 1. So valid pairs are (2, 3), (3, 4), and (4, 5). So we have to print 2 once, 3 and 4 twice each, and 5 once.<h4>Test Case:</h4>",
	 3: "Ram wants to go to DeeTee with Sparsh on some day <b>x</b>, such that <b>i &le; x &le; j</b>, but he knows Sparsh only goes to DeeTee on days he considers to be beautiful.<br>He considers a day to be beautiful if the absolute value of the difference between <b>x</b> and <b>reversed(x)</b> is evenly divisible by some given number <b>k</b>.<br>Help Ram figure out how many days he'll be willing to go, given the values of <b>i</b>, <b>j</b> and <b>k</b>.<br><h4>Input Format:</h4><code>i j k</code><h4>Output Format</h4>Number of days (eg.1,2,3,etc.)<h4>Sample Input</h4><code>20 23 6<br></code><h4>Sample Output</h4><code>2</code><h4>Explanation:</h4>Day 20 is beautiful because the following evaluates to a whole number: <sup> |20-02|</sup>&frasl;<sub> 6</sub> = 3<br>Day 21 is not beautiful because the following doesn't evaluate to a whole number: <sup> |21-12| </sup>&frasl;<sub> 6</sub>= 1.5<br>Day 22 is beautiful because the following evaluates to a whole number: <sup> |22-22| </sup>&frasl;<sub> 6</sub>= 0<br>Day 23 is not beautiful because the following doesn't evaluate to a whole number:<sup> |23-32| </sup>&frasl;<sub> 6</sub> = 1.5<br><br>Thus the 20th and 22nd days are beautiful, giving the answer 2 days.<h4>Test Case: </h4>",
	 4: "Write the first <b>n</b> numbers of the Stern-Brocot Series explained below<br><ol>	<li>First and second element of the sequence is 1 and 1.</li>	<li>Consider the second member of the sequence . Then, sum the considered member of the sequence and it's precedent i.e (1 + 1 = 2) . Now 2 is the next element of our series. Sequence will be [ 1, 1, 2 ]</li>	<li>After this element, our next element of the sequence will be the considered element of our second step. Now the sequence will be [ 1, 1, 2, 1 ]</li>	<li>Again we do the step 2, but now the considered element will be 2 (3rd element). So, next number of sequence will be sum of considered number and it's precedent (2 + 1 = 3). Sequence will be now [ 1, 1, 2, 1, 3 ]</li>	<li>Like step 3, the next element will be the considered element i.e 2. Thus sequence will be [ 1, 1, 2, 1, 3, 2 ]</li>	<li>Hence this process continues, now next considered element will be 1 (4th element)</li></ol><h4>Input Format</h4>A single integer <b>n</b> specifying the number of digits of the series to be displayed<h4>Output Format</h4>First <b>n</b> space separated integers of the Stern-Brocot series<h4>Sample Input</h4><code>6</code><h4>Sample Output</h4><code>1 1 2 1 3 2</code><h4>Test Case</h4>",
	 5: "Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. If a character appears once, no. of appearances shouldn't be mentioned. No input with integers would be tested.<h4> Input Format </h4>A string consisting of only capital english alphabets <br><h4> Output Format </h4>The run length encoding format of input string <br><h4> Sample Input </h4><code>WWWBWWWERRR <br></code><h4> Sample Output </h4><code>W6BER3</code><h4> Test Case </h4>",
	 6: " Given two numbers, the task is to use alternative bits within two numbers to create result.<br> We take first bits of second number, then second bit of the first number, third bit of second number and take the fourth bit of a first number and so on and generate  a number with it.<br><h4>Input Format</h4>Only line of input consists of a single line containing two integers seperated by a single space. <b>N</b> and <b>M</b> <br><h4>Output Format</h4>Output a single line containing a single integer, the answer. <br><h4> Sample Input </h4><code> 20 7 </code> <br><h4>Sample Output</h4><code> 5 </code><br><h4> Explanation </h4>n = 20, m = 7 <br>Start from right of second number<br>binary representation of n = <code>1 0 1 0 0</code> <br>binary representation of m = <code>0 0 1 1 1</code> <br>Result: <code>0 0 1 0 1</code>  <br><h4>Test Case</h4>",
	 7: " <b> N </b> number of friends wish to buy <b> N </b> new cars. All of them have a different budget range. It is assumed that each model of car retails at an integer price and no two models can have the same price. The friends want to buy the cars in such a way that there is minimum variation between them. In other words they want to select a minimum number of models such that all of the <b> N </b> friends have at least one model that fits his/her budget.Given the individual budget range of <b> N </b> friends <b> [a, b] </b>, where a and b are both included, you need to determine the minimum number of models that should be selected.<h4> Input Format </h4>Integer <b> N </b>, number of friends followed by <b>N</b> lines with budget of one friend in each line.<br> The first integer of the budget range is guaranteed to be lesser than or equal to the second integer.<h4> Output Format </h4>Minimum number of models to be bought. <br><h4> Sample Input 1</h4><code>3 <br>5 8 <br>9 12 <br>8 8 <br></code><h4> Sample Output 1</h4><code>2 </code><h4> Sample Input 2</h4><code>4 <br>17 20 <br>11 11 <br>13 15 <br>10 12 <br></code><h4> Sample Output 2</h4><code>3 </code><h4> Explanation </h4>Test Case 1:<br>No. of friends = 3<br>Budget of friend 1 = 5, 6, 7, 8<br>Budget of friend 2 = 9, 10, 11, 12<br>Budget of friend 3 = 8<br>Possible set of minimum number of models that can be selected = (8, 9), (8, 10), (8, 11), (8, 12)<br><br><br>Test Case 2:<br>No. of friends = 4<br>Budget of friend 1 = 17, 18, 19, 20<br>Budget of friend 2 = 11<br>Budget of friend 3 = 13, 14, 15<br>Budget of friend 4 = 10, 11, 12<br>Possible set of minimum number of models that can be selected = (15, 11, 19), (14, 11, 18), (15, 11, 18) etc.<h4>Test Case</h4>"
};

var testcases = {

	1: {
		0 : "",
		1 : "",
		2 : ""
	},

	2 : {
		0 : "",
		1 : "",
		2 : ""
	},

	3 : {
		0 : "",
		1 : "",
		2 : ""
	},

	4 : {
		0 : "",
		1 : "",
		2 : ""
	},

	5 : {
		0 : "",
		1 : "",
		2 : ""
	},

	6 : {
		0 : "",
		1 : "",
		2 : ""
	},

	7 : {
		0 : "",
		1 : "",
		2 : ""
	}

};

var questions = 

	{

		1 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 300,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		2 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 300,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		3 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 500,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		4 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 500,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		5 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 500,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		6 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 700,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		7 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 700,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		8 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 700,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		9 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 1000,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		10 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 1000,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		11 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 1500,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		12 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 1500,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		13 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 1500,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},

		14 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 1800,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		},
		
		15 : {

			'attempts' : 0,
			'solved' : false,
			'bought' : false,
			'score' : 2000,
			'answer' : {
				0 : "",
				1 : "",
				2 : ""
			},
			'scored' : 0,
			'multiplier' : 2

		}

	};
// console.log(questions)
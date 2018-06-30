
var le = '&le;', ge = '&ge;', lt = '&#60;', gt = '&#62;';

var questionStatements = {

	 1: "<h1>Costly Allergy</h1><p>Ron and you order <i>n</i> potions from Diagon alley, but you decline to drink the <i>k<sup>th</sup></i> potion (where <i>0&#8804; k &#8804; n</i>) due to an allergy. While paying the bill, both of you decide to split the cost of all the potions bought (as you have have equal amounts of the potion which you aren't allergic to); however, Ron is bad at math and may have forgotten that he didn't split the <i>k<sup>th</sup></i> potions and accidentally charged you for it.</p><p>You are given<i> n, k, </i>the cost of each of the items, and the total amount of money that Ron charged you for the portion of the bill. If the bill is fairly split, print 'Good Math'; otherwise, print the amount of money that Ron must refund to you. It is guaranteed that the amount will always be an integer.</p><h3>Input Format</h3><p>The first line contains two space-separated integers denoting the respective values of <i>n</i>(the number of potions ordered) and <i>k</i> (the 0-based index of the item that you did not eat). The second line contains <i>n</i> space-separated integers where each integer <i>i</i> denotes the cost, <i>c[i]</i> , of item <i>i</i>(where <i>0 &#8804; i &#8804; n</i>). The third line contains <i>b</i>, the amount of money that Ron charged you for your share of the bill.</p><h3>Output Format</h3><p>If Ron did not overcharge you, print 'Good Math' on a new line; otherwise, print the amount that Ron owes you (it is guaranteed that this will always be an integer).</p><h3>Constraints</h3><ul><li>2 &#8804;<i> n</i> &#8804; 10<sup>5</sup></li><li>0 &#8804;<i> k</i> &#8804; <i>n</i></li><li>0 &#8804;<i> c[i]</i> &#8804; 10<sup>4</sup></li><li>0 &#8804;<i> b</i> &#8804; ∑ <i>c[i]</i></li></ul><h3>Sample Input</h3><pre><code>4<br>3 10 2 9<br>12</code></pre><h3>Sample Output</h3><pre><code>5</code></pre>",
	 2: "<h1>Ash&#x27;s Array</h1><p>Ash has an array of <i>n</i> integers defined as <i>A=a<sub>0</sub>, a<sub>1</sub>, a<sub>2</sub>..., a<sub>n-1</sub></i>. In one operation, he can delete any element from the array.</p><p>Ash wants all the elements of the array to be equal to one another. To do this, he must delete zero or more elements from the array. Find and print the minimum number of deletion operations Ash must perform so that all the array's elements are equal.</p><p>The first line contains an integer, <i>n</i>, denoting the number of elements in array . The next line contains <i>n</i> space-separated integers where element corresponds to an array element. </p><h3>Input Format</h3><p>The first line contains an integer,<i> n</i>, denoting the number of elements in array <i>A</i> . The next line contains <i>n</i> space-separated integers where element <i>i</i> corresponds to array element <i>a<sub>i</sub></i> (<i>0 &#8804; i &lt; n</i>).</p><h3>Output Format</h3><p>Print a single integer denoting the minimum number of elements Ash must delete for all elements in the array to be equal.</p><h3>Constraints</h3><p><ul><li>1 &#8804; i &#8804; n </li><li>1 &#8804; a<sub>i</sub>,n &#8804; 100 </li></ul></p><h3>Sample Input</h3><pre><code>5<br>3 3 2 1 3</code></pre><h3>Sample Output</h3><pre><code>2</code></pre>",
	 3: "<h1>Theatre Square</h1><p>Theatre Square in the capital city of Berland has a rectangular shape with the size&nbsp;<span><strong><em>n</em></strong>&thinsp;&times;&thinsp;<strong><em>m</em></strong></span>&nbsp;meters. On the occasion of the city's anniversary, a decision was taken to pave the Square with square granite flagstones. Each flagstone is of the size&nbsp;<span><strong><em>a</em></strong>&thinsp;&times;&thinsp;<strong><em>a</em></strong></span>.</p><p>What is the least number of flagstones needed to pave the Square? It's allowed to cover the surface larger than the Theatre Square, but the Square has to be covered. It's not allowed to break the flagstones. The sides of flagstones should be parallel to the sides of the Square.</p><h3>Input Format</h3><p>The input contains three positive integer numbers in the first line:&nbsp;<span><strong><em>n</em></strong>,&thinsp;&thinsp;<strong><em>m</em></strong></span>&nbsp;and&nbsp;<strong><span><em>a</em></span>&nbsp;</strong></p><h3>Output Format</h3><p>Write the needed number of flagstones.</p><h3>Constraints</h3><span>1&thinsp;&le;&thinsp;&thinsp;<strong><em>n</em></strong>,&thinsp;<strong><em>m</em></strong>,&thinsp;<strong><em>a</em></strong>&thinsp;&le;&thinsp;10<sup>9</sup></span><h3>Sample Input</h3><pre><code>6 6 4</code></pre><h3>Sample Output</h3><pre><code>4</code></pre>",
	 4: "<h1>Good Numbers</h1><p>A number is called a square free number if there does not exist a number greater than 1, whose square divides the number evenly/perfectly. For example, number 8 is not a square free number as number 4 (which is square of 2), divides 8. Similarly, number 4 is also not a square free number. However numbers 1, 3, 6 all are square free numbers.</p><p>A number n is called a good number if following properties hold.</p><p>It is a square free number.Let s denote the sum of all divisors of n (including non-trivial divisors like 1 and itself). Let c denote the number of prime numbers dividing s. Number c should be a prime number.You will two numbers L, R, you have to find sum of divisors (including non-trivial) of all the good numbers in the range L to R, both inclusive.</p><p>Please note that 0 is not considered a prime number.</p><h3>Input Format</h3><p>The line contains two space separated integers L, R denoting the range for which you have to find sum of divisors of good numbers.</p><h3>Output Format</h3><p>For a test case, output a single line corresponding to answer of the test case.</p><h3>Constraints</h3><p><ul><li><b>1 &le; L &le; R &le;</b> <b>10<sup>5</sup></b></li></ul></p><h3>Sample Input</h3><pre><code>6 10</code></pre><h3>Sample Output</h3><pre><code>30</code></pre>",
	 5: "<h1>Array Land</h1> <p>You are a citizen of Arrayland. Your President (Mr. Arump) has given you a mundane problem:</p><p>You're given an array a with size N (1-based indexing). You are allowed to perform an arbitrary number (including zero) of operations of the following type: choose an integer i (1 &le; i &le; N) and swap a<sub>i</sub> with a<sub>N-i+1</sub>.</p><p>Your goal is to make the array great. An array is great if it satisfies one of the following conditions:<br>a<sub>1</sub> > a<sub>2</sub> < a<sub>3</sub> > a<sub>4</sub> < ... a<sub>N</sub><br>a<sub>1</sub> < a<sub>2</sub> > a<sub>3</sub> < a<sub>4</sub> > ... a<sub>N</sub><br>Compute the minimum number of operations necessary to make the array a great or determine that it's impossible to make it great.</p><h3>Input Format</h3> <p>The first line of each test case contains a single integer <i>N</i> denoting the size of the array <i>a</i>.<br>The second line contains <i>N</i> space-separated integers <i>a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>N</sub></i>.<br></p><h3>Output Format</h3> <p>Print a single line containing one integer — the minimum number of operations required to make the array great, or -1 if it's impossible.</p><h3>Constraints</h3> <p><ul><li>1 &#8804; <i>N</i> &#8804; 10<sup>5</sup></li><li>1 &#8804; <i>a<sub>i</sub></i> &#8804; 10<sup>9</sup> for each valid <i>i</i></li></ul></p><h3>Sample Input</h3> <pre><code>6<br>1 2 3 4 5 6</code></pre> <h3>Sample Output</h3> <pre><code>1</code></pre>",
	 6: "<h1>Winning The Lottery</h1> <p>The yearly Lottery is about to commence, and there are several lottery tickets being sold, and each ticket is identified with a ticket ID. In one of the many winning scenarios in the Superbowl lottery, a winning pair of tickets is:<br><ul><li>Concatenation of the two ticket IDs in the pair, in any order, contains each digit from 0 to 9 at least once.</li></ul>For example, if there are distinct tickets with ticket ID <b>129300455</b> and <b>56789</b>, ( <b>12930</b>0<b>45</b>5, 5<b>678</b>9 ) is a winning pair.<br><br>NOTE: The ticket IDs can be concantenated in any order. Digits in the ticket ID can occur in any order.</p><p>Your task is to find the number of winning pairs of distinct tickets, such that concatenation of their ticket IDs (in any order) makes for a winning scenario. </p><h3>Input Format</h3> <p> The first line contains <i>n</i> denoting the total number of lottery tickets in the super bowl. Each of the next <i>n</i> lines contains a string, where string on a <i>i<sup>th</sup></i> line denotes the ticket id of the <i>i<sup>th</sup></i> ticket. </p><h3>Output Format</h3> <p> Output the number of winning pairs present in the input. </p><h3>Constraints</h3> <p> <ul> <li>1 &#8804; <i>n</i> &#8804; 10<sup>5</sup></li><li>1 &#8804; length of ticket <i>i</i> &#8804; 10<sup>6</sup></li><li>sum of lengths of all tickets <i>i</i> &#8804; 10<sup>6</sup></li><li>Each ticket id consists of digits from [0,9]</li></ul> </p><h3>Sample Input</h3> <pre><code>5<br>129300455<br>5559948277<br>012334556<br>56789<br>123456879</code></pre> <h3>Sample Output</h3> <pre><code>5</code></pre>",
	 7: "<h1>Greedy Rick</h1> <p>A group of <i>k</i> intergalactic criminals want to buy <i>n</i> portal guns where each gun <i>i</i> has some base cost, <i>c<sub>i</sub></i>. The gun wants to maximize his number of new customers, so he increases the price of gun purchased by repeat customers; more precisely, if a customer has already purchased <i>x</i> guns, the price, <i>p</i>, for gun <i>i</i> is <i>p<sub>i</sub>=(x+1)&times;c<sub>i</sub></i>.Given <i>n</i>, <i>k</i>, and the base cost for each gun, find and print the minimum cost for the group to purchase <i>n</i> guns.<br><br>Note- Portal guns can be purchased in any order.</p><h3>Input Format</h3> <p>The first line contains two space-separated integers describing the respective values of<i>n</i> and <i>k.</i><br>The second line contains space-separated positive integers describing the respective values of <i>c<sub>0</sub>, c<sub>1</sub>,..., c<sub>n-1</sub></i>.</p><h3>Output Format</h3> <p>Print the minimum cost to buy <i>n</i> guns.</p><h3>Constraints</h3> <p><ul><li>1 &#8804; <i>n, k</i> &#8804; 100</li><li>1 &#8804; <i>c<sub>i</sub></i> &#8804; 10<sup>6</sup></li><li>answer < 2<sup>31</sup></li><li>0 &#8804; <i>i</i> < <i>n</i></li></ul></p><h3>Sample Input</h3> <pre><code>3 2<br>2 5 6</code></pre> <h3>Sample Output</h3> <pre><code>15</code></pre>",
	 8: "<h1>Ceaser Cipher</h1> <p>Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.</p><b>Note: </b>: The cipher only encrypts letters; symbols, such as -, remain unencrypted.<br><h3>Input Format</h3> <p>The first line contains an integer, N, which is the length of the unencrypted string.The second line contains the unencrypted string, S.The third line contains the integer encryption key, K, which is the number of letters to rotate.</p><h3>Output Format</h3> <p>For each test case, print the encoded string.</p><h3>Constraints</h3> 1 <=n <=100<br>0 <=k <=100<br>s is a valid ASCII string without any spaces. <h3>Sample Input</h3> <pre><code>11<br>middle-Outz<br>2</code></pre> <h3>Sample Output</h3> <pre><code>okffng-Qwvb</code></pre>",
	 9: "<h1>Closest Numbers</h1> <p>Given a list of unsorted integers, can you find the pair of elements that have the smallest absolute difference between them? If there are multiple pairs, find them all.</p><h3>Input Format</h3> <p>The first line of input contains a single integer, N, representing the length of array A. In the second line, there are N space-separated integers, representing the elements of array A.</p><h3>Output Format</h3> <p>Output the pairs of elements with the smallest difference. If there are multiple pairs, output all of them in ascending order, all on the same line (consecutively) with just a single space between each pair of numbers. If there's a number which lies in two pair, print it two times </p><h3>Constraints</h3> 2<=N<=15 <h3>Sample Input</h3> <pre><code>4 <br>5 4 3 2</code></pre> <h3>Sample Output</h3> <pre><code>2 3 3 4 4 5</code></pre>",
	10: "<h1>Winner Of The Game</h1> <p>In a tournament,n players play against each other exactly once. Each game results in exactly one player winning. There are no ties. You have been given a scorecard containing the scores of each player at the end of the tournament. The score of a player is the total number of games the player won in the tournament. However, the scores of some players might have been erased from the scorecard. How many possible scorecards are consistent with the input scorecard?</p><h3>Input Format</h3> <p>The first line contains a single integer denoting t, the number of test cases. t test cases follow.<br>The first line of each test case contains a single integer n. The second line contains n space-separated integers.<br>s<sup>i</sup> denotes the score of the i<sup>th</sup> player. If the score of the i<sup>th</sup> player has been erased, it is represented by -1.</p><h3>Output Format</h3> <p>For each test case, output a single line containing the answer for that test case modulo 10<sup>9</sup>+7.</p><h3>Constraints</h3> <ul><li>1<=t<=20</li><li>1<=n<=40</li><li>-1<=s<sub>i</sub><=n</li></ul> <h3>Sample Input</h3> <pre><code>5<br>3<br>-1  -1  2<br>3<br>-1 -1 -1<br>4<br>0 1 2 3<br>2<br>1 1<br>4<br>-1 -1 -1 2</code></pre> <h3>Sample Output</h3> <pre><code>2<br>7<br>1<br>0<br>12</code></pre>",
	11: "<h1>Meowth&#x27;s New Shop</h1> <p>Meowth is planning to open a fish shop beside the Team Rocket HQ. He is planning to buy a weight balance and some weights to measure weights in the store.</p><p>There is a single store <b>Cleffa's Weight Store</b> which sells balance and weights in Meowths locality. Cleffas's store has <i><b>K</b></i> pieces of each positive integral weight and buying all <i><b>K</b></i> pieces of a weight costs 1 Rupee. For each integral weight, you can either not take it, or take <i><b>K</b></i> pieces of it and pay 1 Rupee.</p><p>Meowth wants to find what minimum amount of money he needs to spend so that he is able to measure all the positive integral weights &#8804; <i><b>N</b></i>. To measure a weight X, he needs some pieces such that the sum of their values equals X.</p><h3>Input Format</h3> <p>Each test case contains two space separated integers <i><b>K</b></i> and <i><b>N</b></i>.</p><h3>Output Format</h3> <p>Print the minimum amount of money he needs to spend so that Meowth is able to measure all the positive integral weights &#8804; <i>N</i>. To measure a weight X, he needs some pieces such that the sum of their values equals X.</p><h3>Constraints</h3> <p><ul><li> 1 &#8804; <i><b>K</b></i> &#8804; 10<sup>6</sup></li><li> 1 &#8804; <i><b>N</b></i> &#8804; 10<sup>18</sup></li></ul></p><h3>Sample Input</h3> <pre><code>1 5</code></pre> <h3>Sample Output</h3> <pre><code>5</code></pre>",
	12: "<h1>&#x27;Mad&#x27; Guns</h1> <p>Max Rockatansky loves guns. He goes to a shop where he checks the guns available, and sees that every different model, is a different price. He only has Rs. <i>k</i> , and wants as many guns as he can get with that much money.<br>He also decides that he won't have two of the same model (all guns bought must be of different models).</p><p>Help Max find out how many guns he can buy, and print the integer.</p><h3>Input Format</h3> <p>The first line contains <i>k</i>, which is the amount of money he has. <br>The second line contains the prices of guns present in the shop, in no particular order.</p><h3>Output Format</h3> <p>An integer that denotes maximum number of toys Mark can buy for his son.</p><h3>Constraints</h3> <p><ul><li>1 &#8804; <i>n</i> &#8804; 10<sup>5</sup> </li><li>1 &#8804; <i>k</i> &#8804; 10<sup>9</sup> </li><li>1 &#8804; <i>price of any gun </i> &#8804;10<sup>9</sup></li>A gun can't be bought multiple times</ul></p><h3>Sample Input</h3> <pre><code>7 50<br>1 12 5 111 200 1000 10</code></pre> <h3>Sample Output</h3> <pre><code>4</code></pre>",
	13: "<h1>The Final Task</h1> <p>Mi6, the Secret Intelligence Service of United Kingdom, held their recruitments for a successor to their agent James Bond (007). They wanted someone with good interpersonal skills, highly manipulative, calculating and possesses a high level of intelligence. Tom was among the few to make it to the last round of the recruitments. For the final task the contenders were asked to solve the following problem:</p><p>Given <b>T</b> queries, where each query contains a single number <b>Y</b>, Tom has to find the number of pairs <b> A</b> and <b>B</b>, such that the following equations holds true:</p><p> <b>A<sup>2</sup>+ B &le; Y</b></p><p> Where <b>A</b> is any <b>positive</b> integer, and <b>B</b> holds <b>(1&le;B&le;700).</b></p><p> Tom lacks programming skills and has asked for your help to clear the final round.</p><h3>Input Format</h3> <p> The first line contains <b>T</b> denoting the number of test cases.</p><p><b>T</b> lines follows, each line contains a single integer <b> Y</b> denoting the right side of the formula</p><h3>Output Format</h3> <p> For each test case print a single line, containing a single number, indicating the answer for the test.</p><h3>Constraints</h3> <ul><li><b>1 &le; T &le;10<sup>5</sup></b></li><li><b>1 &le; Y &le; 10<sup>10</sup></b></li><li> Note that <b> A</b> must be any <b>positive</b> integer, and <b>B</b> must hold <b>1 &le; B &le; 700.</b></li></ul> <h3>Sample Input</h3> <pre><code>4</code></pre> <h3>Sample Output</h3> <pre><code>3</code></pre>",
	14: "<h1>High Score</h1> <p>You are given <b>N</b> integer sequences <b>A<sub>1</sub>, <sub>A2</sub>, ..., A<sub>N</sub></b>. Each of these sequences contains <b>N</b> elements. You should pick <b>N</b> elements, one from each sequence; let's denote the element picked from sequence <b>A<sub>i</sub></b> by <b>E<sub>i</sub></b>. For each <b>i</b> (2 &le; <b>i</b> &le; <b>N</b>), <b> E<sub>i</sub></b> should be strictly greater than <b>E<sub>i-1</sub></b>.</p><p>Compute the maximum possible value of <b>E<sub>1</sub> + E<sub>2</sub> + ... + E<sub>N</sub></b>. If it's impossible to pick the elements <b>E<sub>1</sub>, E<sub>2</sub>, ..., E<sub>N</sub></b>, print -1 instead.</p><h3>Input Format</h3> <ul> <li>The first line of the input contains a single integer <b>T</b> denoting the number of test cases. The description of <b>T</b> test cases follows.</li><li>The first line of each test case contains a single integer <b>N</b>.</li><li><b>N</b> lines follow. For each valid <b>i</b>, the <b>i-th</b> of these lines contains <b>N</b> space-separated integers <b>A<sub>i1</sub>, A<sub>i2</sub>, ..., A<sub>iN</sub></b> denoting the elements of the sequence <b>A<sub>i</sub></b>. </ul> <h3>Output Format</h3> <p>For each test case, print a single line containing one integer — the maximum sum of picked elements.</p><h3>Constraints</h3> <ul><li><b>1 &le; T &le;10</b></li><li><b>1 &le; N &le; 700</b></li><li>1 &le; sum of <b>N</b> in all test-cases &le; 3700</li><li><b>1 &le; A<sub>ij</sub> &le; 10<sup>9</sup></b> for each valid <b>i, j</b></li></ul> <h3>Sample Input</h3> <pre><code>3<br>1 2 3<br>4 5 6<br>7 8 9</code></pre> <h3>Sample Output</h3> <pre><code>18</code></pre>",
	15: "<h1>Expensive Primes</h1> <p>Johnny has created a table which encodes the results of some operation -- a function of two arguments. But instead of a boring multiplication table of the sort you learn by heart at prep-school, he has created a GCD (greatest common divisor) table! So he now has a table (of height a and width b), indexed from (1,1) to (a,b), and with the value of field (i,j) equal to gcd(i,j). He wants to know how many times he has used prime numbers when writing the table.</p><h3>Input Format</h3> <p>The input consists of two integers, 1 ≤ a,b &lt; 10<sup>7</sup>.</p><h3>Output Format</h3> <p>Output one number - the number of prime numbers Johnny wrote in that test case.</p><h3>Constraints</h3> <p>1 ≤ a,b &lt; 10<sup>7</sup></p><h3>Sample Input</h3> <pre><code>10 10</code></pre> <h3>Sample Output</h3> <pre><code>30</code></pre>"
	
};

var testcases = {

	1 : {
		0 : "<code>57 6<br>3480 8917 9286 7250 9808 6112 5712 4166 8599 9497 176 5405 3046 4055 8152 2681 1570 9969 7748 3480 8917 9286 7250 9808 6112 5712 4166 8599 9497 176 5405 3046 4055 8152 2681 1570 9969 7748 3480 8917 9286 7250 9808 6112 5712 4166 8599 9497 176 5405 3046 4055 8152 2681 1570 9969 7748<br>170800</code>",
		1 : "<code>29 13<br>5300 1087 9198 7369 7956 995 1212 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 4166 8599 9497 176 5405 3046 4055 8152 2681 1570 9969 7748<br>79823</code>",
		2 : "<code>300 134<br>6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712 6865 8239 3044 3480 8917 9286 7250 9808 6112 5712<br>1136728283</code>"
	},

	2 : {
		0 : "<code>43<br>35 65 69 28 12 69 37 80 80 50 80 50 15 57 79 69 57 65 15 69 57 50 65 2 14 64 15 65 65 5 15 64 57 37 50 12 64 37 28 20 80 80 50</code>",
		1 : "<code>63<br>36 12 60 99 78 33 4 21 22 9 12 21 34 76 21 3 3 37 65 27 21 42 11 14 21 88 46 63 79 6 37 94 99 68 76 6 21 86 49 56 22 90 74 83 20 21 94 60 76 75 96 99 92 65 77 26 51 21 77 22 97 34 56</code>",
		2 : "<code>53<br>41 22 80 80 41 41 41 80 22 80 22 41 41 41 80 80 22 22 22 22 41 80 80 41 22 80 80 80 80 41 22 80 22 22 22 80 22 80 80 41 22 41 41 22 22 41 22 22 80 22 22 80 41</code>"
	},

	3 : {
		0 : "<code>1000 1000 10</code>",
		1 : "<code>222 332 5</code>",
		2 : "<code>12 13 4</code>"
	},

	4 : {
		0 : "<code>12 2635</code>",
		1 : "<code>234 2344</code>",
		2 : "<code>100 1000</code>"
	},

	5 : {
		0 : "<code>56<br>108 428 676 760 216 815 852 799 637 186 928 139 255 959 543 144 645 827 221 694 488 971 548 287 956 535 286 309 955 796 999 322 879 284 736 551 280 157 119 452 893 350 227 631 527 907 994 808 195 718 278 281 127 776 946 950</code>",
		1 : "<code>20<br>346 654 174 538 431 850 434 710 370 690 336 647 229 801 278 589 335 585 311 897 138 756 279 589 383 672 417 570 437 851 124 567 154 814 126 561 241 840 180 887</code>",
		2 : "<code>42<br>772 690 587 647 229 801 278 589 335 585 311 897 138 756 279 589 383 672 417 570 437 851 124 567 154 814 126 561 241 840 180 887 346 654 174 538 431 850 434 710 346 654 174 538 431 850 434 710 370 690 336 647 229 801 278 589 335 585 311 897 138 756 279 589 383 672 417 570 437 851 124 567 154 814 126 561 241 840 180 330 320 270</code>"
	},

	6 : {
		0 : "<code>25<br>6292175765<br>8694031380<br>5908963044<br>7106358517<br>0537940849<br>7923330211<br>1982327074<br>1403412916<br>2046767636<br>8596131987<br>3143385349<br>8827754351<br>7415702221<br>8360867704<br>5762753024<br>6021650171<br>3565284455<br>8042793581<br>5424962000<br>9478101530<br>9442449869<br>7493081057<br>0397480444<br>3021611603<br>2264384782</code>",
		1 : "<code>25<br>4364223764<br>8947506132<br>4178255139<br>6281847129<br>4453483278<br>8847754708<br>8609429256<br>7506628081<br>7087135350<br>3954457749<br>1334755313<br>4662664303<br>9143031480<br>4050407247<br>8209890120<br>1247332015<br>2705575059<br>9404089738<br>3107427206<br>4107849021<br>8911280048<br>4750907933<br>5095072767<br>1134872671<br>2192705790</code>",
		2 : "<code>25<br>6631539320<br>9774223981<br>5106859311<br>8910456952<br>9808439752<br>3284854868<br>1202112600<br>4224795456<br>6307268319<br>5314633168<br>2653504947<br>8016544516<br>2967528539<br>0343157258<br>8046941650<br>3052450621<br>2918590420<br>7322283867<br>8515846821<br>8365969516<br>8251526533<br>8920823949<br>2334058645<br>6087307093<br>2301574124</code>"
	},

	7 : {
		0 : "<code>50 3<br>390225 426456 688267 800389 990107 439248 240638 15991 874479 568754 729927 980985 132244 488186 5037 721765 251885 28458 23710 281490 30935 897665 768945 337228 533277 959855 927447 941485 24242 684459 312855 716170 512600 608266 779912 950103 211756 665028 642996 262173 789020 932421 390745 433434 350262 463568 668809 305781 815771 550800</code>",
		1 : "<code>55 34<br>433515 22221 540709 538312 496949 902471 439983 159332 417327 399306 817804 354682 108825 970689 868286 235070 18732 848955 994152 741000 722232 564879 503093 734475 174795 129065 483929 683440 37645 670198 911023 40334 329513 669160 180034 285512 401190 629798 857703 765572 174164 849299 159367 62467 84449 523962 735995 245666 832139 879827 749840 315756 253168 659252 187178</code>",
		2 : "<code>60 18<br>120854 100862 523789 849072 23733 355147 660925 59103 801528 607947 51312 754005 823629 876280 23088 668838 214629 641310 66064 541147 97284 579336 319949 193067 35064 227785 376976 146458 258150 551784 961936 189099 552128 318057 39381 41667 316754 680180 681303 7132 472252 791845 540485 464674 336442 572655 724577 627822 553055 986861 944776 588636 966817 892103 737744 478475 668429 809085 362250 597680</code>"
	},

	8 : {
		0 : "<code>78<br>1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M<br>27</code>",
		1 : "<code>100<br>6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWD<br>87</code>",
		2 : "<code>99<br>DNFjxo?b5h*5LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.<br>45</code>"
	},

	9 : {
		0 : "<code>10<br>-20 -3916127 -357920 -3916187 7374819 -7330761 30 -6461644 -6461594 266854</code>",
		1 : "<code>12<br>-20 -3916237 -357920 -3620601 7374819 -7374869 30 -6241544 -6461594 266854 -520 -470</code>",
		2 : "<code>12<br>3698500 3856920 3856601 3856869 9385638 3856789 6498520 3856819 6461594 2666854 3856329 3698470</code>"
	},

	10: {
		0 : "<code>20<br>19<br>18 -1 1 13 -1 6 -1 -1 -1 18 -1 -1 4 -1 -1 -1 -1 -1 5<br>34<br>-1 -1 -1 -1 -1 -1 -1 -1 23 -1 5 -1 7 -1 -1 10 28 24 3 -1 -1 -1 30 -1 29 -1 -1 -1 22 -1 -1 16 -1 9<br>14<br>-1 -1 -1 -1 -1 -1 -1 0 1 -1 -1 -1 9 -1<br>12<br>2 -1 8 5 -1 -1 -1 -1 4 -1 -1 -1<br>37<br>-1 3 34 -1 -1 36 -1 -1 -1 -1 14 30 -1 -1 -1 -1 -1 -1 -1 21 5 15 -1 33 -1 8 29 -1 32 1 -1 15 24 29 9 -1 -1<br>5<br>-1 -1 -1 -1 4<br>37<br>-1 -1 -1 -1 3 -1 6 -1 -1 -1 29 -1 0 -1 32 -1 8 -1 -1 -1 -1 31 -1 -1 5 -1 -1 -1 11 -1 -1 -1 -1 -1 36 2 -1<br>18<br>-1 -1 -1 -1 7 -1 9 16 -1 -1 14 -1 -1 -1 -1 1 16 10<br>26<br>22 -1 17 -1 -1 -1 14 23 -1 -1 -1 -1 0 11 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1<br>11<br>-1 -1 4 -1 -1 -1 -1 -1 5 2 -1<br>35<br>5 -1 -1 -1 -1 17 -1 -1 24 -1 2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 30 -1 2 -1 -1 10 -1 -1 -1<br>33<br>-1 -1 8 -1 -1 0 -1 15 -1 -1 -1 7 32 -1 -1 -1 3 -1 -1 -1 -1 22 -1 -1 -1 -1 2 11 -1 -1 -1 -1 -1<br>38<br>14 -1 30 -1 -1 -1 -1 36 -1 -1 10 -1 -1 -1 21 22 -1 13 -1 -1 -1 -1 -1 -1 -1 -1 25 -1 3 33 23 31 -1 24 14 17 7 -1<br>19<br>12 -1 -1 -1 -1 -1 9 17 -1 4 -1 -1 -1 18 4 -1 16 -1 10<br>31<br>-1 -1 -1 -1 13 18 -1 -1 -1 26 29 18 4 -1 -1 -1 -1 14 -1 26 1 -1 -1 -1 -1 -1 -1 -1 25 -1 -1<br>37<br>3 -1 -1 -1 22 -1 -1 17 30 -1 -1 7 -1 -1 -1 -1 -1 -1 -1 -1 22 14 5 19 -1 26 -1 -1 -1 12 -1 -1 29 -1 -1 -1 -1<br>32<br>4 3 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 10 7 -1 -1 -1 22 -1 -1 -1 -1 -1 -1 -1 12 -1 -1 -1 2 6<br>3<br>0 2 1<br>37<br>-1 -1 -1 7 31 1 28 -1 28 -1 -1 -1 32 -1 -1 -1 -1 15 -1 -1 -1 20 -1 19 -1 -1 -1 -1 34 -1 4 -1 -1 -1 27 12 -1<br>31<br>-1 9 -1 -1 -1 13 26 -1 -1 -1 -1 16 -1 -1 -1 7 -1 -1 -1 -1 -1 24 9 7 -1 -1 19 -1 30 2 11</code>",
		1 : "<code>20<br>27<br>26 21 18 -1 -1 19 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 26 4 4 -1 1 -1<br>7<br>-1 -1 6 -1 5 -1 -1<br>32<br>-1 16 26 30 14 25 -1 -1 -1 -1 -1 -1 4 -1 -1 -1 -1 -1 25 -1 26 -1 -1 -1 -1 -1 -1 13 -1 -1 -1 14<br>35<br>28 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 34 -1 23 -1 -1 -1 -1 21 28 -1 -1 -1 -1 -1 25 -1 20 -1 -1 11 -1 -1 6<br>39<br>36 -1 -1 -1 -1 -1 -1 -1 5 -1 -1 -1 -1 -1 12 -1 -1 -1 -1 -1 -1 -1 -1 -1 37 -1 -1 -1 -1 35 -1 21 30 29 24 -1 -1 -1 -1<br>18<br>-1 -1 7 14 -1 -1 10 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1<br>36<br>-1 10 -1 -1 -1 6 4 3 -1 19 -1 -1 -1 22 -1 -1 -1 -1 12 22 22 -1 21 7 -1 -1 -1 -1 -1 27 -1 -1 3 -1 -1 3<br>18<br>-1 -1 -1 -1 3 13 -1 -1 -1 -1 -1 -1 12 -1 13 -1 -1 10<br>30<br>-1 2 6 -1 -1 -1 -1 -1 19 -1 27 -1 11 -1 -1 -1 -1 -1 18 -1 -1 -1 17 -1 1 -1 -1 -1 12 -1<br>24<br>-1 -1 23 -1 -1 -1 4 -1 -1 -1 -1 -1 16 -1 -1 -1 -1 -1 -1 -1 -1 -1 3 -1<br>37<br>-1 -1 -1 27 18 -1 -1 -1 -1 -1 16 -1 -1 -1 10 -1 11 30 -1 -1 14 1 -1 -1 12 29 21 -1 -1 -1 -1 25 -1 -1 -1 20 -1<br>6<br>-1 -1 -1 2 0 -1<br>19<br>-1 -1 17 -1 -1 -1 -1 -1 -1 -1 0 -1 16 -1 0 -1 -1 9 -1<br>20<br>12 -1 -1 -1 1 -1 -1 1 5 15 -1 -1 15 -1 -1 -1 12 -1 -1 -1<br>37<br>-1 -1 -1 33 -1 -1 -1 36 -1 15 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 17 15 -1 -1 -1 -1 23 -1 23 25 -1 -1 23 -1 15 16<br>26<br>-1 -1 -1 16 -1 22 -1 -1 22 20 -1 12 2 -1 -1 -1 4 7 -1 -1 -1 -1 13 16 -1 -1<br>18<br>-1 -1 -1 -1 -1 12 -1 -1 -1 -1 -1 12 7 -1 -1 -1 4 -1<br>16<br>-1 -1 -1 -1 -1 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 3<br>4<br>-1 2 -1 -1<br>25<br>5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 21 -1 -1 -1 -1</code>",
		2 : "<code>20<br>36<br>-1 -1 -1 -1 13 34 -1 30 -1 -1 -1 -1 22 -1 15 -1 -1 -1 28 -1 -1 15 24 21 11 -1 3 -1 -1 -1 6 -1 2 -1 14 26<br>17<br>7 0 -1 -1 3 -1 -1 -1 -1 4 -1 -1 -1 3 -1 9 -1<br>39<br>24 -1 -1 -1 -1 -1 -1 5 -1 -1 -1 -1 21 -1 17 -1 -1 -1 -1 -1 20 -1 -1 11 -1 24 -1 -1 -1 -1 -1 -1 -1 -1 -1 33 24 -1 28<br>36<br>17 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 8 -1 -1 -1 -1 -1 -1 13 30 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 8 12 -1<br>11<br>-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 3<br>38<br>-1 -1 -1 21 -1 -1 -1 -1 -1 -1 24 -1 -1 -1 11 7 -1 11 10 -1 -1 -1 36 -1 -1 29 5 -1 33 -1 -1 -1 -1 19 -1 -1 28 7<br>34<br>12 -1 -1 -1 24 -1 -1 -1 26 -1 -1 -1 -1 -1 -1 -1 15 -1 -1 -1 -1 -1 32 -1 -1 1 -1 -1 -1 -1 -1 -1 -1 9<br>12<br>-1 -1 -1 -1 -1 -1 -1 3 7 7 -1 -1<br>39<br>-1 32 -1 -1 -1 -1 17 37 27 -1 4 16 -1 -1 -1 -1 19 38 4 6 -1 -1 -1 2 11 -1 -1 -1 12 -1 24 10 -1 -1 -1 -1 -1 -1 25<br>8<br>-1 4 6 -1 -1 5 1 -1<br>36<br>3 -1 28 -1 -1 25 35 16 26 -1 -1 -1 25 -1 -1 -1 -1 -1 -1 5 25 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1<br>25<br>-1 -1 -1 -1 -1 8 -1 4 -1 -1 13 5 -1 -1 17 -1 -1 -1 -1 -1 -1 17 -1 -1 -1<br>38<br>14 -1 -1 -1 -1 -1 19 -1 -1 -1 26 8 -1 16 -1 35 -1 -1 16 -1 28 -1 -1 -1 8 -1 34 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 1<br>17<br>-1 -1 -1 -1 9 -1 10 -1 -1 12 -1 -1 -1 -1 -1 -1 -1<br>7<br>-1 1 4 1 5 4 -1<br>12<br>11 -1 0 -1 7 -1 -1 7 -1 8 -1 -1<br>6<br>-1 -1 -1 -1 3 3<br>14<br>-1 2 -1 11 -1 -1 9 -1 -1 -1 4 7 -1 4<br>11<br>-1 -1 -1 2 -1 -1 -1 6 4 -1 6<br>38<br>15 -1 -1 12 28 37 -1 -1 -1 13 -1 -1 -1 -1 20 0 17 -1 2 1 -1 -1 -1 -1 -1 -1 -1 27 9 -1 4 -1 -1 20 5 -1 -1 -1</code>"
	},

	11: {
		0 : "<code>5 1675849555</code>",
		1 : "<code>47 825516149</code>",
		2 : "<code>20 2129634559</code>"
	},

	12: {
		0 : "<code>200 80000000<br>51403690 6801342 51823919 7333805 93468017 85782415 58118169 30631790 32727891 83917600 19839156 37224683 98232752 29122289 9105772 36107106 78312243 453735 8420576 43854024 49240721 5861120 36555031 77979692 43491918 74255615 45922216 6141342 24228750 97424973 106118 28148792 56742667 4446390 35482598 50210684 90228805 46117119 33358826 75473048 82551071 53197983 65214083 80783823 34836624 26836208 69407282 13148867 27289943 30344210 57002892 76530664 88721683 46074275 7026708 84729953 72846242 52948924 90871296 97074992 2890249 90977414 77740137 12149268 95423804 13222735 62359952 38168961 11856206 95718779 66158362 94407278 1433114 31372445 27707453 36269738 58208653 49631087 49418606 38014949 79975298 58937850 67061965 21213333 5012125 74088674 5943286 30374720 79553950 96814582 27449712 34960552 40308349 57706201 47109820 88248505 23445288 61986125 26417467 35301495 57704904 92575829 29708773 59138018 76464626 9932578 47924108 87189632 59563666 49859066 25204581 92055316 61313268 92266546 13268649 18841746 18871572 19211935 49216466 98425523 68542870 29182530 85902427 8851219 86888732 33012247 49616076 10334020 94998372 76033543 45635515 5219628 21125724 27860640 16873998 50106703 37793219 64798107 37296335 97356885 67173525 15017268 89412201 28486794 7283814 55197202 47328540 26155387 74409137 96545006 77097262 95468359 25727536 15516041 56835930 12616268 48528288 6452007 75466641 96043013 35001902 21102156 53778993 8643979 48962797 70652992 58750682 39272368 87967451 96047017 36629253 55140976 63580637 78557806 36144122 70864451 33755008 83472662 49536190 60680497 80017668 79149804 56148857 58261557 94665845 65501139 70877825 95710486 71953146 46344466 44269851 59471401 19962975 98048844 68115380 21442124 21218188 26866062 60714492 991</code>",
		1 : "<code>200 80000000<br>81001527 22342382 80577230 56973298 12092409 81133791 15929243 93778436 76524713 47787214 19191951 53122728 41368425 69935330 59494626 71034263 66885813 45651186 26183666 27401979 31676479 57335909 86866218 96727360 12537527 40996191 99789314 86934306 95534407 88977129 81294789 29052286 63835863 61872019 86025584 75928273 95522163 1954828 69706709 24563228 49742042 41415012 77685956 43626820 11350342 89696935 14661083 30752508 35348121 93361101 58154487 19540953 3213362 97537057 16268313 15750890 91049601 68573979 2685196 39100360 57551109 36496337 68152646 73903324 98368357 6694583 49831597 46406872 8649411 72054658 70970100 10907805 65986023 48656057 54534625 29852717 90869344 21712060 60605225 26217465 15073161 71276064 45758418 18286524 21329474 14543084 34037414 12379075 83117063 36722610 51479435 93184524 73218947 72148433 67087849 24103656 78843016 69435798 70510528 87492427 41490457 93996981 50916585 7476480 95169390 5451210 37329197 86038734 27163271 50450775 12256199 94752784 21726839 10530970 13039308 95572665 25074054 99593074 7951740 8191117 88832036 11947527 53891994 14567336 84095961 20979843 38670992 62938977 90415641 61697873 50431405 31906098 55694854 1347990 91898930 3380596 59315552 81744480 89419330 38995175 32195255 54191881 33747960 6438446 17239203 99303620 2011112 42313257 98896695 62479204 3020727 87728731 74426732 56912721 54812419 58522693 30408916 93483412 21461670 20824557 7697637 24409427 5247008 15908843 78273769 49662290 19289439 90105674 31406770 8708769 29100849 16118377 15417002 15365161 22556824 32656206 14668782 77084288 27485815 66081829 92079844 83022894 6326912 66506576 39935615 61139332 77545621 22860883 7139096 51523644 43685441 14836733 75933071 1448801 30745576 6723193 51111091 2551367 96828867 862</code>",
		2 : "<code>200 80000000<br>2716485 47574329 54317443 73887797 4690442 50158330 36082844 35504863 10098449 36757751 51223808 70905600 2915719 19449463 15531534 90627969 10138256 56422983 94058705 61663313 49377065 49952346 67204721 50973358 35007152 35561646 21839119 62717102 25604425 42393960 26469586 28320910 89968289 33303381 54725059 94658731 83461711 90807903 82679946 46076512 80082006 33903754 69498465 82997725 5869569 85029999 73625694 16007825 41452983 20200751 77671138 43346400 70153097 44875859 46836111 57676602 32953858 68675230 20393704 11074635 63585542 99379642 91911897 6070183 85199375 46636956 53245266 21177439 37444859 35925213 19770303 70043217 69828967 89268768 53040943 75698537 74298768 79182989 44222714 68268103 51900093 21893853 64130855 22053190 19286064 10966966 32246144 52239922 32158548 5156201 15830909 48260442 57052195 7742806 54330625 42251571 54379762 7575892 15945362 44340973 96017457 35715665 14384191 65846424 77500786 19941486 94061313 4315906 51640827 38284028 72584009 3540920 12694233 89231216 78110463 31980297 52714535 10356607 36736572 84873083 68029160 52567481 85649878 25081356 60310288 39980503 19849279 67206402 72747 88310993 11547376 96090204 76543010 78447919 14452981 54043796 50905757 8514294 58359702 2546584 99314674 83460063 6087505 12008907 72691280 84197968 96505557 25405815 47070927 85758481 62795250 67616440 90842314 961480 92697796 3668954 40941984 65063427 70875357 93531083 53374420 34939085 89621288 29917430 65903356 4074269 36477579 16809113 65104915 94837281 19355697 16935942 78297345 77959554 81461201 3504977 14673874 77966758 81427144 61744802 16241591 96738746 81877594 7083906 97700227 74575390 10752860 91158563 92155169 81628217 84689646 45529589 69083654 26827286 27963371 34987010 83417907 64440950 51796123 823</code>"
	},

	13: {
		0 : "<code>10000000000</code>",
		1 : "<code>987654321</code>",
		2 : "<code>5473876431</code>"
	},

	14: {
		0 : "<code>5<br>14 26 70 24 39<br>33 52 79 40 13<br>66 69 89 96 56<br>34 15 42 75 32<br>59 21 72 98 97</code>",
		1 : "<code>4<br>668 142 652 109<br>315 676 277 1<br>433 309 95 287<br>212 455 198 525</code>",
		2 : "<code>10<br>17 349 196 144 232 62 189 121 32 117<br>58 241 218 194 48 25 88 178 100 293<br>172 285 34 251 98 317 55 187 51 237<br>54 58 159 202 18 211 279 340 341 156<br>229 206 348 165 334 338 363 85 230 376<br>221 339 411 143 245 176 171 404 359 310<br>258 378 350 273 162 412 116 282 100 411<br>426 423 105 416 233 366 415 224 403 24<br>264 468 111 98 421 282 83 306 352 102<br>349 236 471 329 386 281 300 207 354 331</code>"
	},

	15: {
		0 : "<code>7400722 2235705</code>",
		1 : "<code>4290311 8524192</code>",
		2 : "<code>6595615 1058418</code>"
	}

};

var questions = 

	{

		1 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "d48ff4b2f68a10fd7c86f185a6ccede0dc0f2c48538d697cb33b6ada3f1e85db",
				1 : "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b",
				2 : "2d16d5def1f13e4f45eec700308b846de7c17ffb64ff960ffb2c2be590cbe078"
			},
			'multiplier' : 2

		},

		2 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "aea92132c4cbeb263e6ac2bf6c183b5d81737f179f21efdc5863739672f0f470",
				1 : "02d20bbd7e394ad5999a4cebabac9619732c343a4cac99470c03e23ba2bdc2bc",
				2 : "c6f3ac57944a531490cd39902d0f777715fd005efac9a30622d5f5205e7f6894"
			},
			'multiplier' : 2

		},

		3 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "39e5b4830d4d9c14db7368a95b65d5463ea3d09520373723430c03a5a453b5df",
				1 : "b45cc3f5b6b666583e940b6c7f9c4ec71ea4621c24f5417a3c90496b33f6f8df",
				2 : "6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"
			},
			'multiplier' : 2

		},

		4 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "2c10e6ff2da2ecaedb660dd1d1f6e3e0a59bd387ad4ae8a3e89b80e317504b0f",
				1 : "24b00bdd22b200b187f5817b3276c52b84db00d381996fa6755b926010d994a8",
				2 : "3d652f65889108d8af53e5fe9eeb47f7bc4beb2f71ea22d461dd171157b206ff"
			},
			'multiplier' : 3

		},

		5 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464",
				1 : "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9",
				2 : "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"
			},
			'multiplier' : 3

		},

		6 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "eb624dbe56eb6620ae62080c10a273cab73ae8eca98ab17b731446a31c79393a",
				1 : "25fc0e7096fc653718202dc30b0c580b8ab87eac11a700cba03a7c021bc35b0c",
				2 : "ff5a1ae012afa5d4c889c50ad427aaf545d31a4fac04ffc1c4d03d403ba4250a"
			},
			'multiplier' : 3

		},

		7 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "22375ae3d2fc6ff3fb490c71003cbf55f796fe809bd55a4b4d48bab3c01fcd4a",
				1 : "f0e0a32b1b8772b28ef9b5f61abc2f0d0e3b682d631956168a359bc1c8ab303d",
				2 : "1b66c6271340b3a16b88f4db4b797173e15ac69be54168da243e3a71e2a8f566"
			},
			'multiplier' : 4

		},

		8 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "0d0f11caf8c0b0ef4be46012ced272842c0608c0256ada8fd593f6d68cc0d5cb",
				1 : "c43589bb950a59f77ebead9a299ed86e2e4720fb0a78e0b11748033bfcda6967",
				2 : "0824403431d19e49ee6355f39cbf458e0a25418557f19ef43e26495c6c7b328a"
			},
			'multiplier' : 2

		},

		9 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "7821cab120e53bf3383a2a33e454ed294820735650a5939abc378f204113f771",
				1 : "1a315c2f0e52fb5365bf3f081f3a0e6f467477bd9a6e59fec920773d1482d731",
				2 : "33dad5660f9d3af26d0ee61cbd9b4767e8d97c6f90354449763f935a3dc4d51a"
			},
			'multiplier' : 2

		},

		10 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "a51643eb1571451082087fd6ba90eadfb910145051f7e08947deeb5c50370b38",
				1 : "99bfd0193a13baf29c211de61e08a0ed2075f4e7d3401531923001288823a8fa",
				2 : "b2ed8baf28e9fc63191dd287861bfd093c9f436ac25e16fe4069421c828d1d9f"
			},
			'multiplier' : 5

		},

		11 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918",
				1 : "e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683",
				2 : "2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"
			},
			'multiplier' : 4

		},

		12 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9",
				1 : "4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a",
				2 : "9400f1b21cb527d7fa3d3eabba93557a18ebe7a2ca4e471cfe5e4c5b4ca7f767"
			},
			'multiplier' : 2

		},

		13 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "8d58251bd1995abc870d5014b94f455b8a0c4689ff882d29631f0ada61b7faf9",
				1 : "0bbaff6d724507707d86ace43c8ecd4c9fdfbf347aeb088aec6ef6fc5636fde5",
				2 : "e04835ba9261e9010b0a599e49456461a16599e577e56c1954ea1d709c9325e1"
			},
			'multiplier' : 2

		},

		14 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "556d7dc3a115356350f1f9910b1af1ab0e312d4b3e4fc788d2da63668f36d017",
				1 : "0c86f2dfd04b5d52de85408b658cd99e053d9010b38c56da20673c9a891e9746",
				2 : "5cadc087c21ab8db4db191bec813a5a06bd5d841ad46c49ac64955217dbd8143"
			},
			'multiplier' : 3

		},
		
		15 : {

			'attempts' : 3,
			'solved' : false,
			'bought' : false,
			'score' : 0,
			'answer' : {
				0 : "11457e8962d1746644c7a3c0ea2fbf3b5bc9629d242143a0776018a68d05b71f",
				1 : "2e5cd1d05001d8181dc77e06ab5cf8e685cb8bc4708568c876c7e4839f67129c",
				2 : "5c870ab1322357e2d512b496384ecdb8760148d3f2a8a7ea0074e495bf821ac2"
			},
			'multiplier' : 3

		}

	};


var player1_name =localStorage.getItem("player1_name");
var player2_name =localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML= player1_name+":";
document.getElementById("player2_name").innerHTML = player2_name+":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML ="question turn:"+ player1_name;
document.getElementById("player_answer").innerHTML = "answer turn:"+player2_name;
function send()
{
	var Number_1 = document.getElementById("Number_1").value;
	var Number_2 = document.getElementById("Number_2").value;
	var Actual_Answer =parseInt(Number_1) * parseInt(Number_2);
	console.log(Actual_Answer);
	var Question_Number="<h4>"+Number_1 + "X" + Number_2 + "</h4>";
	var Input_Box="<br> Answer: <input type='text' id='input_Checkbox'>";
	var Check_Button="<br><br> <button class='btn btn-info' onclick='Check()'> Check </button>";
	var Row= Question_Number + Input_Box + Check_Button;
	document.getElementById("output").innerHTML = Row;
	document.getElementById("Number_1").value ="";
	document.getElementById("Number_2").value ="";
	}
	question_turn = "player1";
	answer_turn = "player2";

	function Check()
	{

		get_answer= document.getElementById("input_Checkbox").value;        
		answer = get_answer.toLowerCase();
		console.log("answer in lowercase:"+ answer);
		
		if (answer == get_answer)
		{
			if (answer_turn == "player1")
			{
				player1_score = player1_score + 1;
				document.getElementById("player1_score").innerHTML = player1_score;
			}
			else 
			{
				player2_score = player2_score + 1;
				document.getElementById("player2_score").innerHTML = player2_score;
			}


		}
		if(question_turn == "player1")
		{
			question_turn = "player2";
			document.getElementById("player_question").innerHTML = "Question turn:"+ player2_name;
		}
		else
		{
			question_turn = "player1";
			document.getElementById("player_question").innerHTML = "Question turn:"+ player1_name;
		}

		if(answer_turn == "player1")
		{
			answer_turn = "player2";
			document.getElementById("player_answer").innerHTML = "Answer turn:"+ player2_name;}
			
		
		else
		{
			answer_turn = "player1";
			document.getElementById("player_answer").innerHTML = "Answer turn:"+ player1_name;
		}

		document.getElementById("output").innerHTML = "";
}
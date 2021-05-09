<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>game</title>
	</head>
	<body>
		<h1>Welcome to the Number Quiz</h1>  
		<p>Your current score is ${quiz.score}</p>
		<form action="play" method="post">
		<p>Guess the next number in the sequence.</p>  ${quiz.question} Your answer : 
		<input type="number" name="result"> <input type='submit'></form>
	</body>
</html>
$(document).ready(function(){

//Quiz questions//
	var quest_1 = { question: "Which group of astrological signs is associated with the element air?"};
	var quest_2 = { question: "What should you avoid during Mercury retrograde?"};
	var quest_3 = {	question: "Which stage of the lunar cycle is favorable for making wishes?"};
	var quest_4 = { question: "Which group of astrological signs initiates change?"};
	var quest_5 = { question: "Which aspect of your personality does the ascendant sign represent?"};

//Quiz answers//
	var answers_1 = [
		"aries, leo, sagittarius","gemini, libra, aquarius","cancer, scorpio, pisces","taurus, virgo, capricorn"
	]
	var answers_2 = [
		"reviewing documents","renovating your kitchen","recouperating at a spa","starting a new venture"
	]
	var answers_3 = [
		"quarter moon","new moon","full moon","three-quarter moon"
	]
	var answers_4 = [
		"cardinal signs","mutable signs","fixed signs","none of the above"
	]
	var answers_5 = [
		"emotional self","past self","outer self","true self"
	]
//Quiz start set up//
	$("#correct_answer_1").hide();
	$("#wrong_answer_1").hide();
	$("#correct_answer_2").hide();
	$("#wrong_answer_2").hide();
	$("#correct_answer_3").hide();
	$("#wrong_answer_3").hide();
	$("#correct_answer_4").hide();
	$("#wrong_answer_4").hide();
	$("#correct_answer_5").hide();
	$("#wrong_answer_5").hide();
	$("#part_2").hide();
	$("#part_3").hide();
	$("#part_4").hide();
	$("#part_5").hide();

//Quiz behavior//
var one = function (){
	$("#question_1").text(quest_1.question);
	$("#part_1 li:first-child").append(answers_1[0]);
	$("#part_1 li:nth-child(2)").append(answers_1[1]);
	$("#part_1 li:nth-child(3)").append(answers_1[2]);
	$("#part_1 li:nth-child(4)").append(answers_1[3]);
}
one();	
var two = function (){
	$("#question_2").text(quest_2.question);
	$("#part_2 li:first-child").append(answers_2[0]);
	$("#part_2 li:nth-child(2)").append(answers_2[1]);
	$("#part_2 li:nth-child(3)").append(answers_2[2]);
	$("#part_2 li:nth-child(4)").append(answers_2[3]);
}
var three = function (){
	$("#question_3").text(quest_3.question);
	$("#part_3 li:first-child").append(answers_3[0]);
	$("#part_3 li:nth-child(2)").append(answers_3[1]);
	$("#part_3 li:nth-child(3)").append(answers_3[2]);
	$("#part_3 li:nth-child(4)").append(answers_3[3]);
}
var four = function (){
	$("#question_4").text(quest_4.question);
	$("#part_4 li:first-child").append(answers_4[0]);
	$("#part_4 li:nth-child(2)").append(answers_4[1]);
	$("#part_4 li:nth-child(3)").append(answers_4[2]);
	$("#part_4 li:nth-child(4)").append(answers_4[3]);
}
var five = function (){
	$("#question_5").text(quest_5.question);
	$("#part_5 li:first-child").append(answers_5[0]);
	$("#part_5 li:nth-child(2)").append(answers_5[1]);
	$("#part_5 li:nth-child(3)").append(answers_5[2]);
	$("#part_5 li:nth-child(4)").append(answers_5[3]);
}

	$("#submit_button").click(function(){
		if($("#correct_1").is(":checked")) {
			$("#correct_answer_1").show();
			$("#part_1").hide().delay(3000);
			$("#part_2").fadeIn(3000);
			two();
		}
		if($(".wrong_1").is(":checked")) {
			$("#wrong_answer_1").show();
			$("#part_1").fadeOut(3000);
			$("#part_2").fadeIn(3000);
			two();
		}
		if($("#correct_2").is(":checked")) {
			$("#correct_answer_2").show();
			$("#part_2").fadeOut(3000);
			$("#part_3").fadeIn(3000);
			three();
		}
		if($(".wrong_2").is(":checked")) {
			$("#wrong_answer_2").show();
			$("#part_2").fadeOut(3000);
			$("#part_3").fadeIn(3000);
			three();
		}
		if($("#correct_3").is(":checked")) {
			$("#correct_answer_3").show();
			$("#part_3").fadeOut(3000);
			$("#part_4").fadeIn(3000);
			four();
		}
		if($(".wrong_3").is(":checked")) {
			$("#wrong_answer_3").show();
			$("#part_3").fadeOut(3000);
			$("#part_4").fadeIn(3000);
			four();
		}
		if($("#correct_4").is(":checked")) {
			$("#correct_answer_4").show();
			$("#part_4").fadeOut(3000);
			$("#part_5").fadeIn(3000);
			five();
		}
		if($(".wrong_4").is(":checked")) {
			$("#wrong_answer_4").show();
			$("#part_4").fadeOut(3000);
			$("#part_5").fadeIn(3000);
			five();
		}
		if($("#correct_5").is(":checked")) {
			$("#correct_answer_5").show();
			$("#part_5").fadeOut(3000);
		}
		if($(".wrong_5").is(":checked")) {
			$("#wrong_answer_5").show();
			$("#part_5").fadeOut(3000);
		}
	});
});
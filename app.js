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
		"emotional self","past self","outward self","true self"
	]
//Quiz start//
var setUp = function(){
	$("#part_1").show();
	$("#correct_answer_1, #correct_answer_2, #correct_answer_3, #correct_answer_4, #correct_answer_5").hide();
	$("#wrong_answer_1, #wrong_answer_2, #wrong_answer_3, #wrong_answer_4, #wrong_answer_5").hide();
	$("#part_2, #part_3, #part_4, #part_5, #result").hide();
	$("#next").hide();
	$("#submit_button").prop("disabled",true);
}
setUp();

//Quiz behavior//
var one = function (){
	$("#question_1").text(quest_1.question);
	$("#part_1 li:first-child").append(answers_1[0]);
	$("#part_1 li:nth-child(2)").append(answers_1[1]);
	$("#part_1 li:nth-child(3)").append(answers_1[2]);
	$("#part_1 li:nth-child(4)").append(answers_1[3]);
	return false;
}
one();	
var two = function (){
	$("#question_2").text(quest_2.question);
	$("#part_2 li:first-child").append(answers_2[0]);
	$("#part_2 li:nth-child(2)").append(answers_2[1]);
	$("#part_2 li:nth-child(3)").append(answers_2[2]);
	$("#part_2 li:nth-child(4)").append(answers_2[3]);
	return false;
}
two();
var three = function (){
	$("#question_3").text(quest_3.question);
	$("#part_3 li:first-child").append(answers_3[0]);
	$("#part_3 li:nth-child(2)").append(answers_3[1]);
	$("#part_3 li:nth-child(3)").append(answers_3[2]);
	$("#part_3 li:nth-child(4)").append(answers_3[3]);
	return false;
}
three();
var four = function (){
	$("#question_4").text(quest_4.question);
	$("#part_4 li:first-child").append(answers_4[0]);
	$("#part_4 li:nth-child(2)").append(answers_4[1]);
	$("#part_4 li:nth-child(3)").append(answers_4[2]);
	$("#part_4 li:nth-child(4)").append(answers_4[3]);
	return false;
}
four();
var five = function (){
	$("#question_5").text(quest_5.question);
	$("#part_5 li:first-child").append(answers_5[0]);
	$("#part_5 li:nth-child(2)").append(answers_5[1]);
	$("#part_5 li:nth-child(3)").append(answers_5[2]);
	$("#part_5 li:nth-child(4)").append(answers_5[3]);
	return false;
}
five();
	$("input:radio").click(function(){
		$("#submit_button").prop("disabled",false);
	})

	$("#submit_button").click(function(){
		if($("#correct_1").is(":checked")) {
			$("#correct_answer_1").show();
		}
		if($(".wrong_1").is(":checked")) {
			$("#wrong_answer_1").show();
		}
		if($("#correct_2").is(":checked")) {
			$("#correct_answer_2").show();
		}
		if($(".wrong_2").is(":checked")) {
			$("#wrong_answer_2").show();
		}
		if($("#correct_3").is(":checked")) {
			$("#correct_answer_3").show();
		}
		if($(".wrong_3").is(":checked")) {
			$("#wrong_answer_3").show();
		}
		if($("#correct_4").is(":checked")) {
			$("#correct_answer_4").show();
		}
		if($(".wrong_4").is(":checked")) {
			$("#wrong_answer_4").show();
		}
		if($("#correct_5").is(":checked")) {
			$("#correct_answer_5").show();
		}
		if($(".wrong_5").is(":checked")) {
			$("#wrong_answer_5").show();
			
		}
		$("#next").show();
		$("#submit_button").prop("disabled",true);
		$("input:radio").prop("disabled",true);
		return false;
	});

	$("#next").click(function(){
		$("input:radio").prop("disabled",false);
		if($("#part_1").is(":visible")){
			$("#part_1").hide();
			$("#part_2").show();
			$("#next").hide()
			return false;
		}
		if($("#part_2").is(":visible")){
			$("#part_2").hide();
			$("#part_3").show();
			$("#next").hide();
			return false;
		}
		if($("#part_3").is(":visible")){
			$("#part_3").hide();
			$("#part_4").show();
			$("#next").hide();
			return false;
		}
		if($("#part_4").is(":visible")){
			$("#part_4").hide();
			$("#part_5").show();
			$("#next").hide();
			return false;
		}
		if($("#part_5").is(":visible")){
			$("#part_5").hide();
			$("#result").show();
			$("#next").hide();
			$("#submit_button").prop("disabled",true);
			var count = $(":radio[class=score]:checked").length;
			$("#score").text(count);
		}
	});
	$("#again").click(function() {
		setUp();
		$("input:radio").attr("checked", false);
		return false;
	});						
});

// grade calculator
$("#btnCalc").click(function(e) {
    e.preventDefault();
    // calculate points
    points = (($("#txtMidtermExam").val() / 10) + ($("#txtFinalExam").val() / 10) + ($("#txtINTEX").val() / 10) + ($("#txtQuiz").val() / 10) + ($("#txtGroupProject").val() / 10) + ($("#txtAssignment").val() / 2));

    // percentage to display
    percentage = ($("#percentage").text(points + "%"));

     //if statements to determine letter grade for p tag
    if (points >= 94) {
        $("#letterGrade").text("A");
    }
    else if (points >= 90) {
        $("#letterGrade").text("A-");
    }
    else if (points >= 87) {
        $("#letterGrade").text("B+");
    }
    else if (points >= 84) {
        $("#letterGrade").text("B");
    }
    else if (points >= 80) {
        $("#letterGrade").text("B-");
    }
    else if (points >= 77) {
        $("#letterGrade").text("C+");
    }
    else if (points >= 74) {
        $("#letterGrade").text("C");
    }
    else if (points >= 70) {
        $("#letterGrade").text("C-");
    }
    else if (points >= 67) {
        $("#letterGrade").text("D+");
    }
    else if (points >= 64) {
        $("#letterGrade").text("D");
    }
    else if (points >= 60) {
        $("#letterGrade").text("D-");
    }
    else {
        $("#letterGrade").text("E");
    }


});
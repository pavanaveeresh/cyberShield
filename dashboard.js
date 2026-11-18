let score = localStorage.getItem("quizScore");

if (score !== null) {
    document.getElementById("correct").innerHTML = score;

    let percentage = (score / 5) * 100;

    document.getElementById("percentage").innerHTML =
        percentage + "%";
}
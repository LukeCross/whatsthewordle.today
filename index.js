function getSolutionIndex(date) {
  var start = new Date(2021, 5, 19, 0, 0, 0, 0);
  var difference = date.setHours(0, 0, 0, 0) - start.setHours(0, 0, 0, 0);
  return Math.round(difference / 86400000);
}

function updateSolutions(solutions) {
  var todaySolutionIndex = getSolutionIndex(new Date());
  var yesterdaySolutionIndex = todaySolutionIndex - 1;
  document.getElementById("today_solution").innerHTML =
    solutions[todaySolutionIndex % solutions.length];
  document.getElementById("yesterday_solution").innerHTML =
    solutions[yesterdaySolutionIndex % solutions.length];
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "solutions.txt", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == "200") {
    var solutions = xhr.responseText.split("\n");
    updateSolutions(solutions);
  }
};
xhr.send(null);

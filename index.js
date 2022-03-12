var xhr = new XMLHttpRequest();
xhr.open("GET", "solutions.txt", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == "200") {
    var solutions = xhr.responseText.split("\n");
    var start = new Date(2021, 5, 19, 0, 0, 0, 0);
    var difference = date.setHours(0, 0, 0, 0) - start.setHours(0, 0, 0, 0);
    var solutionIndex = Math.round(difference / 86400000);

    document.getElementById("today_solution").innerHTML =
      solutions[solutionIndex % solutions.length];
  }
};
xhr.send(null);

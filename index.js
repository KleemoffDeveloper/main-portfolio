let codewarsLabel = document.getElementById("codewars-score-label");

let codewarsRefreshButton = document.getElementById("codewars-refresh");

codewarsRefreshButton.addEventListener("click", async () => {
  let response = await fetch('https://www.codewars.com/api/v1/users/Kleemoff%20Dev');
  let data = await response.json();
  codewarsLabel.innerHTML = "My Score: " + data.honor;
});
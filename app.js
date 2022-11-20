const submitBtn = document.querySelector(".btn-submit");
const stateOne = document.querySelector(".card-state-1");
const stateTwo = document.querySelector(".card-state-2");
const ratingBtn = document.querySelectorAll(".btn-rating");
const score = document.querySelector(".score");
let finalScore = 4;

submitBtn.addEventListener("click", changeState);

function changeState() {
	stateOne.classList.add("hide");
	stateTwo.classList.remove("hide");
	score.textContent = finalScore;
}

ratingBtn.forEach((rate) => {
	rate.addEventListener("click", handleRateClick);
});

function handleRateClick(event) {
	ratingBtn.forEach((rate) => rate.classList.remove("active"));
	event.target.classList.add("active");
	finalScore = event.target.textContent;
}

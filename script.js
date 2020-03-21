const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabsPanels = tabs.querySelectorAll('[role="tabpanel"]');

const handleClick = e => {
	//hide all tabs
	tabsPanels.forEach(panel => {
		panel.hidden = true;
	});

	//mark all tabs as unselected
	tabButtons.forEach(tab => {
		tab.setAttribute("aria-selected", false);
	});

	//mark clicked tab as selected
	e.currentTarget.setAttribute("aria-selected", true);

	//find the associated tabPanel and show it
	const { id } = e.currentTarget;
	const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
	tabPanel.hidden = false;
};

tabButtons.forEach(button => button.addEventListener("click", handleClick));

// Pop Up Modal

const cardButtons = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleCardButtonClick(e) {
	const button = e.currentTarget;
	const card = button.closest(".card");

	const imgSrc = card.querySelector("img").src;

	modalInner.innerHTML = ` 
  <img width="600" height="600" src=${imgSrc.replace("200", "500")} />
  `;

	modalOuter.classList.add("open");
}

cardButtons.forEach(button =>
	button.addEventListener("click", handleCardButtonClick)
);

function closeModal(e) {
	modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", () => {
	const outside = !event.target.closest(".modal-inner");
	if (outside) {
		closeModal();
	}
});

window.addEventListener("keyup", event => {
	if (event.key === "Escape") {
		closeModal();
	}
});

//HIRE_ME button configure
// const hire = document.querySelector(".hire");

function handleHireClick(e) {
	location.href = "";
}

// hire.addEventListener("click", handleHireClick);

// State
let matches = [{ id: 1, score: 0 }];

// Select DOM elements
const allMatches = document.querySelector(".all-matches");
const addAnotherMatchBtn = document.querySelector(".lws-addMatch");
const resetBtn = document.querySelector(".lws-reset");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Render Function
function renderMatches() {
  allMatches.innerHTML = "";

  matches.forEach((match, index) => {
    const matchDiv = document.createElement("div");
    matchDiv.className = "match";
    matchDiv.innerHTML = `
      <div class="wrapper">
        <button class="lws-delete" data-id="${match.id}">
          <img src="./image/delete.svg" alt="">
        </button>
        <h3 class="lws-matchName">Match ${index + 1}</h3>
      </div>
      <div class="inc-dec">
        <form class="incrementForm">
          <h4>Increment</h4>
          <input type="number" name="increment" class="lws-increment" data-id="${
            match.id
          }">
        </form>
        <form class="decrementForm">
          <h4>Decrement</h4>
          <input type="number" name="decrement" class="lws-decrement" data-id="${
            match.id
          }">
        </form>
      </div>
      <div class="numbers">
        <h2 class="lws-singleResult">${match.score}</h2>
      </div>
    `;
    allMatches.appendChild(matchDiv);
  });

  attachEventListeners();
}

// Update Score function
function updateScore(id, value, type) {
  matches = matches.map((m) => {
    if (m.id === id) {
      if (type === INCREMENT) {
        return {
          ...m,
          score: m.score + value,
        };
      } else if (type === DECREMENT) {
        let newScore = m.score - value;
        if (newScore < 0) newScore = 0;
        return {
          ...m,
          score: newScore,
        };
      } else return m;
    }
    return m;
  });
  renderMatches();
}

// Event Listeners for dynamic elements
function attachEventListeners() {
  // Increment input
  document.querySelectorAll(".lws-increment").forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let value = parseInt(e.target.value);

        if (!isNaN(value)) {
          const id = parseInt(e.target.dataset.id);

          // call update score function
          updateScore(id, value, INCREMENT);
          e.target.value = "";
        }
      }
    });
  });

  // Decrement input
  document.querySelectorAll(".lws-decrement").forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let value = parseInt(e.target.value);

        if (!isNaN(value)) {
          const id = parseInt(e.target.dataset.id);

          // call update score function
          updateScore(id, value, DECREMENT);
          e.target.value = "";
        }
      }
    });
  });

  // Delete match
  document.querySelectorAll(".lws-delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      matches = matches.filter((m) => m.id !== id);
      renderMatches();
    });
  });
}

// Add match
addAnotherMatchBtn.addEventListener("click", () => {
  const newId = matches.length ? matches[matches.length - 1].id + 1 : 1;
  // matches.push({ id: newId, score: 0 });
  matches = [...matches, { id: newId, score: 0 }];
  // matches = matches.concat({ id: newId, score: 0 });
  renderMatches();
});

// Reset All
resetBtn.addEventListener("click", () => {
  matches = matches.map((m) => ({ ...m, score: 0 }));
  renderMatches();
});

// Initial render
renderMatches();

// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".create-note-btn");

// let notes = document.querySelectorAll(".input-box");

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-note-btn");

createBtn.addEventListener("click", () => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <textarea class="input-box"></textarea>
        <button class="delete-button"><img src="images/delete.png" alt=""></button>
    `;
    notesContainer.appendChild(note);

    // Add delete functionality
    note.querySelector(".delete-button").addEventListener("click", () => {
        note.remove();
    });
});
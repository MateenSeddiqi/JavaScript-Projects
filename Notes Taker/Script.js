const notesContainer = document.querySelector(".notes-container");
        const createBtn = document.querySelector(".create-note-btn");

        createBtn.addEventListener("click", () => {
            const note = document.createElement("div");
            note.classList.add("note");
            note.innerHTML = `
                <textarea class="input-box" placeholder="Write your note..."></textarea>
                <div class="note-action">
                    <button class="delete-button">Delete</button>
                </div>
            `;
            notesContainer.appendChild(note);

            // Add delete functionality
            note.querySelector(".delete-button").addEventListener("click", () => {
                note.remove();
            });
        });
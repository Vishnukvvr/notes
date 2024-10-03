const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

createBtn.addEventListener("click", () => {
    const note = document.createElement("p");
    note.classList.add("input-box");
    note.setAttribute("contenteditable", "true");
    note.style.direction = "ltr"; // Ensure text is entered left-to-right
    note.innerHTML = `<span>×</span>`;
    
    // Add event listener for deleting the note when the '×' is clicked
    note.querySelector("span").addEventListener("click", () => {
        note.remove();
    });

    notesContainer.appendChild(note);
});

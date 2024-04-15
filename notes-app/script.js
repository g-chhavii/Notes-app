const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    // console.log(data);
    localStorage.setItem("notes" , JSON.stringify(data))
}

addBtn.addEventListener("click" , () => {
    console.log("Added a note");
    addNote();
})


const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
    <div class="tool">
        <i class="fa-regular fa-floppy-disk save"></i>
        <i class="fa-solid fa-trash trash"></i>
    </div>
    <textarea>${text}</textarea>
    `
    note.querySelector(".trash")
    .addEventListener("click" , () => {
        note.remove();
        saveNotes();
    })

    note.querySelector(".save")
    .addEventListener("click" , () => {
        saveNotes();
    })

    const textarea = note.querySelector("textarea");
    textarea.addEventListener("focusout" , () => saveNotes());

    main.append(note);
    saveNotes();
}

function auto(){
    const localStorageNotes = JSON.parse(localStorage.getItem("notes"));
    localStorageNotes.forEach(
        (localStorageNote) => addNote(localStorageNote)
    )
    console.log(localStorageNotes)
}
auto();

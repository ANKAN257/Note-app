const addBTN=document.querySelector('#addBTN')
const main=document.querySelector('#main')



addBTN.addEventListener("click",function(){addNote()});

const addNote=()=>
{
  const note=document.createElement('div');
  note.classList.add("note")
  note.innerHTML='  <div class="note"><div class="tool"><i class="trash fa-solid fa-trash"></i><i class="save fa-solid fa-floppy-disk"></i></div><textarea ></textarea></div>';
note.querySelector('.trash').addEventListener("click",function(){note.remove() });
note.querySelector('.save').addEventListener("click",function(){saveNotes()});
    main.appendChild(note);
saveNotes();

}
const saveNotes=()=>
{
  const notes=document.querySelectorAll('.note textarea');
  const data=[];
  // console.log(notes);
  notes.forEach(
    (note) =>{
     data.push(note.value);
     }
  )

  // console.log(data);
localStorage.setItem("notes",JSON.stringify(data))

}

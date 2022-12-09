const NewChapters = document.querySelector("#chapters-added");
// The button which will trigger a new article addition
const AddChapterBtn = document.querySelector("#add-chapter");
// Inputs of the chapter
const ChapterTitle = document.querySelector('#ChapterTitleJS');
const ChapterContent = document.querySelector('#ChapterContentJS');
let createdChilds = 0;

function CreateNewChapter(){
    // Create the father div of the chapter
    const NewFormChapter = document.createElement("div");
    NewFormChapter.classList.add("vw-form-article-chapter");
    NewFormChapter.classList.add("chapter-added");

    // Label for TITLE CHAPTER
    const TitleLabel = document.createElement("label");
    TitleLabel.classList.add("vw-form-label");
    TitleLabel.htmlFor = "ChapterTitle";
    TitleLabel.innerHTML = "Chapter title:";
    
    NewFormChapter.appendChild(TitleLabel);

    // Input TITLE
    // NOTE! For both inputs we will make them disabled
    // and they will be enabled when the user chooses to edit
    // the chapter
    const Title = document.createElement("input");
    Title.htmlType = "text";
    Title.name = "ChapterTitle";
    Title.value = ChapterTitle.value;
    Title.disabled = true;

    NewFormChapter.appendChild(Title);

    // Label for CONTENT CHAPTER
    const ContentLabel = document.createElement("label");
    ContentLabel.classList.add("vw-form-label");
    ContentLabel.htmlFor = "ChapterContent";
    ContentLabel.innerHTML = "Chapter Content:";
    
    NewFormChapter.appendChild(ContentLabel);

    // Textarea CONTENT
    const Content = document.createElement("textarea");
    Content.name = "ChapterContent";
    Content.rows = 10;
    Content.value = ChapterContent.value;
    Content.disabled = true;

    NewFormChapter.appendChild(Content);

    // Create and append edit & delete btns
    // NOTE! Button 'save' will also be created, but it won't be displayed
    // It will appear only the user already clicked 'edit' button
    const ButtonWrapper = document.createElement("div");
    ButtonWrapper.classList.add("chapter-added-btns");

    const ButtonEdit = document.createElement("button"), ButtonDelete = document.createElement("button"), ButtonSave = document.createElement("button");
    ButtonEdit.classList.add("btn-basic");  ButtonDelete.classList.add("btn-basic");  ButtonSave.classList.add("btn-basic"); 
    ButtonEdit.classList.add("btn-edit");  ButtonDelete.classList.add("btn-delete"); ButtonSave.classList.add("btn-add"); 
    ButtonEdit.type = "button"; ButtonDelete.type = "button";  ButtonSave.type = "button"
    ButtonEdit.innerHTML = "EDIT"; ButtonDelete.innerHTML = "DELETE"; ButtonSave.innerHTML = "SAVE";

    ButtonSave.style.display = "none";

    ButtonWrapper.appendChild(ButtonEdit);
    ButtonWrapper.appendChild(ButtonDelete);
    ButtonWrapper.appendChild(ButtonSave);

    NewFormChapter.appendChild(ButtonWrapper);

    // Append the new created chapter to the new chapters list
    NewChapters.appendChild(NewFormChapter);
    createdChilds += 1;
}

function AddChapter(){
    // Validations before creating the element
    if(ChapterContent.value === "" || ChapterTitle.value === ""){
        alert("You need to complete both fields before creating a new chapter!");
    } else{
        CreateNewChapter();
        
        // We need to update the delete & edit buttons
        const NewlyCreatedChapters = document.querySelectorAll(".chapter-added");

        const DeleteBtns = document.querySelectorAll(".chapter-added .btn-delete");
        const EditBtns = document.querySelectorAll(".chapter-added .btn-edit");
        const SaveBtns = document.querySelectorAll(".chapter-added .btn-add");

        // DeleteBtns.length = SaveBtns.length = EditBtns.length
        // So we will iterate only one time
        for(let i = 0; i < DeleteBtns.length; i++){
            // Delete BTN is clicked => remove that chapter
            DeleteBtns[i].addEventListener("click", () => {
                NewlyCreatedChapters[i].remove();
            });

            // Edit btn is clicked
            // => background is changed by removing the state of the chapter ( added => editable)
            // => inputs become clickable
            EditBtns[i].addEventListener("click", () => {
                NewlyCreatedChapters[i].classList.remove("chapter-added");
                NewlyCreatedChapters[i].childNodes[1].disabled = false;
                NewlyCreatedChapters[i].childNodes[3].disabled = false;

                // Display = none => EDIT & DELETE buttons
                // Display = block => SAVE button
                EditBtns[i].style.display = "none";
                DeleteBtns[i].style.display = "none";
                SaveBtns[i].style.display = "block";
            });

            // Save btn is clicked
            // => chapter state is changed -> editable => added
            // => inputs become again disabled
            // => Save btn disappers => display = none;
            SaveBtns[i].addEventListener("click", () => {
                NewlyCreatedChapters[i].classList.add("chapter-added");
                NewlyCreatedChapters[i].childNodes[1].disabled = true;
                NewlyCreatedChapters[i].childNodes[3].disabled = true;

                EditBtns[i].style.display = "block";
                DeleteBtns[i].style.display = "block";
                SaveBtns[i].style.display = "none";
            });
        }

        ChapterContent.value = "";
        ChapterTitle.value = "";
    }
}

AddChapterBtn.addEventListener("click", AddChapter);
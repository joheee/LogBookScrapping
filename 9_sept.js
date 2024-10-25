// DATA
class Data {
  constructor(editActivity, editDescription) {
    this.editClockIn = "09:00 am";
    this.editClockOut = "05:00 pm";
    this.editActivity = editActivity;
    this.editDescription = editDescription;
  }
}

// LIST OF ALL DATA
const datas = [
  // Week 1: Setup database through Docker in Proxmox (6 days)
  new Data("Setup database in Docker", "Initialized Docker container setup on Proxmox"),
  new Data("Setup database in Docker", "Configured network settings for Docker container"),
  new Data("Setup database in Docker", "Installed database dependencies"),
  new Data("Setup database in Docker", "Created initial database schema"),
  new Data("Setup database in Docker", "Tested database connection in Docker"),
  new Data("Setup database in Docker", "Finalized Docker database setup and backups"),

  // Week 2: Frontend UI design using Figma (6 days)
  new Data("UI Design in Figma", "Created initial layout for homepage"),
  new Data("UI Design in Figma", "Designed color scheme and typography"),
  new Data("UI Design in Figma", "Added navigation elements and button styling"),
  new Data("UI Design in Figma", "Refined layout for mobile responsiveness"),
  new Data("UI Design in Figma", "Prepared iconography and visual assets"),
  new Data("UI Design in Figma", "Reviewed and finalized design elements"),

  // Week 3: Frontend UI development (6 days)
  new Data("UI Development", "Set up React environment"),
  new Data("UI Development", "Implemented homepage structure"),
  new Data("UI Development", "Added navigation and routing"),
  new Data("UI Development", "Styled components for homepage"),
  new Data("UI Development", "Added responsive design adjustments"),
  new Data("UI Development", "Debugged and tested UI elements"),

  // Week 4: Design ERD for database (6 days)
  new Data("ERD Design", "Mapped key entities for application"),
  new Data("ERD Design", "Defined entity relationships"),
  new Data("ERD Design", "Reviewed entity attributes"),
  new Data("ERD Design", "Created draft of ERD"),
  new Data("ERD Design", "Refined ERD based on application needs"),
  new Data("ERD Design", "Finalized ERD for implementation"),

  // Week 5: Backend development (1 day)
  new Data("Backend Development", "Set up initial backend architecture"),
];


// LOGIC FOR SCRAPPING
const buttons = document.querySelectorAll(".button.button-primary.detailsbtn");     // BUTTON SUBMIT
// const buttons = document.querySelectorAll(".button.button-orange.detailsbtn");      // BUTTON EDIT
const buttonsArray = Array.from(buttons);
buttonsArray.forEach((b, i) => {
  const editClockIn = document.getElementById("editClockIn");
  const editClockOut = document.getElementById("editClockOut");
  const editActivity = document.getElementById("editActivity");
  const editDescription = document.getElementById("editDescription");
  const submit = document.querySelector(
    '.button.button-primary[onclick="editSaveClick()"]'
  );
  b.click();

  editClockIn.value = datas[i].editClockIn;
  editClockOut.value = datas[i].editClockOut;
  editActivity.value = datas[i].editActivity;
  editDescription.value = datas[i].editDescription;
  submit.click();
});

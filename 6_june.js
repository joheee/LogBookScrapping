// DATA
class Data {
  constructor(editActivity, editDescription) {
    this.editClockIn = "09:00 am";
    this.editClockOut = "05:00 pm";
    this.editActivity = editActivity;
    this.editDescription = editDescription;
  }
}

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
  // Week 1
  new Data("setup database through docker in proxmox", "Installed a database management system using Docker and configured initial settings."),

  // Week 2
  new Data("frontend UI design using figma", "Created wireframes for the main pages of the application using Figma."),
  new Data("frontend UI design using figma", "Designed the color scheme and typography for the application UI."),
  new Data("frontend UI design using figma", "Developed interactive prototypes to demonstrate user flow."),
  new Data("frontend UI design using figma", "Refined the design based on feedback and usability testing."),
  new Data("frontend UI design using figma", "Created high-fidelity mockups for all application screens."),
  new Data("frontend UI design using figma", "Prepared design assets and guidelines for the development team."),

  // Week 3
  new Data("frontend UI development", "Set up the development environment and installed necessary libraries."),
  new Data("frontend UI development", "Implemented the header and navigation components of the UI."),
  new Data("frontend UI development", "Developed the main content layout and styling."),
  new Data("frontend UI development", "Integrated interactive elements and ensured responsiveness."),
  new Data("frontend UI development", "Tested the UI across different devices and browsers."),
  new Data("frontend UI development", "Fixed bugs and optimized the performance of the frontend components."),

  // Week 4
  new Data("design ERD for database", "Identified key entities and their relationships for the database."),
  new Data("design ERD for database", "Defined attributes and primary keys for each entity."),
  new Data("design ERD for database", "Created entity-relationship diagrams using a design tool."),
  new Data("design ERD for database", "Reviewed the ERD with stakeholders and incorporated feedback."),
  new Data("design ERD for database", "Refined the ERD to optimize database normalization."),
  new Data("design ERD for database", "Prepared documentation and explanations for the ERD design."),

  // Week 5
  new Data("backend development", "Set up the backend development environment and configured the server."),
  new Data("backend development", "Implemented API endpoints for user authentication and authorization."),
  new Data("backend development", "Developed database models and connected them with the API."),
  new Data("backend development", "Implemented business logic and services for core features."),
  new Data("backend development", "Conducted unit tests and integration tests for the backend code."),
  new Data("backend development", "Optimized backend performance and handled error management."),
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

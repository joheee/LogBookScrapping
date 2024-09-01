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
// LIST OF ALL DATA
const datas = [
  // Week 1 (3 days)
  new Data("integrate frontend with backend", "Worked on initial integration of frontend with backend services."),
  new Data("integrate frontend with backend", "Continued integration efforts, focusing on API endpoints."),
  new Data("integrate frontend with backend", "Finalized basic integration and tested data flow."),

  // Week 2 (6 days)
  new Data("integrate frontend with backend", "Enhanced error handling during frontend-backend communication."),
  new Data("integrate frontend with backend", "Optimized API calls for better performance."),
  new Data("integrate frontend with backend", "Implemented authentication flow between frontend and backend."),
  new Data("integrate frontend with backend", "Integrated additional features like search and filters."),
  new Data("integrate frontend with backend", "Debugged issues with session management."),
  new Data("integrate frontend with backend", "Completed comprehensive integration testing."),

  // Week 3 (6 days)
  new Data("deployment frontend", "Set up deployment pipeline for frontend application."),
  new Data("deployment frontend", "Configured environment variables for production."),
  new Data("deployment frontend", "Deployed frontend to staging environment for testing."),
  new Data("deployment frontend", "Addressed deployment-related bugs and optimizations."),
  new Data("deployment frontend", "Performed load testing on deployed frontend."),
  new Data("deployment frontend", "Finalized deployment and ensured stability on production."),

  // Week 4 (6 days)
  new Data("deployment backend", "Set up backend deployment pipeline."),
  new Data("deployment backend", "Configured backend environment and dependencies for production."),
  new Data("deployment backend", "Deployed backend to staging and performed initial tests."),
  new Data("deployment backend", "Resolved deployment bugs and optimized performance."),
  new Data("deployment backend", "Conducted security checks on backend deployment."),
  new Data("deployment backend", "Finalized backend deployment and ensured operational stability."),

  // Week 5 (6 days)
  new Data("testing features", "Started comprehensive feature testing, focusing on user authentication."),
  new Data("testing features", "Tested user interfaces for responsiveness and accuracy."),
  new Data("testing features", "Performed end-to-end testing of major functionalities."),
  new Data("testing features", "Tested edge cases and identified potential issues."),
  new Data("testing features", "Conducted usability testing and gathered feedback."),
  new Data("testing features", "Finalized testing and prepared for production release."),
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

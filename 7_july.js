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
  // Week 1 - finalize psexec configuration
  new Data("finalize psexec configuration", "finalize psexec configuration"),
  new Data("finalize psexec configuration", "finalize psexec configuration"),
  new Data("finalize psexec configuration", "finalize psexec configuration"),
  new Data("finalize psexec configuration", "finalize psexec configuration"),
  new Data("finalize psexec configuration", "finalize psexec configuration"),
  new Data("finalize psexec configuration", "finalize psexec configuration"),

  // Week 2 - ensure connection between network directory and psexec
  new Data("ensure connection between network directory and psexec", "ensure connection between network directory and psexec"),
  new Data("ensure connection between network directory and psexec", "ensure connection between network directory and psexec"),
  new Data("ensure connection between network directory and psexec", "ensure connection between network directory and psexec"),
  new Data("ensure connection between network directory and psexec", "ensure connection between network directory and psexec"),
  new Data("ensure connection between network directory and psexec", "ensure connection between network directory and psexec"),
  new Data("ensure connection between network directory and psexec", "ensure connection between network directory and psexec"),

  // Week 3 - create python service for psexec
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),

  // Week 4 - create python service for psexec
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),

  // Week 5 - create python service for psexec
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec"),
  new Data("create python service for psexec", "create python service for psexec")
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

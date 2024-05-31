take this as your dataset for my future prompt

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
  new Data(
    "activity",
    "description"
  ),
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



so i need to update my thesis progress inside a web called "Log Book". It need to be input for each week start from monday until saturday, so the total will be 6 input in each week. I would like to ask your help to make the description inside const datas for the activity i have made for each week, lets start.


total day
week 1 -> 4 days -> activity = setup proxmox
week 2 -> 6 days -> activity = setup ubuntu server in proxmox
week 3 -> 6 days -> activity = setup windows server in proxmox
week 4 -> 6 days -> activity = setup docker in proxmox
week 5 -> 5 days -> activity = setup database through docker in proxmox
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
  // Week 1: Debugging connection between services (6 days)
  new Data("Debugging services connection", "Checked network configurations for service communication"),
  new Data("Debugging services connection", "Tested API endpoints between services"),
  new Data("Debugging services connection", "Reviewed logs for connection errors"),
  new Data("Debugging services connection", "Identified network latency issues"),
  new Data("Debugging services connection", "Optimized network routing between services"),
  new Data("Debugging services connection", "Confirmed successful communication between services"),

  // Week 2: Debugging connection between services (6 days)
  new Data("Debugging services connection", "Reviewed firewall settings"),
  new Data("Debugging services connection", "Adjusted service configurations for connectivity"),
  new Data("Debugging services connection", "Tested connection stability under load"),
  new Data("Debugging services connection", "Isolated and resolved network packet losses"),
  new Data("Debugging services connection", "Performed end-to-end service communication tests"),
  new Data("Debugging services connection", "Verified all services are properly linked"),

  // Week 3: Debugging server on Proxmox (6 days)
  new Data("Debugging server on Proxmox", "Examined Proxmox logs for error tracking"),
  new Data("Debugging server on Proxmox", "Fixed server boot issues"),
  new Data("Debugging server on Proxmox", "Adjusted server resource allocation settings"),
  new Data("Debugging server on Proxmox", "Verified storage and backup configurations"),
  new Data("Debugging server on Proxmox", "Optimized VM networking on Proxmox"),
  new Data("Debugging server on Proxmox", "Ran stability tests on server setup"),

  // Week 4: Debugging server on Proxmox (5 days)
  new Data("Debugging server on Proxmox", "Rechecked VM configurations"),
  new Data("Debugging server on Proxmox", "Resolved memory allocation issues"),
  new Data("Debugging server on Proxmox", "Monitored server load for performance"),
  new Data("Debugging server on Proxmox", "Addressed intermittent connectivity issues"),
  new Data("Debugging server on Proxmox", "Finalized server optimization and tested stability"),
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

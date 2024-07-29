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
  new Data("setup proxmox", "Installed Proxmox and set up initial configurations."),
  new Data("setup proxmox", "Configured networking and storage options in Proxmox."),
  new Data("setup proxmox", "Created and managed virtual machines on Proxmox."),
  new Data("setup proxmox", "Optimized Proxmox performance and security settings."),

  // Week 2
  new Data("setup ubuntu server in proxmox", "Installed Ubuntu Server on a virtual machine in Proxmox."),
  new Data("setup ubuntu server in proxmox", "Configured SSH and basic network settings on Ubuntu Server."),
  new Data("setup ubuntu server in proxmox", "Set up firewall and security settings on Ubuntu Server."),
  new Data("setup ubuntu server in proxmox", "Installed essential software and updates on Ubuntu Server."),
  new Data("setup ubuntu server in proxmox", "Configured storage and backup solutions on Ubuntu Server."),
  new Data("setup ubuntu server in proxmox", "Tested and verified the Ubuntu Server setup in Proxmox."),

  // Week 3
  new Data("setup windows server in proxmox", "Installed Windows Server on a virtual machine in Proxmox."),
  new Data("setup windows server in proxmox", "Configured Active Directory and domain services on Windows Server."),
  new Data("setup windows server in proxmox", "Set up network services and roles on Windows Server."),
  new Data("setup windows server in proxmox", "Installed and configured IIS for web services on Windows Server."),
  new Data("setup windows server in proxmox", "Configured security policies and user roles on Windows Server."),
  new Data("setup windows server in proxmox", "Tested and validated the Windows Server setup in Proxmox."),

  // Week 4
  new Data("setup docker in proxmox", "Installed Docker on a virtual machine in Proxmox."),
  new Data("setup docker in proxmox", "Configured Docker daemon and networking settings."),
  new Data("setup docker in proxmox", "Pulled and ran Docker images for various applications."),
  new Data("setup docker in proxmox", "Created and managed Docker containers for different services."),
  new Data("setup docker in proxmox", "Configured Docker Compose for multi-container applications."),
  new Data("setup docker in proxmox", "Tested and optimized Docker containers performance."),

  // Week 5
  new Data("setup database through docker in proxmox", "Installed a database management system using Docker."),
  new Data("setup database through docker in proxmox", "Configured database settings and user permissions."),
  new Data("setup database through docker in proxmox", "Migrated existing data into the Dockerized database."),
  new Data("setup database through docker in proxmox", "Optimized database performance and query efficiency."),
  new Data("setup database through docker in proxmox", "Tested database backup and recovery procedures."),
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

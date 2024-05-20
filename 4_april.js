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
    "Download PsExec Tool",
    "Download the PsExec tool from the official Sysinternals website. Ensure the file is saved in a shared network directory accessible to all PCs in the lab."
  ),
  new Data(
    "Extract PsExec Files",
    "Extract the PsExec zip file to a designated folder on each PC in the lab. Verify that all necessary files are present and accessible."
  ),
  new Data(
    "Configure PsExec Permissions",
    "Set appropriate permissions for PsExec on each PC. Ensure that users have the necessary administrative privileges to run PsExec commands remotely."
  ),
  new Data(
    "Install PsExec on Each PC",
    "Install PsExec on all PCs in the lab by copying the executable to a standard directory (e.g., C:\\Windows\\System32). Confirm successful installation by running a simple PsExec command locally."
  ),
  new Data(
    "Setup Firewall Rules for PsExec",
    "Configure the firewall settings on each PC to allow PsExec traffic. Create rules to permit inbound and outbound traffic for the PsExec executable."
  ),
  new Data(
    "Document Installation Process",
    "Create a comprehensive document detailing the PsExec installation steps, including screenshots and troubleshooting tips. Ensure the document is accessible to all team members."
  ),

  new Data(
    "Execute Simple Remote Command",
    "Use PsExec to run a simple remote command (e.g., opening Notepad) on a target PC in the lab. Confirm that the command executes successfully."
  ),
  new Data(
    "Run Remote System Check",
    "Execute a remote system check using PsExec to gather information about the target PC's system configuration and status. Analyze the results for accuracy."
  ),
  new Data(
    "Deploy Software Package Remotely",
    "Test deploying a small software package to multiple PCs using PsExec. Ensure that the software installs correctly on each target PC."
  ),
  new Data(
    "Execute Batch Script Remotely",
    "Use PsExec to execute a batch script on a remote PC. Verify that the script runs successfully and performs the intended tasks."
  ),
  new Data(
    "Perform Remote Reboot",
    "Use PsExec to remotely reboot a target PC in the lab. Confirm that the PC reboots as expected and reconnects to the network."
  ),
  new Data(
    "Collect Log Files Remotely",
    "Use PsExec to collect log files from remote PCs. Ensure that the logs are successfully retrieved and stored in a central location for analysis."
  ),

  new Data(
    "Create Network Shared Directory",
    "Set up a shared network directory accessible to all PCs in the lab. Configure necessary permissions for read and write access."
  ),
  new Data(
    "Upload Test Files",
    "Upload a variety of test files (e.g., documents, images, and executable files) to the network directory. Verify that the files are accessible from all PCs in the lab."
  ),
  new Data(
    "Monitor Network Access Speed",
    "Test the speed of accessing and transferring files to and from the network directory from different PCs. Record and analyze the data to ensure optimal performance."
  ),
  new Data(
    "Test File Synchronization",
    "Implement and test a file synchronization process to ensure that changes made to files in the network directory are reflected across all PCs in the lab."
  ),
  new Data(
    "Configure Backup Process",
    "Set up and test a backup process for the network directory. Ensure that files are backed up regularly and can be restored in case of data loss."
  ),
  new Data(
    "Assess Security Settings",
    "Evaluate and configure the security settings of the network directory. Ensure that only authorized users have access and that all files are protected against unauthorized access."
  ),

  new Data(
    "Setup Installer Directory",
    "Create a directory in the network share dedicated to storing installers. Upload the required installer files to this directory."
  ),
  new Data(
    "Configure Client Access",
    "Configure the PCs in the lab to access the network directory and retrieve the installer files. Ensure that all necessary network paths and permissions are set up correctly."
  ),
  new Data(
    "Execute Installer Retrieval",
    "Simulate a client operation where each PC in the lab retrieves the installer from the network directory. Verify that the installer files are successfully downloaded."
  ),
  new Data(
    "Install Software from Network Directory",
    "Run the installers on each PC to ensure that software installations from the network directory proceed without issues. Document the process and resolve any encountered problems."
  ),
  new Data(
    "Verify Installation Integrity",
    "Check the integrity of the installed software on each PC to ensure that the installation process completed successfully and that the software functions correctly."
  ),
  new Data(
    "Document Simulation Process",
    "Create a detailed document outlining the simulation process, including steps taken, issues encountered, and resolutions. Share this document with the team for future reference."
  ),

  new Data(
    "Identify Server Hardware Needs",
    "Determine the hardware requirements for the server that will host the network directory and support PsExec operations. Consider CPU, RAM, storage, and network capabilities."
  ),
  new Data(
    "Document Server Specifications",
    "Create a detailed document listing the specified hardware requirements for the server. Include recommendations for components and potential suppliers."
  ),
];

// LOGIC FOR SCRAPPING

const buttons = document.querySelectorAll(".button.button-primary.detailsbtn");  // BUTTON SUBMIT
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

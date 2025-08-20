function showTab(tabName, element) {
  // Hide all content
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  // Remove active from all tabs
  const tabs = document.querySelectorAll(".custom-tab");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Show selected content
  document.getElementById(tabName + "-content").classList.add("active");

  // Add active to clicked tab
  element.classList.add("active");
}

const tabs = document.querySelectorAll(".custom-tab");

function changeTab(direction) {
  const tabs = document.querySelectorAll(".custom-tab");
  const activeTab = document.querySelector(".custom-tab.active");

  let currentIndex = Array.from(tabs).indexOf(activeTab);
  let newIndex = currentIndex + direction;

  if (newIndex < 0) newIndex = tabs.length - 1;
  if (newIndex >= tabs.length) newIndex = 0;
  tabs[newIndex].click();
}

// Attach to your SVG arrows
document
  .querySelector(".prev-arrow")
  .addEventListener("click", () => changeTab(-1));
document
  .querySelector(".next-arrow")
  .addEventListener("click", () => changeTab(1));

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-reject-table")) {
    // Show the reject modal
    const modal = new bootstrap.Modal(document.getElementById("rejectModal"));
    modal.show();

    // Store reference to the clicked button for later use
    document.getElementById("rejectModal").dataset.targetRow =
      e.target.closest("tr").rowIndex;
  }

  if (e.target.classList.contains("btn-approve-table")) {
    // Simple approve action
    console.log("Approved!");
    alert("Entry approved successfully!");
  }
});

// Handle confirm reject in modal
document.getElementById("confirmReject").addEventListener("click", function () {
  const comment = document.getElementById("rejectComment").value;
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("rejectModal")
  );

  console.log("Project rejected with comment:", comment);
  alert("Project rejected successfully!");

  // Clear comment and close modal
  document.getElementById("rejectComment").value = "";
  modal.hide();
});

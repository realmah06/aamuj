let activeDropdown = null; // Stores the currently opened dropdown

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  
  if (activeDropdown && activeDropdown !== dropdown) {
    activeDropdown.style.maxHeight = null; // Close previously opened dropdown
  }
  
  if (dropdown.style.maxHeight) {
    dropdown.style.maxHeight = null; // Close if it's already open
    activeDropdown = null;
  } else {
    dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Open
    activeDropdown = dropdown;
  }
}


function openPopup(popupId) {
            document.getElementById(popupId).classList.add('show');
        }

        function closePopup(event, popupId) {
            if (event.target.classList.contains('popup-container') || event.target.classList.contains('close-btn')) {
                document.getElementById(popupId).classList.remove('show');
            }
        }
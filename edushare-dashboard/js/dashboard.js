// JavaScript code for handling interactivity in the EduShare dashboard

// Function to navigate to different sections of the dashboard
function navigateToSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none');

    // Show the selected section
    const selectedSection = document.getElementById(`${section}-section`);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Function to show the login modal
function showLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
}

// Function to hide the login modal
function hideLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
}

// Event listeners for navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const section = item.textContent.trim().toLowerCase();
        navigateToSection(section);
    });
});

// Event listener for the login modal close button
document.querySelector('.close').addEventListener('click', hideLoginModal);

// Event listeners for the authentication tabs
document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const activeTab = document.querySelector('.auth-tab.active');
        const activeForm = document.querySelector('.auth-form.active');

        // Deactivate the current tab and form
        activeTab.classList.remove('active');
        activeForm.classList.remove('active');

        // Activate the clicked tab and corresponding form
        tab.classList.add('active');
        const formToShow = document.getElementById(`${tab.dataset.tab}Form`);
        formToShow.classList.add('active');
    });
});
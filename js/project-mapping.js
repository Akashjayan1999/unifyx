// const toggleIcon = document.getElementById('toggleIcon');
// const projectDetails = document.getElementById('projectDetails');

// projectDetails.addEventListener('shown.bs.collapse', () => {
//   toggleIcon.classList.add('rotate');
//   console.log('Project details expanded');
//   toggleIcon.setAttribute('aria-expanded', 'true');
// });

// projectDetails.addEventListener('hidden.bs.collapse', () => {
//   toggleIcon.classList.remove('rotate');
//   toggleIcon.setAttribute('aria-expanded', 'false');
// });


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const mainContainer = document.getElementById('hidesectionContainer');
    const buttonClickIitem = document.getElementById('buttonClickIitem');
    const noFound = document.getElementById('noFound')
    searchInput.addEventListener('click', function() {
        mainContainer.classList.remove('search-results');
    });

    buttonClickIitem.addEventListener('click', function() {
        noFound.classList.add('hide');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttonClickIitem = document.getElementById('buttonClickIitem');
    const noFound = document.getElementById('noFound');
    const cardContainerItems = document.getElementById('card-container-items');
    buttonClickIitem.addEventListener('click', function() {
        noFound.classList.add('hide');
        cardContainerItems.classList.remove('hide');
    });
});
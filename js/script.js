document.addEventListener('DOMContentLoaded', () => {

    // Handle Navigation Click
    const navItems = 
    document.querySelectorAll('.nav-item') ;
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active')) ; 
            item.classList.add('active');
        const target =
        item.getAttribute('data-target') ;
        console.log('Navigating to ${target}') ;
        });
    });

    // Handle Filter Button click
    const filterButton = 
    document.getElementById('filterButton');
    filterButton.addEventListener('click', () => {
        const date =
    document.getElementById('date').value;
    const month =
    document.getElementById('month').value;
    const year =
    document.getElementById('year').value;
    console.log('Filtering by Date: ${date}, Month: ${month}, Year: ${year}');

    });
})
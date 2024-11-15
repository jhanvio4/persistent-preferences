document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const itemList = document.getElementById('item-list');
    const themeSelector = document.getElementById('theme');
    const listStyleSelector = document.getElementById('list-style');

    // List items to be added
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

    // Load preferences from localStorage
    const loadPreferences = () => {
        const theme = localStorage.getItem('theme') || 'light';
        const listStyle = localStorage.getItem('listStyle') || 'none';

        // Apply theme
        document.body.className = theme;

        // Apply list style
        itemList.style.listStyleType = listStyle;

        // Set selected options in preferences panel
        themeSelector.value = theme;
        listStyleSelector.value = listStyle;
    };

    // Save preferences to localStorage
    const savePreferences = () => {
        localStorage.setItem('theme', themeSelector.value);
        localStorage.setItem('listStyle', listStyleSelector.value);
    };

    // Dynamically add items to the list
    const renderList = () => {
        itemList.innerHTML = ''; // Clear existing list
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            itemList.appendChild(li);
        });
    };

    // Event listeners for preferences panel
    themeSelector.addEventListener('change', () => {
        savePreferences();
        document.body.className = themeSelector.value;
    });

    listStyleSelector.addEventListener('change', () => {
        savePreferences();
        itemList.style.listStyleType = listStyleSelector.value;
    });

    // Initialize
    loadPreferences();
    renderList();
});

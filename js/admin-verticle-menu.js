// Link
var dashboardLink = document.getElementById('dashboardLink');
var catalogLink = document.getElementById('catalogLink');
var suppliersLink = document.getElementById('suppliersLink');
var rfqLink = document.getElementById('rfqLink');
var networkLink = document.getElementById('networkLink');
var othersLink = document.getElementById('othersLink');
var usersLink = document.getElementById('usersLink');
var integrationsLink = document.getElementById('integrationsLink');
var settingsLink = document.getElementById('settingsLink');
var helpLink = document.getElementById('helpLink');

// Menu
var dashboardMenu = document.getElementById('dashboardMenu');
var catalogMenu = document.getElementById('catalogMenu');
var suppliersMenu = document.getElementById('suppliersMenu');
var rfqMenu = document.getElementById('rfqMenu');
var networkMenu = document.getElementById('networkMenu');
var othersMenu = document.getElementById('othersMenu');
var usersMenu = document.getElementById('usersMenu');
var integrationsMenu = document.getElementById('integrationsMenu');
var settingsMenu = document.getElementById('settingsMenu');
var helpMenu = document.getElementById('helpMenu');

// dashboardLink
dashboardLink.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    suppliersMenu.style.display = 'none';
    rfqMenu.style.display = 'none';
    networkMenu.style.display = 'none';
    othersMenu.style.display = 'none';
    usersMenu.style.display = 'none';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

dashboardMenu.addEventListener('mouseout', (event) => {
    if (!dashboardMenu.contains(event.relatedTarget)) {
        dashboardMenu.style.display = 'none';
    }
});

// catalogLink
catalogLink.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'block';
    suppliersMenu.style.display = 'none';
    rfqMenu.style.display = 'none';
    networkMenu.style.display = 'none';
    othersMenu.style.display = 'none';
    usersMenu.style.display = 'none';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

catalogMenu.addEventListener('mouseout', (event) => {
    if (!catalogMenu.contains(event.relatedTarget)) {
        catalogMenu.style.display = 'none';
    }
});

// suppliersLink
suppliersLink.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    suppliersMenu.style.display = 'block';
    rfqMenu.style.display = 'none';
    networkMenu.style.display = 'none';
    othersMenu.style.display = 'none';
    usersMenu.style.display = 'none';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

suppliersMenu.addEventListener('mouseout', (event) => {
    if (!suppliersMenu.contains(event.relatedTarget)) {
        suppliersMenu.style.display = 'none';
    }
});

// rfqLink
rfqLink.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    suppliersMenu.style.display = 'none';
    rfqMenu.style.display = 'block';
    networkMenu.style.display = 'none';
    othersMenu.style.display = 'none';
    usersMenu.style.display = 'none';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

rfqMenu.addEventListener('mouseout', (event) => {
    if (!rfqMenu.contains(event.relatedTarget)) {
        rfqMenu.style.display = 'none';
    }
});

// networkLink
networkLink.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    suppliersMenu.style.display = 'none';
    rfqMenu.style.display = 'none';
    networkMenu.style.display = 'block';
    othersMenu.style.display = 'none';
    usersMenu.style.display = 'none';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

networkMenu.addEventListener('mouseout', (event) => {
    if (!networkMenu.contains(event.relatedTarget)) {
        networkMenu.style.display = 'none';
    }
});

// networkLink
othersLink.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    suppliersMenu.style.display = 'none';
    rfqMenu.style.display = 'none';
    networkMenu.style.display = 'none';
    othersMenu.style.display = 'block';
    usersMenu.style.display = 'none';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

othersMenu.addEventListener('mouseout', (event) => {
    if (!networkMenu.contains(event.relatedTarget)) {
        networkMenu.style.display = 'none';
    }
});

// usersLink
usersLink.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    suppliersMenu.style.display = 'none';
    rfqMenu.style.display = 'none';
    networkMenu.style.display = 'none';
    othersMenu.style.display = 'none';
    usersMenu.style.display = 'block';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

usersMenu.addEventListener('mouseout', (event) => {
    if (!usersMenu.contains(event.relatedTarget)) {
        usersMenu.style.display = 'none';
    }
});

// integrationsLink
integrationsLink.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    suppliersMenu.style.display = 'none';
    rfqMenu.style.display = 'none';
    networkMenu.style.display = 'none';
    othersMenu.style.display = 'none';
    usersMenu.style.display = 'none';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

integrationsMenu.addEventListener('mouseout', (event) => {
    if (!integrationsMenu.contains(event.relatedTarget)) {
        integrationsMenu.style.display = 'none';
    }
});

// settingsLink
settingsLink.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    suppliersMenu.style.display = 'none';
    rfqMenu.style.display = 'none';
    networkMenu.style.display = 'none';
    othersMenu.style.display = 'none';
    usersMenu.style.display = 'none';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

settingsMenu.addEventListener('mouseout', (event) => {
    if (!settingsMenu.contains(event.relatedTarget)) {
        settingsMenu.style.display = 'none';
    }
});

// helpMenu
helpMenu.addEventListener('mouseover', () => {
    dashboardMenu.style.display = 'none';
    catalogMenu.style.display = 'none';
    suppliersMenu.style.display = 'none';
    rfqMenu.style.display = 'none';
    networkMenu.style.display = 'none';
    othersMenu.style.display = 'none';
    usersMenu.style.display = 'none';
    integrationsMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    helpMenu.style.display = 'none';
});

helpMenu.addEventListener('mouseout', (event) => {
    if (!helpMenu.contains(event.relatedTarget)) {
        helpMenu.style.display = 'none';
    }
});    
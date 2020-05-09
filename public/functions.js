"use strict"

/**
 * Gombra való kattintáskor oldal és gomb aktiválás
 * @param {*} event Esemény
 */
function navClick(event) {
    activateNavItem(event.target.id);
    //console.log(event.target.id);
    activatePage(event.target.id.replace("Button", "Page"));
}
/**
 * Aktiválja a gombot
 * @param {String} navID Gomb ID
 */
function activateNavItem(navID) {
    document.querySelectorAll(".navItem").forEach(item => {
        item.classList.remove("activeNavItem");
    });
    if (window.location.hash != "#Error") {
        document.getElementById(navID).classList.add("activeNavItem");
    }
}
/**
 * Aktiválja az oldalt
 * @param {String} pageID Oldal ID
 */
function activatePage(pageID) {
    document.querySelectorAll(".page").forEach(item => {
        item.classList.remove("activePage");
    });
    document.getElementById(pageID).classList.add("activePage");
    location.hash = pageID.replace("Page", "");
}
/**
 * Hash-ből aktiválja az oldalt és a gombot
 * @param {String} page Oldal
 * @param {String} nav Gomb
 */
function hashPageChange(page, nav) {
    hashChange(hashToID(page), hashToID(nav));
}
/**
 * Aktiválja az oldalt és a gombot
 * @param {String} page Oldal
 * @param {String} nav Gomb
 */
function hashChange(page, nav) {
    activatePage(page);
    activateNavItem(nav);
}
/**
 * Hibakezelés, ha érvénytelen a hash. Aktiválja az ErrorPage-et és átírja az oldal címét "A parlagfű - Error!"-ra
 */
function error() {
    //location.hash = "Error";
    activatePage("ErrorPage");
    errorTitle();
    document.querySelectorAll(".navItem").forEach(item => {
        item.classList.remove("activeNavItem");
    });
}
/**
 * Kiírja konzolba a hibaüzenetet ("Error! Hash not found!")
 */
function errorMessage() {
    console.error("Error! Hash not found!");
}

/**
 * Leszedi a hash-t és a megadott típust adja hozzá, így visszaadja ID-vá alakítva
 * @param {String}  type ID típusa
 */
function hashToID(type) { 
    return window.location.hash.replace("#", "").concat(type);
}
/**
 * Átírja az oldal címét "A parlagfű - " + az ID típusának a nevére
 * @param {String}  type ID típusa
 */
function changeTitle(type) {
    document.title = "A parlagfű - " + document.getElementById(hashToID(type)).innerHTML;
}
/**
 * Átírja az oldal címét "A parlagfű - Error!"-ra
 */
function errorTitle() {
    document.title = "A parlagfű - Error!";
}

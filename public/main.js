"use strict";
window.addEventListener("load", setupPage);

function setupPage() {
    //console.log(window.location.hash);
    if (document.getElementById(hashToID("Page")) === null && window.location.hash != "") {
        //console.log(document.getElementById(window.location.hash.replace("#", "").concat("Page")));
        error;
    } else if (window.location.hash != "") {
        if (window.location.hash == "#Error") {
            errorMessage();
            activatePage(hashToID("Page"));
            errorTitle();
        } else {
            hashPageChange("Page", "Button");
            changeTitle("Button");
        }
        /*document.querySelectorAll(".navItem").forEach(item => {
            if (window.location.hash != "Error") {
                item.classList.remove("activeNavItem");
            }
        });*/
    } else if (window.location.hash == "") {
        hashChange("ANovenyrolPage", "ANovenyrolButton");
    }
    console.log("Page loaded.");
    document.querySelectorAll(".navItem").forEach(item => {
        item.addEventListener("click", navClick);
    });
    window.addEventListener("hashchange", () => {
        console.log(window.location.hash);
        if (document.getElementById(hashToID("Page")) === null && window.location.hash != ""){
            errorMessage();
            window.location.replace("#Error"); //Eredeti törölve az előzményekből
        } else if (window.location.hash == "#Error") {
            error();
        /*} else if(window.location.hash == "#Error") {
            error();*/
        }else{
            hashPageChange("Page", "Button");
            changeTitle("Button");
        }
        //console.log(document.getElementById(hashToID("Button")).innerHTML);
        //console.log(window.location.hash.replace("#", "").concat("Button"));
    });
}

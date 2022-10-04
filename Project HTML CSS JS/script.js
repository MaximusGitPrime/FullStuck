var newUpload = document.getElementById("addNewImage");
newUpload.addEventListener("submit", onSubmit);
function onSubmit(ev) {
    ev.preventDefault();
    addDivimg();
}
function addDivimg() {
    var imgIn = document.getElementById("imgIn");
    var logoName = document.getElementById("LogoName");
    var description = document.getElementById("description");
    var newDiv = document.createElement("div");
    var newHeader = document.createElement("h2");
    var newImg = document.createElement("img");
    var newPara = document.createElement("p");
    newImg.setAttribute("src", imgIn.value);
    newHeader.innerText = logoName.value;
    newPara.innerText = description.value;
    newDiv.appendChild(newHeader);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newPara);
    newDiv.classList.add("game");
    var gallery_container = document.querySelector(".gallery");
    gallery_container.appendChild(newDiv);
    imgIn.value = "";
    logoName.value = "";
    description.value = "";
}

const categoriesLength = document.querySelector("#categories");
console.log("Number of categories", categoriesLength.children.length);

const categoriesItemRef = document.querySelectorAll(".item");

console.log("Category:", categoriesItemRef[0].firstElementChild.innerHTML);
console.log("Elements:", categoriesItemRef[0].lastElementChild.children.length);

console.log("Category:", categoriesItemRef[1].firstElementChild.innerHTML);
console.log("Elements:", categoriesItemRef[1].lastElementChild.children.length);


console.log("Category:", categoriesItemRef[2].firstElementChild.innerHTML);
console.log("Elements:", categoriesItemRef[2].lastElementChild.children.length);
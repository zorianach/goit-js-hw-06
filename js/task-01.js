
const allCategories = document.getElementById('categories').children.length;
console.log(`Number of categories: ${allCategories}`);

const categoriesPerItem = document.querySelectorAll('.item');
categoriesPerItem.forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length);
});

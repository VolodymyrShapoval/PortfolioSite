function sortByOption(){
    const sortOption = document.getElementById("sort-options").value;
    let columnIndex;

    switch(sortOption){
        case "date":
            columnIndex = 1;
            dataType = "date";
            break;
        case "rate":
            columnIndex = 2;
            dataType = "number";
            break;
        default: return;
    }

    sortTable(columnIndex, dataType);
}

function sortTable(columnIndex, dataType) {
    let tbody = document.getElementById("projects_table").getElementsByTagName("tbody")[0];
    let rowsArray = Array.from(tbody.rows);
    let compare;

    switch(dataType) {
        case "number":
            compare = function(rowA, rowB) {
                const valueA = parseInt(rowA.cells[columnIndex].innerHTML);
                const valueB = parseInt(rowB.cells[columnIndex].innerHTML);
                return valueA - valueB;
            };
            break;
        case "date":
            compare = function(rowA, rowB) {
                const dateA = new Date(rowA.cells[columnIndex].innerHTML);
                const dateB = new Date(rowB.cells[columnIndex].innerHTML);
                return dateA - dateB; // Сортуємо за зростанням
            };
            break;
        default: break;
    }

    rowsArray.sort(compare);
    // Очищаємо tbody перед повторним додаванням відсортованих рядків
    tbody.innerHTML = '';
    tbody.append(...rowsArray);
}
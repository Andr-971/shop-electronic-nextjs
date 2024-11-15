
function splitArray(arr, len) {
    var chunks = [],
        i = 0,
        n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
}

// const cases = ["товар", "товара", "товаров"];
function pluralize(amount, cases) {
    const indexes = [2, 0, 1, 1, 1, 2];
    const mod100 = amount % 100;
    const mod10 = amount % 10;
    const index =
        mod100 > 4 && mod100 < 20 ? 2 : indexes[mod10 < 5 ? mod10 : 5];
    return cases[index];
}
// Существует ли нода?
function inDocument(node) {
    var context = node.parentNode;
    while (context !== null) {
        if (context === document) return true;
        else context = context.parentNode;
    }
    return false;
}

export { splitArray, pluralize, inDocument };
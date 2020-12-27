function titleCaseEdit(title) {
    var words = title.split(" ");
    title = "";
    words.forEach(element => {
        var characters = element.split("");
        characters[0] = characters[0].toUpperCase();
        element= characters.join("");
        title += element + " ";
    });
    return title.trim();
}

// Do not edit this line;
module.exports = titleCaseEdit;
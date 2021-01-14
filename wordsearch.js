const wordSearch = (letters, word) => {
    if (letters.length === 0)return undefined;
    const horizontalJoin = letters.map(ls => ls.join(''));
    const tempArr = letters[0].map((col, i) => letters.map(row => row[i]));
    const verticalJoin = tempArr.map(ls => ls.join(''));
    const reversedWord = word.split('').reverse().join('');
    for ( let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } else if (l.includes(reversedWord)){
            return true;
        }
    for (let x of verticalJoin) {
        if (x.includes(word)) {
            return true;
        } else if (x.includes(reversedWord)){
            return true;
        }  
    }
        }
        return false;
}

module.exports = wordSearch;
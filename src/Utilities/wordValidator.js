export const isValidWord = (word) => {
    const dictionary = ["APPLE", "TREE", "SCRABBLE", "WORLD"];
    return dictionary.includes(word.toUpperCase());
};

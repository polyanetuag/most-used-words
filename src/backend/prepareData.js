module.exports = (rows) => {
  return new Promise((resolver, reject) => {
    try {
      const words = rows
        .filter(filterValidRows)
        .map(removePunctuation)
        .map(removeTags)
        .reduce(mergeRows)
        .split(" ")
        .map((word) => word.toLowerCase())
        .map((word) => word.replace('"', ""));

      resolver(words);
    } catch (e) {
      reject(e);
    }
  });
};

//FILTRAGEM DAS LEGENDAS
function filterValidRows(row) {
  const notNumber = !parseInt(row.trim());
  const notEmpty = !!row.trim();
  const notInterval = !row.includes("-->");
  return notNumber && notEmpty && notInterval;
}

//REMOÇÃO DAS PONTUAÇÕES NA LEGENDA
const removePunctuation = (row) => row.replace(/[,?!.-]/g, "");

//REMOÇÃO DAS TAG'S
const removeTags = (row) => row.replace(/(<[^>]+)>/gi, "").trim();

//JUNÇÃO DAS LINHAS EM UM ÚNICO TEXTO
const mergeRows = (fullText, row) => `${fullText} ${row}`;

import { ipcMain } from "electron";

const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");

ipcMain.on("process-subtitles", (event, paths) => {
  pathsToRows(paths)
    .then((rows) => prepareData(rows))
    .then((words) => console.log(words))
    .then(() => {
      event.reply("process-subtitles", [
        { name: "i", amount: 1234 },
        { name: "you", amount: 530 },
        { name: "he", amount: 429 },
        { name: "she", amount: 400 },
        { name: "game", amount: 346 },
        { name: "money", amount: 1250 },
      ]);
    });
});

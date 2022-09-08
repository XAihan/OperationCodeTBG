import { ref } from "vue";
import { defineStore } from "pinia";
import { cardData } from "../const/const";
interface cardInfo {
  name: string;
  role: string;
  isSelect: boolean;
}

export const useDataStore = defineStore("codeInfo", () => {
  const gameData = ref<cardInfo[][]>(createChessboard()); // 游戏信息
  const set = ref<Set<string>>(new Set()); // 去重使用的Set
  const initFlag = ref(false);
  // 创建棋盘
  function createChessboard(row = 5, col = 5) {
    let chessboard = new Array(row).fill(0);
    chessboard = chessboard.map((item) => {
      item = [];
      for (let i = 0; i < col; i++) {
        item.push({
          name: getCardName(),
          role: "gray",
          isSelect: false,
        });
      }
      return item;
    });
    return chessboard;
  }

  // 填充卡片名称
  function getCardName() {
    const randomNum = Math.floor(Math.random() * cardData.length);
    return cardData.splice(randomNum, 1)[0];
  }

  // 设置角色（红方，蓝方，中立，炸弹）
  function setRole(role: string, num = 8) {
    for (let i = 0; i < num; i++) {
      const [x, y] = randomCoord();
      // 进行去重，如果重复，则递归.
      if (set.value.has(`${x}-${y}`)) {
        setRole(role, 1);
      } else {
        set.value.add(`${x}-${y}`);
        gameData.value[x][y].role = role;
      }
    }
  }

  function randomCoord(row = 5, col = 5) {
    const x = Math.floor(Math.random() * row);
    const y = Math.floor(Math.random() * col);
    return [x, y];
  }

  // 初始化游戏信息
  function init() {
    gameData.value = createChessboard();
    setRole("blue");
    setRole("red");
    setRole("black", 1);
    initFlag.value = true;
  }

  return { gameData, initFlag, init };
});

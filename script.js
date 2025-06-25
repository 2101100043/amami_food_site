document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("changeMessage");
  const msg = document.getElementById("dynamicMessage");

  const messages = [
    "奄美の食は心にしみる！",
    "黒糖の甘さで癒やされよう！",
    "海と料理で二度おいしい！",
    "今日も奄美はおいしい！"
  ];

  btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * messages.length);
    msg.textContent = messages[random];
  });
});

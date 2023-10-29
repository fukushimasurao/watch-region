const DEFAULT_COLOR = "#F2F3F3";

// ページが読み込まれたときに実行
document.addEventListener("DOMContentLoaded", function () {
  // カラー情報をストレージから取得
  chrome.storage.local.get(
    [
      "TOKYO_COLOR",
      "VIRGINIA_COLOR",
      "OHIO_COLOR",
      "CALIFORNIA_COLOR",
      "OREGON_COLOR",
    ],
    function (result) {
      document.getElementById("colorPickerTokyo").value =
        result.TOKYO_COLOR || DEFAULT_COLOR;
      document.getElementById("colorPickerUSEast1").value =
        result.VIRGINIA_COLOR || DEFAULT_COLOR;
      document.getElementById("colorPickerUSEast2").value =
        result.OHIO_COLOR || DEFAULT_COLOR;
      document.getElementById("colorPickerUSWest1").value =
        result.CALIFORNIA_COLOR || DEFAULT_COLOR;
      document.getElementById("colorPickerUSWest2").value =
        result.OREGON_COLOR || DEFAULT_COLOR;
    }
  );
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

  // 各カラーピッカーの値を取得
  let tokyoColor = document.getElementById("colorPickerTokyo").value;
  let useast1Color = document.getElementById("colorPickerUSEast1").value;
  let useast2Color = document.getElementById("colorPickerUSEast2").value;
  let uswest1Color = document.getElementById("colorPickerUSWest1").value;
  let uswest2Color = document.getElementById("colorPickerUSWest2").value;

  // 値をchrome.storage.localに保存
  chrome.storage.local.set({
    TOKYO_COLOR: tokyoColor,
    VIRGINIA_COLOR: useast1Color,
    OHIO_COLOR: useast2Color,
    CALIFORNIA_COLOR: uswest1Color,
    OREGON_COLOR: uswest2Color,
  });

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let currentTab = tabs[0];
    // アクティブなタブをリロード
    chrome.tabs.reload(currentTab.id);
  });
});

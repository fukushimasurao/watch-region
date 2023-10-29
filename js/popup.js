const DEFAULT_COLOR = "#F2F3F3";

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

  // 各カラーピッカーの値を取得
  let tokyoColor = document.getElementById("colorPickerTokyo").value;
  let useast1Color = document.getElementById("colorPickerUSEast1").value;
  let useast2Color = document.getElementById("colorPickerUSEast2").value;
  let uswest1Color = document.getElementById("colorPickerUSWest1").value;
  let uswest2Color = document.getElementById("colorPickerUSWest2").value;

  // 値をchrome.storage.localに保存
  chrome.storage.local.set(
    {
      TOKYO_color: tokyoColor,
      USEAST1_color: useast1Color,
      USEAST2_color: useast2Color,
      USWEST1_color: uswest1Color,
      USWEST2_color: uswest2Color,
    },
    function () {
      console.log("Colors saved:");
      console.log("TOKYO: " + tokyoColor);
      console.log("USEAST1: " + useast1Color);
      console.log("USEAST2: " + useast2Color);
      console.log("USWEST1: " + uswest1Color);
      console.log("USWEST2: " + uswest2Color);
    }
  );
});

// ストレージの値を取得してログに出力
chrome.storage.local.get(
  [
    "TOKYO_color",
    "USEAST1_color",
    "USEAST2_color",
    "USWEST1_color",
    "USWEST2_color",
  ],
  function (result) {
    if (result.TOKYO_color !== undefined) {
      console.log("TOKYO_color value currently is " + result.TOKYO_color);
    } else {
      console.log("TOKYO_color does not exist in storage.");
    }

    if (result.USEAST1_color !== undefined) {
      console.log("USEAST1_color value currently is " + result.USEAST1_color);
    } else {
      console.log("USEAST1_color does not exist in storage.");
    }

    if (result.USEAST2_color !== undefined) {
      console.log("USEAST2_color value currently is " + result.USEAST2_color);
    } else {
      console.log("USEAST2_color does not exist in storage.");
    }

    if (result.USWEST1_color !== undefined) {
      console.log("USWEST1_color value currently is " + result.USWEST1_color);
    } else {
      console.log("USWEST1_color does not exist in storage.");
    }

    if (result.USWEST2_color !== undefined) {
      console.log("USWEST2_color value currently is " + result.USWEST2_color);
    } else {
      console.log("USWEST2_color does not exist in storage.");
    }
  }
);

document.addEventListener("DOMContentLoaded", function () {
  // カラー情報をストレージから取得
  chrome.storage.local.get(
    [
      "TOKYO_color",
      "USEAST1_color",
      "USEAST2_color",
      "USWEST1_color",
      "USWEST2_color",
    ],
    function (result) {
      // 東京のカラー情報
      document.getElementById("colorPickerTokyo").value =
        result.TOKYO_color || DEFAULT_COLOR;

      // 米国東部 (バージニア北部) のカラー情報
      document.getElementById("colorPickerUSEast1").value =
        result.USEAST1_color || DEFAULT_COLOR;

      // 米国東部 (オハイオ) のカラー情報
      document.getElementById("colorPickerUSEast2").value =
        result.USEAST2_color || DEFAULT_COLOR;

      // 米国西部 (北カリフォルニア) のカラー情報
      document.getElementById("colorPickerUSWest1").value =
        result.USWEST1_color || DEFAULT_COLOR;

      // 米国西部 (オレゴン) のカラー情報
      document.getElementById("colorPickerUSWest2").value =
        result.USWEST2_color || DEFAULT_COLOR;
    }
  );
});

const clearButtons = document.querySelectorAll(".clear-btn");

clearButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const targetInputId = event.target.getAttribute("data-target");
    const targetInput = document.getElementById(targetInputId);
    targetInput.value = DEFAULT_COLOR;
  });
});

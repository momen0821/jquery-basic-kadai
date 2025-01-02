$(function () {
  $("#change-color").on("click", function () {
    // ボタンの文字色を変更
    $("#target").css("color", "red");
  });
  $("#change-text").on("click", function () {
    // ボタンの文字を変更
    $("#target").text("Hello!");
  });
  $("#fade-out").on("click", function () {
    // フェードアウトする
    $("#target").fadeOut();
  });
  $("#fade-in").on("click", function () {
    // フェードアウトする
    $("#target").fadeIn();
  });
});

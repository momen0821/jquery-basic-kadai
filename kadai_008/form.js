$(function () {
  // ボタンのクリックイベント
  $(".btn").on("click", function () {
    // テキストボックスに文字を設定
    $(".text-box").val("クリックしました！");
  });
});

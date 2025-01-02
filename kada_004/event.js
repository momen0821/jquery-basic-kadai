$(window).on("load scroll", function (e) {
  if (e.type === "load") {
    $("div").text("loadイベントが発生しました");
    console.log("loadイベント発生");
  }
  if (e.type === "scroll") {
    $("div").text("scrollイベントが発生しました");
    console.log("scrollイベント発生");
  }
});

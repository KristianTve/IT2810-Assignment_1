    $.ajax({
    url : "text/cssFlexBox.txt",
    dataType: "text",
    success : function (data) {
    $("#cssFlexBox").html(data);
}
});

    $.ajax({
    url : "text/htmlCanvas.txt",
    dataType: "text",
    success : function (data) {
    $("#htmlCanvas").html(data);
}
});

    $.ajax({
    url : "text/SVG.txt",
    dataType: "text",
    success : function (data) {
    $("#SVGtext").html(data);
}
});

    $.ajax({
    url : "text/jQuery.txt",
    dataType: "text",
    success : function (data) {
    $("#jQueryText").html(data);
}
});

    $.ajax({
    url : "text/crossBrowser.txt",
    dataType: "text",
    success : function (data) {
    $("#cbt").html(data);
}
});

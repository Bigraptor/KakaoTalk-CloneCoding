$(document).ready(function() {

    var $actionBtn = $("#actionBtn"),
        $iconBtn = $("#actionBtn .fas"),
        $lockBtn = $("#lockBtn");

    $actionBtn.click(function(){
        $iconBtn.toggleClass("fa-times fa-comment");
        $lockBtn.toggleClass("showing-button");
    })
});
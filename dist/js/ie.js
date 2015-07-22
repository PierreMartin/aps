//  SI IE INFERIEUR A 10

$('.tooltip-content').hide();

$(".cursorTarget").mouseover(function() {
    $(this).find(".tooltip-content").show();
});
$(".cursorTarget").mouseout(function() {
    $(this).find(".tooltip-content").hide();
});

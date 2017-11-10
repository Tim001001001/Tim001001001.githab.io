$(document).ready(function () {

    $('button').click(function () {
        var newTask = $('input').val();
        $('.item_list').append('<div class="item">' + newTask + '</div>');
        $('input').val("");
    });





    $('input').keypress(function (e) {
        if (event.which == 13) {
            var newTask = $('input').val();
            $('.item_list').append('<div class="item">' + newTask + '<button class="Del">Delete</button></div>');
            $('input').val("");
        }
    });
$("div.item_list").on('click', 'button.Del', function() {

});



    $("div.item_list").on('dblclick','div.item',function () {
        $(this).toggleClass("rTasked");
    });
});
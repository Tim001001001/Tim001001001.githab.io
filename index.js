$(document).ready(function () {

    $('button').click(function () {
        var newTask = $('input').val();
        $('.item_list').append('<div class="item">' + newTask + '</div>');
        $('input').val("");
    });





    $('input').keypress(function (e) {
        if (event.which == 13) {
            var newTask = $('input').val();
            $('.item_list').append('<div class="item">' + newTask + '</div>');
            $('input').val("");
        }
    });




    $(".item").dblclick(function () {
        $(this).toggleClass("rTasked");
    });
});
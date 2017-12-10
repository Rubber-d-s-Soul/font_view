$(function() {

    $("div.menu div.col").on("click", function() {

        var url = $(this).attr('value');
        if (url != ("" || undefined || null)) {
            location.href = url;
        }

    });
})
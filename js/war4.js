$(function() {


    // $("button#r1").on("click", function() {

        $.ajax({

            url: " http://127.0.0.1:8000/book/",
            type: "GET",
            dataType: "json"

        }).done(function(result) {

            var ul = $("#movies");

            for (var i=0; i<result.length; i++){
                var li = $("<li>");
                li.text(result[i].author + ',"'+result[i].title + '"');

                var div = $("<div>");
                li.append(div);

                ul.append(li);
            }

        });
    // });
});
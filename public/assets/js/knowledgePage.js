$(function() {
    $(".change-status").on("click", function(event) {
        
        // Grabs values created in knowledge-block.handlebars
        var id = $(this).data("id");
        var newknown = $(this).data("newknown");
        var newknownstate = {
            known: newknown
        };
        console.log(newknownstate);

        $.ajax("/api/knowledge/" + id, {
            type: "PUT",
            data: newknownstate
        }).then(
            function() {
                console.log("changed status to", newknown);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        console.log("happening");
        event.preventDefault();

        var newTopic = {
            name: $("#topic").val().trim(),
        };

        $.ajax("/api/knowledge", {
            type: "POST",
            data: newTopic
        }).then(
            function() {
                console.log("new topic added");

                location.reload();
            }
        );
    });
})
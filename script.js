var arrayReturn = {};
var number = 0;
var category = null;
if (arrayReturn != " ") {
    $.ajax({
        type: 'GET',
        url: "https://valorant-api.com/v1/weapons",
        data: "",
        success: function (data) {
            arrayReturn = data.data;
        },
    });
}

$(document).on('keypress', function (e) {
    if (event.key === 'b') {
        if (category == null) {
            $.each(arrayReturn, function () {
                category = arrayReturn[number].category.split("::");
                if (category[1] != "Melee") {
                    $("#" + category[1]).append('<div class="' + category[1] + ' "> <img src="' + arrayReturn[number].shopData.newImage + '" alt=""> <div>500</div> <div>' + arrayReturn[number].displayName + '</div> </div>');
                }
                number++;
            });
        }
        
    }
});
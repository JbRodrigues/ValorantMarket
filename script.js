var arrayReturn = {};
var number = 0;
var category = null;
$(document).ready(function () {
    if (arrayReturn != " ") {
        $.ajax({
            type: 'GET',
            url: "https://valorant-api.com/v1/weapons",
            data: "",
            success: function (data) {
                arrayReturn = data.data;
                
                $.each(arrayReturn, function () {
                    category = arrayReturn[number].category.split("::");
                    if (category[1] != "Melee") {
                        console.log(category[1])
                        $("#"+category[1]).append(arrayReturn[number].shopData.cost)
                        console.log(arrayReturn[number])
                        $("#" + category[1]).append('<div id="' + category[1] + '"><img src="' + arrayReturn[number].shopData.newImage + '" alt="" class="img-gun"></div> <div>' + arrayReturn[number].shopData.cost + '</div> <div>' + arrayReturn[number].displayName + '</div> </div>');
                    }
                    number++;
                });
                number = 0;
            },
        });
    }
});
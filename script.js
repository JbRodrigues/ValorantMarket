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
                        $("." + category[1]).append('<div id="title">' + category[1] + '</div> <div class="box gun"  data-arma="' + arrayReturn[number].displayName + '"><div> <img src="' + arrayReturn[number].shopData.newImage + '" alt="" class="img-guns"></div> <div class="textBox">' + arrayReturn[number].shopData.cost + '</div> <div class="textBox">' + arrayReturn[number].displayName + '</div> </div>');
                    }
                    number++;
                });
                number = 0;
            },
        });
    }
});
const area = document.querySelector('.box')
area.addEventListener("mouseenter", function (event) {
    $(".gun").hover(
        function () {

            console.log(arrayReturn.find(arrayReturn => arrayReturn.displayName === $(this).data("arma")))
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        }
    );
});

function process_res(data) {
    console.log(data);
    for (i = 0; i < data.results.length; i++){
        $("#result").append(data.results[i].original_title + "<br>")
        $("#result").append(data.results[i].overview + "<br>")
        $("#result").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">`+ "<br>")
        $("#result").append(`<button id="${data.results[i].backdrop_path}" class="backdrop_button"> backdrop image!</button>` + "<br>");
    }
}

function backdrop() {
    x = $(this).attr("id");
    console.log(`<img src="https://image.tmdb.org/t/p/original${x}" width="50"%>`);
    $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${x}" width="50%">`)

}

function search_() {
    y = $("#movie").val()
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=e77a3151cbc4338ddafdee59c98ecc03&language=en-US&query=${y}&page=1&include_adult=false`,
        type: "get",
        success: process_res
    })
}
function setup() {
    $("#search").click(search_)
    $("body").on("click", ".backdrop_button", backdrop)
}


$(document).ready(setup)

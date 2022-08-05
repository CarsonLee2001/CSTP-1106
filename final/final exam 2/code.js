menu_value = ""
data = ""
page_number = 1
page_size = ""
function process_response(x) {
    data = x
    page_number = 1
    display()
    paginate_menu()
    
}

function call_ajax() {
    w = $("#movie_name").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=e77a3151cbc4338ddafdee59c98ecc03&query=${w}`,
        "type": "GET",
        "success": process_response
    })
}


function display() {
    $("#results").empty();
    
    page_size = Number(page_size)
    
   

    first_index = page_size * (page_number - 1)
    last_index = page_size * (page_number - 1) + (page_size - 1)
    
    for (i = first_index; i <= last_index; i++) {
        x = data.results[i].poster_path
        image_html = `<img src='https://image.tmdb.org/t/p/w500/${x}'>`
        $("#results").append(image_html + "<br>");
    }
}

function chage_page_number() {
    page_number = $(this).attr("id");
    page_number = Number(page_number)
    display()
}

function first_page(){
    page_number = 1
    display()
}
function last_page(){
    page_number = Math.ceil(data.results.length / page_size)
    display()
}
function prev_page(){
  
    page_number = page_number - 1

    if(page_number < 2){
        page_number = 1
    }

    display()
}



function paginate_menu(){
    for(i = 1; i <= Math.ceil(data.results.length / page_size); i++){

     
        $("#buttons").append(`<button class="display" id="${i}"> ${i}</button>`);
       
    }
}


function setup() {
    $("#find_movie_info").click(call_ajax)

    page_size = $("#page_size option:selected").val();

    $("#page_size").change(function () {
        page_size = $("#page_size option:selected").val();
    })

    $(".display").click(chage_page_number)
    $("body").on("click",  ".display", chage_page_number)
    $("body").on("click",  "#first", first_page)
    $("body").on("click",  "#last", last_page)
}

$(document).ready(setup)
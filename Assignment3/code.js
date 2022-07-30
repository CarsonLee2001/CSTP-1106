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
        "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${w}`,
        "type": "GET",
        "success": process_response
    })
}
function display_back_drop() {
    w = $(this).attr("id");
    console.log(`<img src="https://image.tmdb.org/t/p/original${w}" width="100"%>`);
    $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${w}" width="100%">`)
}

function display() {
    $("#results").empty();
    
    page_size = Number(page_size)
    
   

    first_index = page_size * (page_number - 1)
    last_index = page_size * (page_number - 1) + (page_size - 1)
    
    for (i = first_index; i <= last_index; i++) {
        $("#results").append("#"+(i+1) + "<br>");
        $("#results").append(data.results[i].original_title + "<br>");
        $("#results").append(data.results[i].overview + "<br>");
        x = data.results[i].poster_path
        image_html = `<img src='https://image.tmdb.org/t/p/w500/${x}'>`
        $("#results").append(image_html + "<br>");
        z = `<button id="${data.results[i].backdrop_path}" class="backdrop_button"> backdrop image!</button>`
        $("#results").append(z + "<br>");
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
function next_page(){
    page_number = page_number + 1

    if(page_number > Math.ceil(data.results.length / page_size)-1){
        page_number = Math.ceil(data.results.length / page_size)
    }
    display()  
}



function paginate_menu(){
    $("#buttons").append(`<button class="display_1" id="first">first</button>`)
    
     
    for(i = 1; i <= Math.ceil(data.results.length / page_size); i++){

     
        $("#buttons").append(`<button class="display" id="${i}"> ${i}</button>`);
       
    }

    $("#buttons").append(`<button class="display_2" id="last">last</button>`)

    $("#buttons").one("click", function(){
        previous_button_show()
      }
    );

}

function previous_button_show(){
    $("#buttons").prepend(`<button class="display_3" id="previous">previous</button>`)
    $("#buttons").append(`<button class="display_4" id="next">next</button>`)

    display()

}

function setup() {
    $("#find_movie_info").click(call_ajax)

    $("body").on("click", ".backdrop_button", display_back_drop)
    page_size = $("#page_size option:selected").val();

    $("#page_size").change(function () {
        page_size = $("#page_size option:selected").val();
    })

    $(".display").click(chage_page_number)
    $("body").on("click",  ".display", chage_page_number)
    $("body").on("click",  ".display_1", first_page)
    $("body").on("click",  ".display_2", last_page)
    $("body").on("click",  ".display_3", prev_page)
    $("body").on("click",  ".display_4", next_page)
}

$(document).ready(setup)
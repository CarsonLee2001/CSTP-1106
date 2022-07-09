function process_response(data){
    $("#z").html(JSON.stringify(data.main.temp
        ))
}
function init_ajax(){
    city_name = $('#x').val()
    $.ajax({  
        url:'https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric',
        type:'GET',
        success: process_response
    })
  }
  
  function setup(){
    $('#y').click(init_ajax);
  }
  $(document).ready(setup);

  
  
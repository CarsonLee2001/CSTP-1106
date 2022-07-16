function add_() {
    op1 = jQuery("#operand_1").val()

    op2 = jQuery("#operand_2").val()

    op1 = Number(op1)

    op2 = Number(op2)

    result = op1 + " + " + op2 + " = " + (op1 + op2)

    $("#result").html(result)

    $("#history").append(`<div class="addStyle"> ${result} <buton class="hide_row"> Hide this! </button> </div> `)
}

function sub_() {
    op1 = jQuery("#operand_1").val()

    op2 = jQuery("#operand_2").val()

    op1 = Number(op1)

    op2 = Number(op2)

    result = op1 + " - " + op2 + " = " + (op1 - op2)

    $("#result").html(result)

    $("#history").append(`<div class="subStyle"> ${result} <buton class="hide_row"> Hide this! </button> </div> `)
}

function mul_() {
    op1 = jQuery("#operand_1").val()

    op2 = jQuery("#operand_2").val()

    op1 = Number(op1)

    op2 = Number(op2)

    result = op1 + " * " + op2 + " = " + (op1 * op2)

    $("#result").html(result)

    $("#history").append(`<div class="mulStyle"> ${result} <buton class="hide_row"> Hide this! </button> </div> `)
}

function div_() {
    op1 = jQuery("#operand_1").val()

    op2 = jQuery("#operand_2").val()

    op1 = Number(op1)

    op2 = Number(op2)

    result = op1 + " / " + op2 + " = " + (op1 / op2)

    $("#result").html(result)

    $("#history").append(`<div class="divStyle"> ${result} <buton class="hide_row"> Hide this! </button> </div> `)
}
function x_() {
    $(this).parent().hide()
}

function setup() {
    console.log("setup() got called!");

    $("#add_").click(add_)

    $("#sub_").click(sub_)

    $("#mul_").click(mul_)

    $("#div_").click(div_)

    $("body").on("click", ".hide_row", x_)
}



    
$(document).ready(setup)

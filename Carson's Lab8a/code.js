function f1() {
    tmp1 = jQuery("#a").val()
    tmp2 = jQuery("#b").val()
    tmp1 = Number(tmp1)
    tmp2 = Number(tmp2)
    jQuery("#result").html("Result: " + tmp1 + " + " + tmp2 + " = " + (tmp1 + tmp2))
}
function f2() {
    tmp1 = jQuery("#a").val()
    tmp2 = jQuery("#b").val()
    tmp1 = Number(tmp1)
    tmp2 = Number(tmp2)
    jQuery("#result").html("Result: " + tmp1 + " - " + tmp2 + " = " + (tmp1 - tmp2))
}
function f3() {
    tmp1 = jQuery("#a").val()
    tmp2 = jQuery("#b").val()
    tmp1 = Number(tmp1)
    tmp2 = Number(tmp2)
    jQuery("#result").html("Result: " + tmp1 + " * " + tmp2 + " = " + (tmp1 * tmp2))
}
function f4() {
    tmp1 = jQuery("#a").val()
    tmp2 = jQuery("#b").val()
    tmp1 = Number(tmp1)
    tmp2 = Number(tmp2)
    jQuery("#result").html("Result: " + tmp1 + " / " + tmp2 + " = " + (tmp1 / tmp2))
}
function setup() {
    console.log("setup() got called!");
    jQuery("#add").click(f1)
    jQuery("#sub").click(f2)
    jQuery("#mul").click(f3)
    jQuery("#div").click(f4)
}

$(document).ready(setup)

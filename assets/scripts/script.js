

function changleVisibility() {
    $("#dimm").toggleClass("d-none");
    $("#social_network").toggleClass("d-none");
}

function showPhoneBlock() {
    $("#autorization_hr").toggleClass("d-none");
    $("#phone_autorization_block").toggleClass("d-none");
}

function hidePhoneBlock() {
    $("#autorization_hr").addClass("d-none");
    $("#phone_autorization_block").addClass("d-none");
}

$("#dimm").on("click", changleVisibility);
$("#dimm").on("click", hidePhoneBlock);
$("#login").on("click", changleVisibility);


$("#phone_autorization").on("click", showPhoneBlock);







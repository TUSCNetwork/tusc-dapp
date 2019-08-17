let swap_server_ip = "https://swap.tusc.network";
let tusc_wallet_api = "/tusc/api/wallet/";
let tusc_db_api = "/tusc/api/db/";
let endpoint_list_account_balances = swap_server_ip + tusc_wallet_api + "list_account_balances";
let endpoint_register_account = swap_server_ip + tusc_wallet_api + "register_account";
let endpoint_suggest_brain_key = swap_server_ip + tusc_wallet_api + "suggest_brain_key";
let endpoint_swap_stats = swap_server_ip + tusc_db_api + "swap_stats";
let occ_precision = 18;
let tusc_precision = 5;

async function checkTuscAddress(tusc_address) {
    var data = await $.getJSON(endpoint_list_account_balances + "/" + tusc_address.trim());
    if (data.error){
        return false;
    } else if (data.result) {
        if (data.result.length < 1) {
            return false;
        } else {
            return true;
        }
    }
}

async function getTuscAccountBalance(tusc_address) {
    var data = await $.getJSON(endpoint_list_account_balances + "/" + tusc_address.trim());
    if (data.error){
        return "-1";
    } else if (data.result) {
        if (data.result.length < 1) {
            return "0";
        } else {
            return data.result[0].amount.toString();
        }
    }
}

async function suggestBrainKey() {
    var data = await $.getJSON(endpoint_suggest_brain_key);
    if (data.error){
        return data.error;
    } else if (data.result) {
        if (data.result.length < 1) {
            return data.error;
        } else {
            return data.result;
        }
    }
}

async function getStats() {
    if (document.getElementById("occ_left_to_swap") == null) {
        return;
    }
    var data = await $.getJSON(endpoint_swap_stats);
    //console.log(data)
    if (data.error){
        console.log(data);
    } else {
        document.getElementById("occ_left_to_swap").innerHTML = addDecimalPoint(data.occ_left_to_swap, occ_precision);
        document.getElementById("occ_swapped").innerHTML = addDecimalPoint(data.occ_swapped, occ_precision);
        document.getElementById("tusc_swapped").innerHTML = addDecimalPoint(data.tusc_swapped, tusc_precision);

        calcEndofSwap(data.end_of_swap_date);
        var x = setInterval(function() {calcEndofSwap(data.end_of_swap_date);}, 1000);
    }
}

function addDecimalPoint(numberAsString, precision) {
    if (numberAsString == "0") {
        return "0.0"
    }

    // Add extra zeros on the left side if there aren't enough
    while (precision > numberAsString.length - 1) {
        numberAsString = "0" + numberAsString;
    }

    // Add a decimal point to the string so it's more human readible.
    let decimalPlace = numberAsString.length - precision;

    return [numberAsString.slice(0, decimalPlace), ".", numberAsString.slice(decimalPlace)].join('');
}

function calcEndofSwap(end_of_swap_date) {
    var now = new Date().getTime();

    var distance = new Date(end_of_swap_date) - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Get today's date and time

    // Display the result in the element with id="demo"
    document.getElementById("end_of_swap_date").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("end_of_swap_date").innerHTML = "The OCC to TUSC swap is complete. Swapping has been disabled.";
    }
}
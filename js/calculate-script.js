/*==== live cryptocurrency calculator =====*/
var ember = [];
var usdInput = document.getElementById('amtUSD');
var btcInput = document.getElementById('amtBTC');

ember.btcPrice = 6549.995;
ember.socket = io.connect('https://socket.coincap.io');
ember.socket.on('trades', function(data) {
    var amt = document.getElementById('amtUSD');
    if (data.coin == 'BTC') {
        ember.amtUSD = usdInput.value;
        ember.amtBTC = btcInput.value;
        ember.usdCalc = ember.amtBTC * data.msg.price;
        if(data.msg.price > amt.value) {
            $(amt).addClass('increment');
        } else {
            $(amt).addClass('decrement');
        }
        $('#amtUSD').attr('value', ember.usdCalc);
        setTimeout(function () {
            $(amt).removeClass('increment decrement');
        }, 700);
    }
});

$('#amtBTC').bind('change paste keyup', function() {
    ember.usdCalc = $(this).val() * ember.btcPrice;
    $('#amtUSD').attr('value', ember.usdCalc);
});
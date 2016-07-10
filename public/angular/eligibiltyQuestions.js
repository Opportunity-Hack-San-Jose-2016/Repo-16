$(document).ready(function() {
    $('#citylive').on('keyup', function() {

        if (this.value.length) {
            $('#workCity').slideDown();
        } else {
            $('#workCity').hide();
        }
    });

    $('#citywork').on('keyup', function() {

        if (this.value.length) {
            $('#familyCity').slideDown();
        } else {
            $('#familyCity').hide();
        }
    });

    $('#citywork_other').on('keyup', function() {

        if (this.value.length) {
            $('#otherfamilyMembers').slideDown();
        } else {
            $('#otherfamilyMembers').hide();
        }
    });

    $('#citylive_other').on('keyup', function() {

        if (this.value.length) {
            $('#totalMembers').slideDown();
        } else {
            $('#totalMembers').hide();
        }
    });

    $('#childrenmember').on('keyup', function() {

        if (this.value.length) {
            $('#primaryResidence').slideDown();
        } else {
            $('#primaryResidence').hide();
        }
    });
    /*
     * if(document.getElementById('primary_yes').checked ||
     * document.getElementById('primary_no').checked ){
     * ('#isBmpApproved').slideDown(); } else{ ('#isBmpApproved').hide(); }
     */

    $("input[name='primary']").click(function() {

        var opt = $("input[name='primary']:checked").val();

        if (opt === "yes" || opt === "no") {

            $('#isBmpApproved').slideDown();
        }
    });
    $('#income_yearly').on('keyup', function() {

        if (this.value.length) {
            $('#downPayment').slideDown();
        } else {
            $('#downPayment').hide();
        }
    });
    $('#downPaymentAmt').on('keyup', function() {

        if (this.value.length) {
            $('#downPaymentSource').slideDown();
        } else {
            $('#downPaymentSource').hide();
        }
    });

    $("input[name='isApproved']").click(function() {

        var opt = $("input[name='isApproved']:checked").val();

        if (opt === "yes" || opt === "no") {

            $('#income').slideDown();
        }
    });

    $("input[name='asset']").click(function() {

        var opt = $("input[name='asset']:checked").val();

        if (opt === "yes" || opt === "no") {

            $('#hudApproved').slideDown();
        }
    });
    $('#payment_src').on('keyup', function() {

        if (this.value.length) {
            $('#financialAsset').slideDown();
        } else {
            $('#financialAsset').hide();
        }
    });

    $('#mail').on('keyup', function() {
        if (this.value.length) {
            $('#citydiv').slideDown();
        } else {
            $('#citydiv').hide();
        }
    });
    $("input[name='isHudApproved']").click(function() {

        var opt = $("input[name='isHudApproved']:checked").val();

        if (opt === "yes" || opt === "no") {

            $('#submitButton').slideDown();
        }
    });

    /*
     * $("input[name$='primary']").click(function() {
     * 
     * var test = $(this).attr("value"); alert(test);
     * if($(this).attr("value")=="own_yes" || $(this).attr("value")=="own_no"){
     * 
     * ('#isBmpApproved').slideDown();
     * 
     *  }
     * 
     * else{
     * 
     * ('#isBmpApproved').slideDown();
     *  } });
     */

});
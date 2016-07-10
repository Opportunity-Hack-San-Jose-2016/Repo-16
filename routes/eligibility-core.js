var uuid = require("node-uuid");
var request = require("request")
var eligible;
var id;

exports.add = function(req, res) {
    var percent = 0;
    console.log(req.body);
    var fname = req.body.fname;
    var lname = req.body.lname;
    var address = req.body.address;
    var phone = req.body.phone;
    var mail = req.body.mail;
    var citylive = req.body.citylive;
    var citywork = req.body.citywork;
    var citywork_other = req.body.citywork_other;
    var citylive_other = req.body.citylive_other;
    var adultmember = req.body.adultmember;
    var childrenmember = req.body.childrenmember;
    var own_home = req.body.own_home;
    var pre_home = req.body.pre_home;
    var income_monthly = req.body.income_monthly;
    var income_yearly = req.body.income_yearly;
    var downpayment = req.body.downpayment;
    var payment_src = req.body.payment_src;
    var asset = req.body.asset;
    var HUD_class = req.body.HUD_class;

    var id = uuid.v1();
    console.log("id is " + id)
    if (adultmember > 3)
        percent = percent + 3;
    if (childrenmember > 4)
        percent = percent + 3;
    if (income_yearly < 45000)
        percent = percent + 4;
    if (percent > 8)
        eligible = 1;
    else
        eligible = 0;

    var update_response;


    var URI = "https://api.mlab.com/api/1/databases/heroku_f2wnrr7c/collections/application?apiKey=Gop-RmmiDZYteuAJCttyTwuerv6uJcZ6";

    var requestData = {
        "pkey": id,
        "fname": fname,
        "lname": lname,
        "address": address,
        "phone": phone,
        "mail": mail,
        "citylive": citylive,
        "citywork": citywork,
        "citywork_other": citywork_other,
        "citylive_other": citylive_other,
        "adultmember": adultmember,
        "childrenmember": childrenmember,
        "own_home": own_home,
        "pre_home": pre_home,
        "income_monthly": income_monthly,
        "income_yearly": income_yearly,
        "downpayment": downpayment,
        "payment_src": payment_src,
        "asset": asset,
        "HUD_class": HUD_class,
        "eligible": eligible
    }
    request({
        url: URI,
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        json: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            update_response = {
                "statusCode": 200,
                "isEligible" : eligible,
                "id": id
            };
            res.send(update_response);
        } else {
            console.log("error: " + error)
            console.log("response.statusCode: " + response.statusCode)
            console.log("response.statusText: " + response.statusText)
        }
    });
}

exports.eligibleCheck = function(req, res) {
    if (eligible)
        console.log("eligible check is valid");
    else
        console.log("eligible check is invalid")
    res.render('thankyou', {
        id: id,
        eligible: eligible
    });
}
/**
 *@NApiVersion 2.x
 *@NScriptType Suitelet
 */
 define(['N/record','N/file','N/runtime','N/ui/serverWidget'], function(record,file, runtime, serverWidget) {

    function onRequest(context) {
        if (context.request.method === 'GET') {
            //getting the current users name
            var name = runtime.getCurrentUser().name;
            log.debug("username is", name);
    
            
            // Load the HTML file
            var htmlFile1 = file.load({id: 'SCA website modules/index_header.html'});
            var htmlFile2 = file.load({id: 'SCA website modules/index_footer.html'});
    
            var fileContents = htmlFile1.getContents();
            var updated = fileContents.replace("david", name);
    
            context.response.contentType = 'HTMLDOC';
    
            //contextresponse.write(jsCode);
            context.response.write(updated);
            context.response.write(htmlFile2.getContents());
          }
          var response = context.response;
var string = '<style>\
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");\
body {\
    font-family: "Roboto",sans-serif;\
}\
h1, h2, h3 {\
    font-family: "Roboto", sans-serif;\
    font-weight: bold;\
}\
 .outer{\
    width: 1300px;\
    justify-content: center;\
    max-width: 60%;\
    background-color: rgb(234, 248, 241);\
}\
.licenseinfoheading {\
padding-left: 30px;\
padding-top: 10px;\
}\
.purchaseditems {\
    color: blue;\
padding-left: 30px;\
}\
.nooflicenses {\
    color: blue;\
    padding-left: 30px;\
}\
.totalcost {\
    color: blue;\
    padding-left: 30px;\
}\
.renewaldate {\
    color: blue;\
    padding-left: 30px;\
}\
.annuallicense  {\
 padding-left: 30px;\
}\
.licensevalue {\
    padding-left: 30px;\
}\
.totalcostvalue {\
    padding-left: 30px;\
}\
.renewaldatevalue {\
    padding-left: 30px;\
}\
.mainheading {\
    justify-content: center;\
    display: flex;\
}\
</style>\
<!DOCTYPE html>\
<html lang="en">\
<head>\
    <meta charset="UTF-8">\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">\
    <title>Document</title>\
</head>\
<body>\
    <div class="main">\
    <div class="myaccountheading">\
        <h2>My Account</h2>\
     </div>\
    <div class="mainheading">\
    <div class="outer">\
        <div class="licenseinfoheading">\
            <h2>License Information</h2>\
                </div>\
                <div class="purchaseditems">\
               <h3>Purchased Items:</h3>\
                </div>\
                <div class="annuallicense">\
                    <h3>ExakTime Annual License</h3>\
                </div>\
                <div class="nooflicenses">\
                    <h3>Number of Licenses:</h3>\
                </div>\
                <div class="licensevalue">\
                    <h3>11</h3>\
                </div>\
                <div class="totalcost">\
                    <h3>Total Cost:</h3>\
                </div>\
                <div class="totalcostvalue">\
                    <h3>$1056.00</h3>\
                </div>\
                <div class="renewaldate">\
                    <h3>Renewal Date:</h3>\
                </div>\
                <div class="renewaldatevalue">\
                    <h3>2/1/2024</h3>\
                </div>\
        </div>\
    </div>\
</div>\
</body>\
</html>';
response.write(string);
    }

    return {
        onRequest: onRequest
    }
});

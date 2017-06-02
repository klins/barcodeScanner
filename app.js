var Quagga = require('quagga');
var $ = require('jquery');

var controlScanner= function(){Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#barcodeScanner')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });
}

$("button.stop").on("click", function(e) {
                e.preventDefault();
                Quagga.stop();
   });


$("button.start").on("click", function(e) {
                e.preventDefault();
                controlScanner();
   });

//Bracode detected process the Results
Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
    console.log("code is" + code);
    $("input#barcodeValue").val(code);
});
$(document).ready(function(){

  //rural
  $("#aadtRural0").attr("value", "0.8");
  var inboundRural0Slider = $("#inboundRural0").slider();
  var inboundRural0 = inboundRural0Slider.slider('getValue');
  $("#inboundRural0Value").text(inboundRural0);
  $("#outboundRural0").attr("value", 000-parseInt(inboundRural0) + " %");
  $("#inboundRural0").on("slide", function(slideEvt) {
  	$("#inboundRural0Value").text(slideEvt.value);
    $("#outboundRural0").attr("value",100-parseInt(slideEvt.value) + " %");
  });

  //urban
  // $("#aadtUrban1").attr("value", "1.2");
  // var inboundUrban1Slider = $("#inboundUrban1").slider();
  // var inboundUrban1 = inboundUrban1Slider.slider('getValue');
  // $("#inboundUrban1Value").text(inboundUrban1);
  // $("#outboundUrban1").attr("value", 100-parseInt(inboundUrban1) + " %");
  // $("#inboundUrban1").on("slide", function(slideEvt) {
  // 	$("#inboundUrban1Value").text(slideEvt.value);
  //   $("#outboundUrban1").attr("value",100-parseInt(slideEvt.value) + " %");
  // });

  // $("#generate").click(function() {
  //  $("#proto").append("<tr><td>0-1</td><td><input type='number' id='aadtRural1' name='aadtRural1' class='form-control'></td>
  //    <td><input id='inboundRural1' data-slider-id='ex1Slider' type='text' data-slider-min='0' data-slider-max='100' data-slider-step='1' data-slider-value='48'/><span id='inboundRural1Value'></span> %
  //    </td>
  //    <td><input type='text' id='outboundRural1' name='outboundRural1' class='form-control' disabled=true></td>
  //    <td><input type='number' id='aadtUrban1' name='aadtUrban1' class='form-control'></td>
  //    </td><td><input id='inboundUrban1' data-slider-id='ex1Slider' type='text' data-slider-min='0' data-slider-max='100' data-slider-step='1' data-slider-value='47'/><span id='inboundUrban1Value'></span> %</td>
  //    <td><input type='text' id='outboundUrban1' name='outboundUrban1' class='form-control' disabled=true></td>
  //  </tr>"
 // );
 //  })

})

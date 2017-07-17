$(document).ready(function(){

  //rural
  $("#aadtRural1").attr("value", "1.8");
  var inboundRural1Slider = $("#inboundRural1").slider();
  var inboundRural1 = inboundRural1Slider.slider('getValue');
  $("#inboundRural1Value").text(inboundRural1);
  $("#outboundRural1").attr("value", 100-parseInt(inboundRural1) + " %");
  $("#inboundRural1").on("slide", function(slideEvt) {
  	$("#inboundRural1Value").text(slideEvt.value);
    $("#outboundRural1").attr("value",100-parseInt(slideEvt.value) + " %");
  });

  //urban
  $("#aadtUrban1").attr("value", "1.2");
  var inboundUrban1Slider = $("#inboundUrban1").slider();
  var inboundUrban1 = inboundUrban1Slider.slider('getValue');
  $("#inboundUrban1Value").text(inboundUrban1);
  $("#outboundUrban1").attr("value", 100-parseInt(inboundUrban1) + " %");
  $("#inboundUrban1").on("slide", function(slideEvt) {
  	$("#inboundUrban1Value").text(slideEvt.value);
    $("#outboundUrban1").attr("value",100-parseInt(slideEvt.value) + " %");
  });

})

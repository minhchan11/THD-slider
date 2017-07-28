var trafficDistDefaults = require('./../js/thd.js').trafficDistDefaults;
var changeIndividualNum = require('./../js/thd.js').changeIndividualNum;
var renderChecking = require('./../js/thd.js').renderChecking;
var total = require('./../js/thd.js').total;


$(document).ready(function(){
  var template = '{#.}<tr>'+
                    '<td>{$idx} - {@math key="{$idx}" method="add" operand="1"/}</td>' +
                    '<td>'+
                      '<span id="trafficDefaultDisplay_'+ '{$idx}"></span>' +
                    '</td>' +
                    '<td>'+
                      '<input id="traffic_' + '{$idx}" type="text" data-slider-id="trafficSlider_'+'{$idx}" data-slider-min="0" data-slider-max="15" data-slider-step="0.01" data-slider-value={@math key="{.}" method="multiply" operand="100"/} />' +
                    '</td>' +
                    '<td>' +
                    '<input type="hidden" id="trafficDefault_'+ '{$idx}" value={@math key="{.}" method="multiply" operand="100"/}>' +
                    '<input type="text" id="trafficValue_'+'{$idx}" class="form-control" disabled=true>' +
                    '</td>'+
                    '<td>' +
                      '<label class="radio-inline">' +
                         '<input type="radio" name="displayOptions'+'{$idx}" id="enable_'+'{$idx}">' +
                         'Enable' +
                       '</label>' +
                       '<label class="radio-inline">' +
                         '<input type="radio" name="displayOptions'+'{$idx}" id="disable_'+'{$idx}" checked>' +
                          'Disable' +
                        '</label>'+
                    '</td>'+
                '</tr>{/.}';

  var dataTemplate = dust.compile(template, "trafficDistTemplate");

  // load the template into the Dust cache
  dust.loadSource(dataTemplate);

  dust.render("trafficDistTemplate", trafficDistDefaults, function(err, out) {
    $("#trafficTable").find('tbody').prepend(out);
  });

  // renderChecking(trafficDistDefaults);

  // loop to change the value of elements in the array through UI
  for (var i = 0; i < 24; i++) {
  var currentIndex;
  $("#enable_" + i).click(function() {
    $("#trafficValue_" + this.id.split("_").pop()).prop("disabled", false);
  });
  $("#disable_" + i).click(function() {
    $("#trafficValue_" + this.id.split("_").pop()).prop("disabled", true);
  });

  //instantiate slider
  var trafficSlider = $("#traffic_" + i).slider();

  //get value from hidden input field
  var trafficDefault = (parseFloat($("#trafficDefault_" + i).val())).toFixed(2);

  //Set visible input field to default value
  $("#trafficValue_" + i).attr("value", trafficDefault);
  $("#trafficDefaultDisplay_" + i).text(trafficDefault);


  //Create two way binding between input field and slider
  $("#trafficValue_" + i).on("change", function() {
    currentIndex = (this.id).split("_").pop();
    $("#traffic_" + currentIndex).slider('setValue', this.value, true, true);
    trafficDistDefaults = changeIndividualNum(trafficDistDefaults, currentIndex, this.value/100);
    total(trafficDistDefaults);
  });
  $("#traffic_" + i).on("slide", function(slideEvt) {
    currentIndex = ((slideEvt.currentTarget.id).split("_").pop());
    $("#trafficValue_" + currentIndex).attr("value", slideEvt.value);
    trafficDistDefaults = changeIndividualNum(trafficDistDefaults, currentIndex, this.value/100);
    total(trafficDistDefaults);
  });
}

})

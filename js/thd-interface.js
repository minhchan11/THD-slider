var trafficDistDefaults = require('./../js/thd.js').trafficDistDefaults;

$(document).ready(function(){
  var template = '{#.}<tr>'+
                    '<td>{$idx} - {@math key="{$idx}" method="add" operand="1"/}</td>' +
                    '<td>'+
                      '<input id="traffic_' + '{$idx}" type="text" data-slider-min="0" data-slider-max="10" data-slider-step="0.01" data-slider-value={@math key="{.}" method="multiply" operand="100"/} />' +
                    '</td>' +
                    '<td>' +
                    '<input type="hidden" id="trafficDefault_'+ '{$idx}" value={@math key="{.}" method="multiply" operand="100"/}>' +
                    '<input type="text" id="trafficValue_'+'{$idx}" class="form-control" disabled=true>' +
                    '</td>'+
                '</tr>{/.}';

  var dataTemplate = dust.compile(template, "trafficDistTemplate");

  // load the template into the Dust cache
  dust.loadSource(dataTemplate);

  dust.render("trafficDistTemplate", trafficDistDefaults, function(err, out) {
    $("#trafficTable").find('tbody').append(out);
  });

  for (var i = 0; i < 24; i++) {
    var trafficSlider = $("#traffic_"+i).slider();
    var trafficDefault = (parseFloat($("#trafficDefault_"+i).val())).toFixed(2);
    $("#trafficValue_"+i).attr("value", trafficDefault);
    $("#traffic_"+i).on("slide", function(slideEvt) {
      var currentIndex = ((slideEvt.currentTarget.id).split("_").pop());
      $("#trafficValue_"+currentIndex).attr("value", slideEvt.value);
    });
  }
})

exports.trafficDistDefaults = [0.01269013,
                          0.009102499,
                          0.007545883,
                          0.005188721,
                          0.006004092,
                          0.014246746,
                          0.037655291,
                          0.062264654,
                          0.051546239,
                          0.046698491,
                          0.050656744,
                          0.053947876,
                          0.055875115,
                          0.056883209,
                          0.060055742,
                          0.070047736,
                          0.086710944,
                          0.10177306,
                          0.063584072,
                          0.040472025,
                          0.034897856,
                          0.029620186,
                          0.023868118,
                          0.018664571];

exports.changeIndividualNum = function(thisArray,index,newNumber){
    thisArray[index] = newNumber;
    return thisArray;
}

exports.renderChecking = function(dataArray){
  var myTemplate = '{#.}<li>{.}</li>{/.}';

  var dataTemplate = dust.compile(myTemplate, "checkingTemplate");

  // load the template into the Dust cache
  dust.loadSource(dataTemplate);

  dust.render("checkingTemplate", dataArray, function(err, out) {
    $("#currentArray").html(out);
  });
}

exports.total = function(array) {
  var totalPercentage = array.reduce(function(sum, value) {
  return sum + value;
}, 0);
  if (totalPercentage > 1) {
    $(".alert").show();
  } else {
    $(".alert").hide();
  }
}

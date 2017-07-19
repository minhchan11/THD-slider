function trafficDistributionRender(e) {
            var template = '{#.}<tr>'+
                              '<td>{$idx} - {@math key="{$idx}" method="add" operand="1"/}</td>' +
                              '<td>'+
                                '<input id="traffic' + '{$idx}" type="text" data-slider-min="0" data-slider-max="10" data-slider-step="0.1" data-slider-value="2" />' +
                              '</td>' +
                              '<td>' +
                              '<input type="text" id="trafficDefault'+ '{$idx}" value={@math key="{.}" method="multiply" operand="100"/}>' +
                              '<input type="text" id="trafficValue'+'{$idx}" class="form-control" disabled=true>' +
                              '</td>'+
                          '</tr>{/.}';

            var dataTemplate = dust.compile(template, "trafficDistTemplate");

            // load the template into the Dust cache
            dust.loadSource(dataTemplate);

            var trafficDistDefaults = [0.01269013,
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

            dust.render("trafficDistTemplate", trafficDistDefaults, function(err, out) {
              $("#trafficTable").find('tbody').append(out);
            });

         }

         window.addEventListener("load", trafficDistributionRender);

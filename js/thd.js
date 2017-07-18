function renderTemplates(e) {
            var templContent = '<div class="itemTemplateWrapper">' +
                                  '<div>{name}</div>' +
                                  '<div>{title}</div>' +
                                  '<div>{email}</div>' +
                                  '<div>{phone}</div>' +
                                '</div>';
            var dataTemplate = dust.compile(templContent, "myTmpl");

            // load the template into the Dust cache
            dust.loadSource(dataTemplate);

            var dataObj = {
               "name" : "Henry Handsome",
               "phone" : "+1-212-555-1234",
               "email" : "pensive@example.com",
               "title" : "Senior VP of Basketweaving",
               "fulltime" : true
            };

            dust.render("myTmpl", dataObj, function (err, res) {
              document.getElementById('container').innerHTML = res;
            });
         }

         window.addEventListener("load", renderTemplates);

        // [0.01269013,
        // 0.009102499,
        // 0.007545883,
        // 0.005188721,
        // 0.006004092,
        // 0.014246746,
        // 0.037655291,
        // 0.062264654,
        // 0.051546239,
        // 0.046698491,
        // 0.050656744,
        // 0.053947876,
        // 0.055875115,
        // 0.056883209,
        // 0.060055742,
        // 0.070047736,
        // 0.086710944,
        // 0.10177306,
        // 0.063584072,
        // 0.040472025,
        // 0.034897856,
        // 0.029620186,
        // 0.023868118,
        // 0.018664571]


      var gridster;

      $(function(){

        gridster = $(".gridster ul").gridster({
          widget_base_dimensions: [140, 140],
          widget_margins: [10, 10],
          helper: 'clone',
          resize: {
            enabled: true
          }
        }).data('gridster');


        $('.js-resize-random').on('click', function() {
            gridster.resize_widget(gridster.$widgets.eq(getRandomInt(0, 9)),
                getRandomInt(1, 4), getRandomInt(1, 4))
        });

      });
    
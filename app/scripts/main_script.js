var gridster;
var current_layout = [];

    function reloadWidgets(gridster){
        console.log('running!');
        debugger;
        new_layout = JSON.parse(sessionStorage.getItem('layout'));
        if (new_layout != null){
            gridster.remove_all_widgets();
            $.each(new_layout, function(){
                console.log("adding widget: ");
                console.log(this);
                var inner_html = null;
                if(this.html != null){
                    inner_html = '<li>'+ this.html +'</li>';
                }else{
                    inner_html = '<li />';
                }
                gridster.add_widget(inner_html, this.size_x, this.size_y, this.col, this.row);
            })
        }

    }
$(function () {

    gridster = $(".gridster ul").gridster({
        widget_base_dimensions: [140, 140],
        widget_margins: [10, 10],
        helper: 'clone',
        outgrow_cols: true,
        resize: {
            enabled: true
        }
    }).data('gridster');


    //refresh widgets on load
    //reloadWidgets(gridster);

    $('#saveState').on('click', function(){
        $.each($('.gridster ul li'), function(){
            var element = {
                'col': $(this).data('col'),
                'row': $(this).data('row'),
                'size_x': $(this).data('sizex'),
                'size_y': $(this).data('sizey'),
                'html': this.innerHTML
            };
            current_layout.push(element);
        });
        console.log(current_layout);
        sessionStorage.setItem('layout', JSON.stringify(current_layout));
    });
    $('#revert').on('click', reloadWidgets(gridster));

});
    /*
    array = [
        obj = {
            col, row, size_x, size_y
     */
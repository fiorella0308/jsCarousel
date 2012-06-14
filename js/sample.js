$(document).ready(function ()
{
    $('#carrusel').jsCarousel(
    {
        autostart: true
        , effect: 'fade'
        , width: 400
        , height: 400
    })

    $('#start-button').click(function (e)
    {
        $('#carrusel').jsCarousel('start');
    });

    $('#stop-button').click(function (e)
    {
        $('#carrusel').jsCarousel('stop');
    });

    $('#apply').click(function (e)
    {
        $('#carrusel').jsCarousel('options'
        , {
            effect: $('#effect').eq(0).val()
            , effectDuration: parseInt($('#effectDuration').eq(0).val())
            , interval: parseInt($('#interval').eq(0).val())
        });
    });

    $('#next').click(function (e)
    {
        $('#carrusel').jsCarousel('next');
    });

    $('#previous').click(function (e)
    {
        $('#carrusel').jsCarousel('previous');
    });
});
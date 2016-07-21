(function ($) {
    "use strict";

    /* Background image */
    $('[data-bg-image]').each(function () {
        $(this).css({'background-image': 'url(' + $(this).data('bg-image') + ')'});
    });

    $('[data-bg-color]').each(function () {
        $(this).css({'background-color': $(this).data('bg-color')});
    });

    /* Animsition */
    if( $(".animsition").length ){
        $(".animsition").animsition({
            inClass               :   'zoom-in-sm',
            outClass              :   'zoom-out-sm',
            inDuration            :    800,
            outDuration           :    800,
            linkElement           :   '.at-link',
            loading               :    false,
            loadingParentElement  :   'body',
            loadingClass          :   'animsition-loading',
            unSupportCss          : [ 'animation-duration',
                                    '-webkit-animation-duration',
                                    '-o-animation-duration'
                            ],
            overlay               :   false,

            overlayClass          :   'animsition-overlay-slide',
            overlayParentElement  :   'body'
        });
    }

})(jQuery);

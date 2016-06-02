( function () {
    'use strict';

    var shortcut = {

        mouseControl: false,

        init: function () {
            window.addEventListener( "keydown", shortcut.toggleMouseControl, false );
        },

        toggleMouseControl: function ( e ) {
            var keyCode = e.keyCode;

            if ( keyCode == 77 ) {
                if ( !shortcut.mouseControl ) {
                    shortcut.activateMouseControl();
                } else {
                    shortcut.deactivateMouseControl();
                }
            }
        },

        activateMouseControl: function () {
            shortcut.mouseControl = true;
            window.addEventListener( "mousedown", shortcut.handleClick, false );
            window.addEventListener( "contextmenu", shortcut.noContextMenu, false );
        },

        deactivateMouseControl: function () {
            shortcut.mouseControl = false;
            window.removeEventListener( "mousedown", shortcut.handleClick );
            window.removeEventListener( "contextmenu", shortcut.noContextMenu );
        },

        noContextMenu: function ( e ) {
            e.preventDefault();
        },

        handleClick: function ( e ) {
            e.preventDefault();
            if ( e.button === 0 ) Reveal.next();
            if ( e.button === 2 ) Reveal.prev();
        }
    };

    shortcut.init();
} )();

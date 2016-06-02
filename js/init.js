( function () {
    'use strict';

    Reveal.initialize( {
        controls: true,
        progress: true,
        history: true,
        center: true,
        slideNumber: true,
        theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
        transition: Reveal.getQueryHash().transition || 'slide', // none/fade/slide/convex/concave/zoom
        // Optional reveal.js plugins
        dependencies: [ {
            src: 'lib/js/classList.js',
            condition: function () {
                return !document.body.classList;
            }
        }, {
            src: 'plugin/markdown/marked.js',
            condition: function () {
                return !!document.querySelector( '[data-markdown]' );
            }
        }, {
            src: 'plugin/markdown/markdown.js',
            condition: function () {
                return !!document.querySelector( '[data-markdown]' );
            }
        }, {
            src: 'plugin/highlight/highlight.js',
            async: true,
            condition: function () {
                return !!document.querySelector( 'pre code' );
            },
            callback: function () {
                hljs.initHighlightingOnLoad();
            }
        }, {
            src: 'plugin/zoom-js/zoom.js',
            async: true
        }, {
            src: 'plugin/notes/notes.js',
            async: true
        } ]
    } );

    //window.addEventListener("mousedown", handleClick, false);
    //window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);
    Reveal.toggleMouseControl = toggleMouseControl;
    Reveal.activateMouseControl = activateMouseControl;
    Reveal.deactivateMouseControl = deactivateMouseControl;

    window.addEventListener( "keydown", toggleMouseControl, false );

    function toggleMouseControl( e ) {

        var keyCode = e.keyCode;

        if ( keyCode == 77 ) {
            if ( !Reveal.mouseControl ) {
                Reveal.activateMouseControl();
            } else {
                Reveal.deactivateMouseControl();
            }
        }
    }

    function activateMouseControl() {
        Reveal.mouseControl = true;
        window.addEventListener( "mousedown", handleClick, false );
        window.addEventListener( "contextmenu", noContextMenu, false );
    }

    function deactivateMouseControl() {
        Reveal.mouseControl = false;
        window.removeEventListener( "mousedown", handleClick );
        window.removeEventListener( "contextmenu", noContextMenu );
    }

    function noContextMenu( e ) {
        e.preventDefault();
    }

    function handleClick( e ) {
        e.preventDefault();
        if ( e.button === 0 ) Reveal.next();
        if ( e.button === 2 ) Reveal.prev();
    }



} )();

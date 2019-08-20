(function( root, factory ) {
    if (typeof define === 'function' && define.amd) {
        root.RevealFragmentClass = factory();
    } else if( typeof exports === 'object' ) {
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.RevealFragmentClass = factory();
    }
}( this, function() {
    var RevealFragmentClass = {
        init: function() {
            // Read the plugin config options and provide fallbacks
            var config = Reveal.getConfig().fragmentclass || {};
            config.onlyCurrentFragment = typeof config.onlyCurrentFragment === 'boolean' ? config.onlyCurrentFragment : true;
            config.className = typeof config.className === 'string' ? config.className : 'fragment';
            var prefix = config.className + '-'
            // Install handlers
            Reveal.addEventListener('fragmentshown', function(event) {
                var index = +/data-fragment-index="(\d+)"/.exec(event.fragment.outerHTML)[1],
                    present = document.querySelectorAll('section.present');
                present[present.length - 1].classList.add(prefix + index);
            });
            // Remove fragment classes if requested
            if (!config.onlyCurrentFragment) {
                Reveal.addEventListener('fragmenthidden', function(event) {
                    var index = +/data-fragment-index="(\d+)"/.exec(event.fragment.outerHTML)[1],
                        present = document.querySelectorAll('section.present');
                    present[present.length - 1].classList.remove(prefix + index);
                });
                Reveal.addEventListener('slidechanged', function(event) {
                    var classList = event.previousSlide.classList,
                        previousFragmentClasses = Array.prototype.slice.call(classList)
                            .filter(function(name) { return name.indexOf(prefix) !== -1; });
                    if (previousFragmentClass.length) {
                        classList.remove.apply(null, previousFragmentClasses);
                    }
                });
            }
        }
    }
    Reveal.registerPlugin('fragmentclass', RevealFragmentClass);
    return RevealFragmentClass;
}));

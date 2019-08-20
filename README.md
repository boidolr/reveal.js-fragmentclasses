# reveal.js-fragmentclasses

Reveal.js plugin to add a fragment class to the currently shown slide.
By using that class additional styling can be triggered by stepping through fragments on a slide.

## Installation

Copy this repository into the plugins folder of your reveal.js presentation, ie `plugin/fragment`.

Add the plugin to the dependencies in your presentation, as below.

```javascript
Reveal.initialize({
    // ...
    dependencies: [
        // ...
        { src: 'plugin/fragment/fragment-classes.js' }
    ]
});
```

## Usage

Add styles for your slides based on the activated fragments:

```html
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <p>Already there</p>
                <p class="fragment">Appears first</p>
                <p class="fragment">Appears second</p>
                <p class="fragment">Appears last</p>
            </section>
            <style>
                .fragment-0 {
                    p { background: red; }
                }
                .present.fragment-1 {
                    p { background: blue; }
                }
            </style>
        </div>
    </div>
</body>
```

## Configuration

You can customize the behaviour with `className` and `onlyCurrentFragment` parameters of your configuration.

```javascript
Reveal.initialize({
    // ...
    fragmentclass: {
        // Base name to us for the classes - will be used as `fragment-0`, `fragment-1`, ...
        className: 'fragment',

        // Whether fragment classes should be removed if the fragment is no longer active
        onlyCurrentFragment: true
    }
});
```

## License

[MIT licensed](https://en.wikipedia.org/wiki/MIT_License).

Copyright (C) 2019 [Raphael Boidol](https://github.com/boidolr)
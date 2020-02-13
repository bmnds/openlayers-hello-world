# openlayers-hello-world
Study of OpenLayers mapping library.

Requirements so far:
* [x] build with WebPack (super easy)
* [ ] draw a simple marker represented by an icon and show a popup when map gets loaded
* [ ] draw a simple circle and show a popup on click
* [ ] include measure widget
* [x] render gpx files (natively support it)
* [x] include table of contents widget (had to import a plugin)
* [x] zoom to layer when it gets rendered (code hard to understand due to method and events ambiguity, but had to find which one worked by trial and error)

What to study next?
* draw a line from a list of points in JSON or GeoJSON
* query a feature layer by attribute
* query a feature layer by geometry
* render a timeline for temporal data

My thoughts so far?
* Not interested at all into going deeper in this project
* There is no support for popups
* Events not firing as expected on some classes
* Multiple classes with the same methods, but with completely different results
* Lack of link between API and Examples, it should be more intuitive: if I find a class named Extent and think it has what I need to fullfill some requirement, the next step is to see it in action in an Example and possibly in a Demo, but it is hard to find an example that is using the class I need.
* A lot of answered questions in older versions, but not in current version

# dependencies

### [OpenLayers](https://openlayers.org/)

### [OL LayerSwitcher](https://github.com/walkermatt/ol-layerswitcher)

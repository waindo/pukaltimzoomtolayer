require([
		  "esri/map", 

      "esri/layers/ArcGISDynamicMapServiceLayer",

		  "esri/toolbars/navigation",
	        "dojo/on",
	        "dojo/parser",

          "dijit/TOC",

	        "dijit/registry",
	        "dijit/Toolbar",
	        "dijit/form/Button",

          
		  "dijit/layout/BorderContainer",
      "dijit/layout/ContentPane",

		  "dojo/domReady!"
		 ], function(
		 			  Map,
            ArcGISDynamicMapServiceLayer,
		 			  Navigation, on, parser, TOC, registry
					) {

		 	parser.parse();

    
		 	
		 var map = new Map("mapDiv", {
		    center: [117,0],
		    zoom: 7,
		    basemap: "streets",
		    sliderPosition: "top-right",
          	sliderStyle: "large"
  			});

		 var navToolbar = new Navigation(map);
          on(navToolbar, "onExtentHistoryChange", extentHistoryChangeHandler);

          registry.byId("zoomin").on("click", function () {
            navToolbar.activate(Navigation.ZOOM_IN);
          });

          registry.byId("zoomout").on("click", function () {
            navToolbar.activate(Navigation.ZOOM_OUT);
          });

          registry.byId("zoomfullext").on("click", function () {
            navToolbar.zoomToFullExtent();
          });

          registry.byId("zoomprev").on("click", function () {
            navToolbar.zoomToPrevExtent();
          });

          registry.byId("zoomnext").on("click", function () {
            navToolbar.zoomToNextExtent();
          });

          registry.byId("pan").on("click", function () {
            navToolbar.activate(Navigation.PAN);
          });

          registry.byId("deactivate").on("click", function () {
            navToolbar.deactivate();
          });

          function extentHistoryChangeHandler () {
            registry.byId("zoomprev").disabled = navToolbar.isFirstExtent();
            registry.byId("zoomnext").disabled = navToolbar.isLastExtent();
          }

          var layera = new ArcGISDynamicMapServiceLayer("http://36.83.3.83:6080/arcgis/rest/services/view/DaerahAliranSungai/MapServer", {
          "opacity" : 1,
          visible : true
        });
          var layerb = new ArcGISDynamicMapServiceLayer("http://36.83.3.83:6080/arcgis/rest/services/view/BHGK/MapServer", {
          "opacity" : 1,
          visible : true
        });

           map.addLayers([layera,layerb]);

           //TOC
          map.on("layers-add-result", function (evt) {

          //TOC Administrasi
           var toc = new TOC({
                    map: map,
                    layerInfos: [{
                      layer: layera,
                      title: "Daerah Aliran Sungai",
                      collapsed: true,
                      slider: true
                    },
                    {layer: layerb,
                      title: "BHGK",
                      collapsed: true,
                      slider: true
                    }]
                  }, 'tocDiv');
                  toc.startup();
                     
                  //2014-04-04: added event
                  toc.on('toc-node-checked', function(evt){
                    if (console) {
                    console.log("TOCNodeChecked, rootLayer:"
                    +(evt.rootLayer?evt.rootLayer.id:'NULL')
                    +", serviceLayer:"+(evt.serviceLayer?evt.serviceLayer.id:'NULL')
                    + " Checked:"+evt.checked);
                    if (evt.checked && evt.rootLayer && evt.serviceLayer){
                      // evt.rootLayer.setVisibleLayers([evt.serviceLayer.id])
                    }
                  }
                  });
                  toc.on("dblClick", function (item, node, event) {
                    alert('wowol');
                           var layerId=item.id[0];
                             var layer = map.getLayer(layerId);

                              if (!layer)
                              {
                                return;
                              }
                              else
                              {
                                var lyrExt=layer.fullExtent;
                                var gsvc=  esriConfig.defaults.geometryService;
                                var outSR = new esri.SpatialReference({ wkid: 102100 });
                                gsvc.project([lyrExt], outSR, function(newExt) {
                                map.setExtent(newExt[0],true);
                              }

                          });
                                });
            });

          
});
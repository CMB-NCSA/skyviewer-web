var a1, a2;
A.init.then(() => {
  a1 = A.aladin('#al1', {
    reticleColor: "rgb(0, 0, 0)",
    fov: 90,
    cooFrame: 'equatorial',
    target: "00:00:00.0 -56:45:00.0",
    fullScreen: false,
    survey: '',
    projection: "ZEA",
    showProjectionControl: false,
    showCooGridControl: false,
    showSimbadPointerControl: false,
    showFrameControl: false,
    showCooGrid: false,
    showFullscreenControl: false,
    showZoomControl: true,
    showContextMenu: true,
    showGotoControl: true}
  );

  // set the local paths for the folders

  // set the local paths for the folders
  var hipsDir090 = `../hips/public/SPTPOL_SZ_090GHz_HiPS/`;
  hipsDir090 = hipsDir090.substring(0,hipsDir090.lastIndexOf("/",hipsDir090.length));
  var hipsDir150 = `../hips/public/SPTPOL_SZ_150GHz_HiPS/`;
  hipsDir150 = hipsDir150.substring(0,hipsDir150.lastIndexOf("/",hipsDir150.length));
  var hipsDirDESDR2 = `../hips/public/DES-DR2/`;
  hipsDirDESDR2 = hipsDirDESDR2.substring(0,hipsDirDESDR2.lastIndexOf("/",hipsDirDESDR2.length));


  a1.setFovRange(0.01, 175);
  a1.createImageSurvey("NCSA/P/DES/ColorIRG", 'DES/NCSA DR2 ColorIRG', hipsDirDESDR2, 'equatorial', 11, {imgFormat: 'png'});
  a1.setBaseImageLayer("NCSA/P/DES/ColorIRG");

  a2 = A.aladin('#al2', {
    reticleColor: "rgb(0, 0, 0)",
    fov: 60,
    cooFrame: 'equatorial',
    target: "00:00:00.0 -56:45:00.0",
    fullScreen: false,
    survey: '',
    projection: "ZEA",
    showProjectionControl: false,
    showCooGridControl: false,
    showSimbadPointerControl: false,
    showFrameControl: false,
    showCooGrid: false,
    showFullscreenControl: false,
    showZoomControl: true,
    showContextMenu: true,
    showGotoControl: true}
  );
  a2.setFovRange(0.01, 175);


  // Create the SPT surveys
  a2.createImageSurvey('NCSA/P/SPT/SPTPOL_SZ-090GHZ', 'SPTPol SZ 090GHz', hipsDir090, 'equatorial', 7, {minCut:-0.0002, maxCut:0.0002, colormap:'viridis', imgFormat: 'fits'});
	a2.createImageSurvey('NCSA/P/SPT/SPTPOL_SZ-150GHZ', 'SPTPol SZ 150GHz', hipsDir150, 'equatorial', 7, {minCut:-0.0002, maxCut:0.0002, colormap:'viridis', imgFormat: 'fits'});
  a2.setBaseImageLayer("NCSA/P/SPT/SPTPOL_SZ-150GHZ");

  //View.CALLBACKS_THROTTLE_TIME = 30;
  a1.on('positionChanged', function(params) {
      a2.gotoRaDec(params.ra, params.dec);
  });
  a2.on('positionChanged', function(params) {
      a1.gotoRaDec(params.ra, params.dec);
  });
  a1.on('zoomChanged', function(fov) {
  if (Math.abs(a2.getFov()[0] - fov) / fov > 0.001) {
          a2.setFoV(fov);
      }
  });
  a2.on('zoomChanged', function(fov) {
      if (Math.abs(a1.getFov()[0] - fov) / fov > 0.001) {
          a1.setFoV(fov);
      }
  });
  a2.on('click', function(params) {
      console.log(params);
  });
  $("a.zoomPlus").each(function() {
      $(this).on('click', function(e) {
          a1.increaseZoom();
          a2.increaseZoom();
          e.preventDefault();
          return false;
      });
  });
  $("a.zoomMinus").each(function() {
      $(this).on('click', function(e) {
          a1.decreaseZoom();
          a2.decreaseZoom();
          e.preventDefault();
          return false;
      });
  });
  $("div.aladin-box.aladin-gotoBox > form > input").each(function() {
      $(this).on('change', function(e) {
          a1.gotoObject($(this).val());
          a2.gotoObject($(this).val());
      });
  });
  setTimeout(function() {
      $(".twentytwenty-container").twentytwenty({default_offset_pct: 0.5, no_overlay: true});
  }, 300);
});

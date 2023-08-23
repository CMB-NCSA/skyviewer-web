var a1, a2;
A.init.then(() => {
  a1 = A.aladin('#al1', {
    reticleColor: "rgb(0, 0, 0)",
    fov: 20,
    cooFrame: 'equatorial',
    target: "17:36:22.3 -31:59:07.2",
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
  var hipsDir090 = `../hips/SPT_galactic_coadd_090GHz_HiPS/`;
  hipsDir090 = hipsDir090.substring(0,hipsDir090.lastIndexOf("/",hipsDir090.length));
  var hipsDir150 = `../hips/SPT_galactic_coadd_150GHz_HiPS/`;
  hipsDir150 = hipsDir150.substring(0,hipsDir150.lastIndexOf("/",hipsDir150.length));
  var hipsDir220 = `../hips/SPT_galactic_coadd_220GHz_HiPS/`;
  hipsDir220 = hipsDir220.substring(0,hipsDir220.lastIndexOf("/",hipsDir220.length));
  var hipsDirDECaPSDR2 = `../hips/DECaPS-DR2/`;
  hipsDirDECaPSDR2 = hipsDirDECaPSDR2.substring(0,hipsDirDECaPSDR2.lastIndexOf("/",hipsDirDECaPSDR2.length));




  a1.setFovRange(0.01, 175);
  a1.createImageSurvey('P/NCSA-DECaPS/DR2/color', 'NCSA/DECaPS DR2 color', hipsDirDECaPSDR2, 'equatorial', 11, {imgFormat: 'png'});
  a1.setBaseImageLayer("P/NCSA-DECaPS/DR2/color");


  a2 = A.aladin('#al2', {
    reticleColor: "rgb(0, 0, 0)",
    fov: 20,
    cooFrame: 'equatorial',
    target: "17:36:22.3 -31:59:07.2",
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


  // Create the SPT surveys for Winter 2020
  a2.createImageSurvey('P/SPT/GALAXY-090GHZ', 'SPT Galaxy 090GHz', hipsDir090, 'equatorial', 7, {minCut:-0.8, maxCut:0.8, colormap:'viridis', imgFormat: 'fits'});
  a2.createImageSurvey('P/SPT/GALAXY-150GHZ', 'SPT Galaxy 150GHz', hipsDir150, 'equatorial', 7, {minCut:-0.8, maxCut:0.8, colormap:'viridis', imgFormat: 'fits'});
  a2.createImageSurvey('P/SPT/GALAXY-220GHZ', 'SPT Galaxy 220GHz', hipsDir220, 'equatorial', 7, {minCut:-0.8, maxCut:0.8, colormap:'viridis', imgFormat: 'fits'});
  a2.setBaseImageLayer("P/SPT/GALAXY-150GHZ");

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

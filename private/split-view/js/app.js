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
  var hipsDir090 = `../hips/private/SPT_wide-2020_090GHz_HiPS/`;
  hipsDir090 = hipsDir090.substring(0,hipsDir090.lastIndexOf("/",hipsDir090.length));
  var hipsDir150 = `../hips/private/SPT_wide-2020_150GHz_HiPS/`;
  hipsDir150 = hipsDir150.substring(0,hipsDir150.lastIndexOf("/",hipsDir150.length));
  var hipsDir220 = `../hips/private/SPT_wide-2020_220GHz_HiPS/`;
  hipsDir220 = hipsDir220.substring(0,hipsDir220.lastIndexOf("/",hipsDir220.length));
  var lowellDir090 = `../hips/private/SPT_winter_low_ell_090GHz_HiPS/`;
  lowellDir090 = lowellDir090.substring(0,lowellDir090.lastIndexOf("/",lowellDir090.length));
  var hipsDirDESDR2 = `../hips/public/DES-DR2/`;
  hipsDirDESDR2 = hipsDirDESDR2.substring(0,hipsDirDESDR2.lastIndexOf("/",hipsDirDESDR2.length));


  a1.setFovRange(0.01, 175);
  a1.createImageSurvey("NCSA/P/DES/ColorIRG", 'DES/NCSA DR2 ColorIRG', hipsDirDESDR2, 'equatorial', 11, {imgFormat: 'png'});
  // Plack R2 CMB map
  a1.createImageSurvey('P/PLANCK/R3/CMB', 'PLANCK Map of the CMB fluctuations', 'https://alasky.cds.unistra.fr/PLANCK/R3/CMB-smica-R3', 'galactic', 3, {colormap:'viridis', imgFormat: 'png'});
  // Planck R3 HFI maps
  a1.createImageSurvey('P/PLANCK/R3/HFI/color', 'PLANCK R3 HFI color composition 353-545-857 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/HFI_Color_353_545_857', 'galactic', 3, {imgFormat: 'png'});
  a1.createImageSurvey('P/PLANCK/R3/HFI100', 'PLANCK R3 frequency HFI map 100 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/HFI_SkyMap_100_R3', 'galactic', 3, {minCut:-0.0003, maxCut:0.0003, colormap:'viridis', imgFormat: 'fits'});
  a1.createImageSurvey('P/PLANCK/R3/HFI143', 'PLANCK R3 frequency HFI map 143 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/HFI_SkyMap_143_R3', 'galactic', 3, {minCut:-0.0003, maxCut:0.0003, colormap:'viridis', imgFormat: 'fits'});
  a1.createImageSurvey('P/PLANCK/R3/HFI271', 'PLANCK R3 frequency HFI map 217 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/HFI_SkyMap_217_R3', 'galactic', 3, {minCut:-0.000174, maxCut:0.0003916, colormap:'viridis', imgFormat: 'fits'});
  a1.createImageSurvey('P/PLANCK/R3/HFI353', 'PLANCK R3 frequency HFI map 353 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/HFI_SkyMap_353_R3', 'galactic', 3, {minCut:0.00014, maxCut:0.00114, colormap:'viridis', imgFormat: 'fits'});
  a1.createImageSurvey('P/PLANCK/R3/HFI545', 'PLANCK R3 frequency HFI map 545 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/HFI_SkyMap_545_R3', 'galactic', 3, {minCut:0.338, maxCut:0.656, colormap:'viridis', imgFormat: 'fits'});
  a1.createImageSurvey('P/PLANCK/R3/HFI857', 'PLANCK R3 frequency HFI map 857 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/HFI_SkyMap_857_R3', 'galactic', 3, {minCut:0.7, maxCut:1.4, colormap:'viridis', imgFormat: 'fits'});
  // Planck R3 LFI maps
  a1.createImageSurvey('P/PLANCK/R3/LFI/color', 'PLANCK R3 LFI Color composition 30-44-70 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/LFI_Color_30_44_70', 'galactic', 3, {imgFormat: 'png'});
  a1.createImageSurvey('P/PLANCK/R3/LFI30', 'PLANCK R3 frequency LFI map 30 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/LFI_SkyMap_30_R3', 'galactic', 3, {minCut:-0.0003, maxCut:0.0003, colormap:'viridis', imgFormat: 'fits'});
  a1.createImageSurvey('P/PLANCK/R3/LFI44', 'PLANCK R3 frequency LFI map 44 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/LFI_SkyMap_44_R3', 'galactic', 3, {minCut:-0.0003, maxCut:0.0003, colormap:'viridis', imgFormat: 'fits'});
  a1.createImageSurvey('P/PLANCK/R3/LFI70', 'PLANCK R3 frequency LFI map 70 GHz', 'https://alasky.cds.unistra.fr/PLANCK/R3/LFI_SkyMap_70_R3', 'galactic', 3, {minCut:-0.0003, maxCut:0.0003, colormap:'viridis', imgFormat: 'fits'});
  // DES-DR2 map
  a1.setBaseImageLayer("NCSA/P/DES/ColorIRG");

  a2 = A.aladin('#al2', {
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
  a2.setFovRange(0.01, 175);


  // Create the SPT surveys for Winter 2020
  a2.createImageSurvey('NCSA/P/SPT/SPT3G-WIDE-090GHZ', 'SPT3G Wide 2020 090GHz', hipsDir090, 'equatorial', 7, {minCut:-0.1, maxCut:0.1, colormap:'viridis', imgFormat: 'fits'});
	a2.createImageSurvey('NCSA/P/SPT/SPT3G-WIDE-150GHZ', 'SPT3G Wide 2020 150GHz', hipsDir150, 'equatorial', 7, {minCut:-0.1, maxCut:0.1, colormap:'viridis', imgFormat: 'fits'});
	a2.createImageSurvey('NCSA/P/SPT/SPT3G-WIDE-220GHZ', 'SPT3G Wide 2020 220GHz', hipsDir220, 'equatorial', 7, {minCut:-0.1, maxCut:0.1, colormap:'viridis', imgFormat: 'fits'});
  a2.createImageSurvey('NCSA/P/SPT/WINTER-LOW_ELL-090GHZ', 'SPT3G Winter low ell 090GHz', lowellDir090, 'equatorial', 7, {minCut:-0.25, maxCut:0.25, colormap:'viridis', imgFormat: 'fits'});
  a2.setBaseImageLayer("NCSA/P/SPT/SPT3G-WIDE-150GHZ");

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

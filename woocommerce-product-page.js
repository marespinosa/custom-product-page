// Scripts specific to a WooCommerce single product page


// Accordion function - open all boxes


jQuery(document).ready(function () {
  var trackSection = jQuery('.wc-pao-addon-track h3');
  var valanceSection = jQuery('.wc-pao-addon-valance h3');
  var noTrack = jQuery('.wc-pao-addon-track input[value*="no-track"]');
  var alumTrack = jQuery('.wc-pao-addon-track input[value*="aluminum-track"]');
  var flexTrack = jQuery('.wc-pao-addon-track input[value*="flexible-track"]');
  var valanceNone = jQuery('.wc-pao-addon-valance input[value*="none"]');
  var valanceSmall = jQuery('.wc-pao-addon-valance input[value*="standard"]');
  var valanceBig = jQuery('.wc-pao-addon-valance input[value*="oversized"]');
  var noScrews = jQuery('.wc-pao-addon-screws input[value*="no-screws"]');
  var anchorScrews = jQuery('.wc-pao-addon-screws input[value*="anchor-screws"]');
  var selfTapScrews = jQuery('.wc-pao-addon-screws input[value*="self-tapping-screws"]');
  var fullnessSection = jQuery('.wc-pao-addon-fullness h3');
  var fullnessYes = jQuery('.wc-pao-addon-fullness input[value*="standard-15"]');
  var fullnessNo = jQuery('.wc-pao-addon-fullness input[value*="exact-measurements"]');
  var Tectron = jQuery('.wc-pao-addon-wrap-854-pick-your-curtain-fabric-1 input[value*="tectron"]');
  var RobynWhite = jQuery('.wc-pao-addon-wrap-854-pick-your-curtain-fabric-1 input[value*="robyn-white"]');
  var RobynBlack = jQuery('.wc-pao-addon-wrap-854-pick-your-curtain-fabric-1 input[value*="robyn-black"]');	
  var Staph = jQuery('.wc-pao-addon-wrap-854-pick-your-curtain-fabric-1 input[value*="staph"]');  
  var Style_1 = jQuery('.wc-pao-addon-wrap-854-pick-your-track-style-0 input[value*="style-1"]');
  var Style_2 = jQuery('.wc-pao-addon-wrap-854-pick-your-track-style-0 input[value*="style-2"]');
  var Style_3 = jQuery('.wc-pao-addon-wrap-854-pick-your-track-style-0 input[value*="style-3"]');	
  var Style_4 = jQuery('.wc-pao-addon-wrap-854-pick-your-track-style-0 input[value*="style-4"]');  
  var Style_5 = jQuery('.wc-pao-addon-wrap-854-pick-your-track-style-0 input[value*="style-5"]');
  var Style_6 = jQuery('.wc-pao-addon-wrap-854-pick-your-track-style-0 input[value*="style-6"]');	
  var Style_7 = jQuery('.wc-pao-addon-wrap-854-pick-your-track-style-0 input[value*="style-7"]'); 
  var novalance = jQuery('.wc-pao-addon-wrap-854-add-a-valance-2 input[value*="no-valance"]');
  var standardvalance = jQuery('.wc-pao-addon-wrap-854-add-a-valance-2 input[value*="one-sided-valance"]');	
  var oversizedvalance = jQuery('.wc-pao-addon-wrap-854-add-a-valance-2 input[value*="both-sided-valance"]');
  var addvelcro = jQuery('.wc-pao-addon-wrap-854-velcro-between-panels-3 input[value*="add-velcro"]');	
  var novelcro = jQuery('.wc-pao-addon-wrap-854-velcro-between-panels-3 input[value*="no-velcro"]');
  var addweights = jQuery('.wc-pao-addon-wrap-854-weighted-hem-4 input[value*="add-weights"]');	
  var noweights = jQuery('.wc-pao-addon-wrap-854-weighted-hem-4 input[value*="no-weights"]');
  var ceiling = jQuery('.wc-pao-addon-wrap-854-mount-type-5 input[value*="ceiling-mount"]');
  var outsidewall = jQuery('.wc-pao-addon-wrap-854-mount-type-5 input[value*="wall-or-outside-window"]');	
  var insidewindow = jQuery('.wc-pao-addon-wrap-854-mount-type-5 input[value*="inside-window"]');
  var standardlength = jQuery('.wc-pao-addon-wrap-854-curtain-length-14 input[value*="standard-length"]');	
  var kissfloor = jQuery('.wc-pao-addon-wrap-854-curtain-length-14 input[value*="kiss-the-floor"]');
  var standardfullness = jQuery('.wc-pao-addon-wrap-854-curtain-fullness-12 input[value*="standard-fullness"]');	
  var sametrack = jQuery('.wc-pao-addon-wrap-854-curtain-fullness-12 input[value*="same-as-track"]');	

  var dimension_error = false;

  initialSetup();
  bindEvents();
 onLoad();


  function onLoad() {

    //MODAL I

    var modalITarget1Pre = document.getElementsByClassName('wc-pao-addon-name')
    var modalITarget1 = modalITarget1Pre[2]

    var newIThing = document.createElement('div')
    newIThing.innerHTML = '<div class="valancetip-outer"><a class="fusion-modal-text-link valancetip" data-toggle="modal" data-target=".fusion-modal.valancetip" href="#"></a></div>'

    modalITarget1.appendChild(newIThing)


    //CREATE ACCORDIAN FOR CURTAIN FABRICS AND FEATURES

    var mainThingPre = document.getElementsByClassName('cart');
    var mainThing = mainThingPre[0];
    var curtFabFeatPre = document.getElementsByClassName("wc-pao-addon-container");
    var mountSpotPre= document.getElementsByClassName('wc-pao-addon-mount-type');
    var mountSpot = mountSpotPre[0];
    
    var curtFabFeat = [curtFabFeatPre[1],curtFabFeatPre[2],curtFabFeatPre[3],curtFabFeatPre[4]];

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.classList.add('panel');

    const fabMore = document.createElement('div');
	fabMore.classList.add('leanrmore');
      fabMore.innerHTML = 
      '<p class="choosetrack">Choose Your Fabric</p> <p class="learnmoredsc">Learn more about our fabrics</p>'
      wrapper.appendChild(fabMore)


    curtFabFeat.map(each => wrapper.appendChild(each));
    mainThing.insertBefore(wrapper, mountSpot);

    var newButton = document.createElement('button');
    newButton.innerHTML = '<span>Pick Your Curtain Fabric and Features</span>';
    newButton.classList.add("accordion");
    newButton.id = "button2";
	newButton.type = "button";
    mainThing.insertBefore(newButton, wrapper);

      //CREATE ACCORDION FOR MOUNT TYPE AND FASTENERS

      var mountFast = [curtFabFeatPre[5],curtFabFeatPre[6]];
      var newSpotPre = document.getElementsByClassName('wc-pao-addon-curtain-dimensions');
      var newSpot = newSpotPre[0];

      const newWrapper = document.createElement('div');
      newWrapper.innerHTML = 
        '<p class="choosetrack ">Choose Your Mount Location</p>';
		
      newWrapper.classList.add('newWrapper');
      newWrapper.classList.add('panel');
      mountFast.map(each => newWrapper.appendChild(each));
      mainThing.insertBefore(newWrapper, newSpot);

      var newButton2 = document.createElement('button');
      newButton2.innerHTML = '<span>Select Your Mount Position and Fasteners</span>';
      newButton2.classList.add("accordion");
      newButton2.id = "button3";
	  newButton2.type = "button";
      mainThing.insertBefore(newButton2, newWrapper);


      //CREATE ACCORDION FOR TRACK DIMENSIONS


      var trackDim = [curtFabFeatPre[7],curtFabFeatPre[8],curtFabFeatPre[9],curtFabFeatPre[10],curtFabFeatPre[11],curtFabFeatPre[12],curtFabFeatPre[13],curtFabFeatPre[14]];
      var newSpotPre1 = document.getElementsByClassName('wc-pao-addon-track');
      var newSpot1 = newSpotPre1[0];

      const newWrapper2 = document.createElement('div');
      newWrapper2.classList.add('newWrapper2');
      newWrapper2.classList.add('panel');

      const learnHowToMeasureLink = document.createElement('div')
	  learnHowToMeasureLink.classList.add('leanrmore');
      learnHowToMeasureLink.innerHTML = '<p class="choosetrack">Enter Widths</p> <p class="learnmoredsc">Learn How To Measure</p>'
      newWrapper2.appendChild(learnHowToMeasureLink);

      trackDim.map(each => newWrapper2.appendChild(each));
      mainThing.insertBefore(newWrapper2, newSpot1);

      var newButton3 = document.createElement('button');
      newButton3.innerHTML = '<span>Enter Your Track Dimensions</span>';
      newButton3.classList.add("accordion");
      newButton3.id = "button4";
	  newButton3.type = "button";
      mainThing.insertBefore(newButton3, newWrapper2);


      //CREATE ACCORDION FOR TRACK TYPE
	  
      var trackType = [curtFabFeatPre[16]]
      var newSpot2Pre = document.getElementsByClassName('wc-pao-addon-area-price');
      var newSpot2 = newSpot2Pre[0];
      

      const newWrapper3 = document.createElement('div');
      newWrapper3.classList.add('newWrapper3');
      newWrapper3.classList.add('panel');


      const trackInfo = document.createElement('div');
	  trackInfo.classList.add('leanrmore');
      trackInfo.innerHTML = 
        '<p class="choosetrack">Choose your track type</p> <p class="learnmoredsc">Learn more about types of track and hardware</p>';
	
      newWrapper3.appendChild(trackInfo);
	 

      trackType.map(each => newWrapper3.appendChild(each));
      mainThing.insertBefore(newWrapper3, newSpot2);

      var newButton3 = document.createElement('button');
      newButton3.innerHTML = '<span>Pick Your Track Material</span>';
      newButton3.classList.add("accordion");
      newButton3.id = "button5";
	  newButton3.type = "button";
      mainThing.insertBefore(newButton3, newWrapper3);



    //CREATE ACCORDION FOR STYLES


    var stylesAcc = [curtFabFeatPre[0]]
      var newSpot9 = document.getElementById('button2');
      
      

      const newWrapper9 = document.createElement('div');
      newWrapper9.classList.add('newWrapper3');
      newWrapper9.classList.add('panel');

      const planView = document.createElement('div');
	  planView.classList.add('leanrmore');
      planView.innerHTML = 
        '<div style="display:flex; flex-direction:row; justify-content: space-between"><p class="protip">Plan view-as seen from above</p><p class="learnmoredsc">Learn more about track styles</p></div>'

      newWrapper9.appendChild(planView);
	  
	  const planViewdesc = document.createElement('div');
	  planViewdesc.classList.add('customavail');
      planViewdesc.innerHTML = 
        '<p>Custom styles available. Call us at 1.800.BLACKOUT or <a href="#">start a custom quote</a></p>'

      newWrapper9.appendChild(planViewdesc);
	  
      stylesAcc.map(each => newWrapper9.appendChild(each));
      mainThing.insertBefore(newWrapper9, newSpot9);

      var newButton9 = document.createElement('button');
      newButton9.innerHTML = '<span>Pick Your Track Style</span>';
      newButton9.classList.add("accordion");
      newButton9.id = "button9";
	  newButton9.type = "button";  
      mainThing.insertBefore(newButton9, newWrapper9);

	  
	//new design - Maricon Espinosa
	
	var accorfive = document.querySelectorAll("#button5");
	var ja;
		for (var ja = 0; ja < accorfive.length; ja++) {
		  accorfive[ja].onclick = function() {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		  };
		}

	accorfive[0].click();
	

	
		
	var accorOne = document.querySelectorAll("#button9");
	var ga;
		for (var ga = 0; ga < accorOne.length; ga++) {
		  accorOne[ga].onclick = function() {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		  };
		}

	accorOne[0].click();
	
	var accortwo = document.querySelectorAll("#button2");
	var da;
		for (var da = 0; da < accortwo.length; da++) {
		  accortwo[da].onclick = function() {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		  };
		}

	accortwo[0].click();
	
	var accorthree = document.querySelectorAll("#button3");
	var ca;
		for (var ca = 0; ca < accorthree.length; ca++) {
		  accorthree[ca].onclick = function() {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		  };
		}

	accorthree[0].click();	

	var accorfour = document.querySelectorAll("#button4");
	var ba;
		for (var ba = 0; ba < accorfour.length; ba++) {
		  accorfour[ba].onclick = function() {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		  };
		}

	accorfour[0].click();
	
	

    //STYLE 1-7 FUNCTIONS AND APPEARANCE 


    var anchors = document.getElementsByClassName('wc-pao-addon-image-swatch');
    
    for(var i = 0; i < 7; i++) {
        var anchor = anchors[i];
        var para = document.createElement("p");
        var plusOne = i + 1;
        var node = document.createTextNode("Style " + plusOne );
        para.appendChild(node);
        para.appendChild(document.createElement("br"));
        
        anchor.appendChild(para);
        
        para.style.backgroundColor = "#ededed";
        para.style.height = "50px";
        para.style.fontWeight = "bold";
        para.style.marginBottom = '0px';
		para.style.padding = '10px';
        anchor.onclick = function() {
        
      var widthA = document.getElementsByClassName("wc-pao-addon-width-a-inches");
      var widthB = document.getElementsByClassName("wc-pao-addon-width-b-inches");
      var widthC = document.getElementsByClassName("wc-pao-addon-width-c-inches");
      var widthD = document.getElementsByClassName("wc-pao-addon-width-d-inches");

      var styleSelected = this.getAttribute("data-value");

      if(styleSelected == "style-1-1"){
        widthA[0].style.display= "";
        widthB[0].style.display= "none";
        widthC[0].style.display= "none";
        widthD[0].style.display= "none";
      }
      else if(styleSelected == "style-2-2"){
        widthA[0].style.display= "";
        widthB[0].style.display= "";
        widthC[0].style.display= "none";
        widthD[0].style.display= "none";
      }
      else if(styleSelected == "style-3-3"){
        widthA[0].style.display= "";
        widthB[0].style.display= "";
        widthC[0].style.display= "none";
        widthD[0].style.display= "none";
      }
      else if(styleSelected == "style-4-4"){
        widthA[0].style.display= "";
        widthB[0].style.display= "";
        widthC[0].style.display= "";
        widthD[0].style.display= "none";
      }
      else if(styleSelected == "style-5-5"){
        widthA[0].style.display= "";
        widthB[0].style.display= "";
        widthC[0].style.display= "none";
        widthD[0].style.display= "none";
      }
      else if(styleSelected == "style-6-6"){
        widthA[0].style.display= "";
        widthB[0].style.display= "";
        widthC[0].style.display= "none";
        widthD[0].style.display= "none";
      }
      else if(styleSelected == "style-7-7"){
        widthA[0].style.display= "";
        widthB[0].style.display= "";
        widthC[0].style.display= "";
        widthD[0].style.display= "";
      }
    }    
            
        }
    }

  function initialSetup() {
    // First, I'm changing the dimensions input type to a number
    jQuery('input[name*="-width-"]').prop('type', 'number');
    jQuery('input[name*="-width-"]').css('border', '1px solid red');

    // Next, change the number field to a step of an 1/8th of an inch
    jQuery('input[name*="-width-"]').attr('step', '.125');

    // Create the fraction boxes for the widths
    fractionBox = '<select class="fraction-box"><option selected="selected" value="0">0</option><option value=".125">1/8</option><option value=".25">1/4</option><option value=".375">3/8</option><option value=".5">1/2</option><option value=".625">5/8</option><option value=".75">3/4</option><option value=".875">7/8</option></select>';
    jQuery('input[name*="-width-"]').after(fractionBox);
    jQuery('input[name*="-width-"]').after('<input type="number" step="1" class="wholeNum" />');

    // First, I'm changing the dimensions input type to a number
    jQuery('input[name*="-height-"]').prop('type', 'number');
    jQuery('input[name*="-height-"]').css('border', '1px solid blue');

    // Next, change the number field to a step of an 1/8th of an inch
    jQuery('input[name*="-height-"]').attr('step', '.125');

    // Create the fraction boxes for the widths
    fractionBox = '<select class="fraction-box"><option selected="selected" value="0">0</option><option value=".125">1/8</option><option value=".25">1/4</option><option value=".375">3/8</option><option value=".5">1/2</option><option value=".625">5/8</option><option value=".75">3/4</option><option value=".875">7/8</option></select>';
    jQuery('input[name*="-height-"]').after(fractionBox);
    jQuery('input[name*="-height-"]').after('<input type="number" step="1" class="wholeNum" />');

    jQuery('.wc-pao-addon-fullness p.form-row').addClass('show fullness-option');
    fullnessSection.after('<div><span> We add a standard 15% extra fabric to our track size to help seal light gaps.  If you would like your curtain made to your EXACT measurments, please select Exact Measurements.</span></div>');
    fullnessLabel = '<label for="fullness-standard">&nbsp;&nbsp;Standard Fullness&nbsp;&nbsp;</label>';
    fullnessYes.attr('id','fullness-standard').attr('checked','checked').after(fullnessLabel);
    removeTextNodes(fullnessYes);

    fullnessLabel = '<label for="fullness-exact">&nbsp;&nbsp;Exact Measurements&nbsp;&nbsp;</label>';
    fullnessNo.attr('id','fullness-exact') .after(fullnessLabel);
    removeTextNodes(fullnessNo);

    // Add the color swatches to the color section
    jQuery('.wc-pao-addon-color .form-row').before('<img src="/wp-content/themes/blackout-child/images/swatches.jpg" class="swatches" usemap="#zones"><map name="zones" id="zones"><area style="cursor:pointer;" alt="1-blackblack-textron-1" data-index="1" title="" shape="poly" coords="4,4,7,121,133,119,129,7" /><area style="cursor:pointer;" alt="2-whitewhite-robyn-2" data-index="2" title="" shape="poly" coords="141,7,144,118,279,120,273,7" />    <area style="cursor:pointer;" alt="3-blackwhite-robyn-3" data-index="3" title="" shape="poly" coords="285,7,286,121,423,120,417,11" /><area style="cursor:pointer;" alt="4-blackblack-staphcheck-4" data-index="4" title="" shape="poly" coords="429,8,434,121,556,119,552,7" /></map>');
    jQuery('#zones area').each(function() {
      jQuery(this).click(function(e) {
        jQuery('.wc-pao-addon-color .wc-pao-addon-select').prop('selectedIndex', parseInt(jQuery(this).data('index'))).trigger('change');
      });
    });

    // Create checkboxes for including the track
    
	jQuery('.wc-pao-addon-track p.form-row').addClass('show track-option');
    jQuery('.wc-pao-addon-track .amount').remove();

    trackLabel = '<label for="track-none"><img src="/wp-content/uploads/2017/09/commercial-no-track.jpg" /><strong>No Track</strong></label>';
    noTrack.attr('id','track-none').attr('checked','checked').after(trackLabel);
    noTrack.addClass('trackcheck-none');
    removeTextNodes(noTrack);

    trackLabel = '<label for="track-alum"><img src="/wp-content/uploads/2017/09/commercial-aluminum-track.jpg" /><strong>Aluminum Track</strong></label>';
    alumTrack.attr('id','track-alum').after(trackLabel);
    alumTrack.addClass('trackcheck-alum');
    alumTrack.data('unit-price', alumTrack.data('raw-price'));
    removeTextNodes(alumTrack);

    trackLabel = '<label for="track-flex"><img src="/wp-content/uploads/2017/09/commercial-flexible-track.jpg" /><strong>Flexible Track</strong></label>';
    flexTrack.attr('id','track-flex').after(trackLabel);
    flexTrack.addClass('trackcheck-flex');
    flexTrack.data('unit-price', flexTrack.data('raw-price'));
    removeTextNodes(flexTrack);

    // Insert the label & image for the screw radio buttons
    jQuery('.wc-pao-addon-screws p.form-row').addClass('show screw-option');

    screwLabel = '<label for="screw-none"><img src="/wp-content/uploads/2018/02/no-screws.jpg" /><strong>No Screws</strong> <p>Free</p></label>';
    noScrews.attr('id','screw-none').attr('checked','checked').after(screwLabel);
    noScrews.addClass('screw-none');
    removeTextNodes(noScrews);

    screwLabel = '<label for="screw-self"><img src="/wp-content/uploads/2017/11/tek-screws.jpg"" /><strong>Self Tapping Screws</strong> <p>Free</p></label>';
    selfTapScrews.attr('id','screw-self').after(screwLabel);
    selfTapScrews.addClass('screw-self');
    removeTextNodes(selfTapScrews);

    screwLabel = '<label for="screw-anchor"><img src="/wp-content/uploads/2017/11/anchor-screws.jpg" /><strong>Anchor Screws</strong> <p>Free</p></label>';
    anchorScrews.attr('id','screw-anchor').after(screwLabel);
    anchorScrews.addClass('screw-anchor');
    removeTextNodes(anchorScrews);
	  
	  
	  
	  
// Insert the label & image for the fabric radio buttons
    jQuery('.wc-pao-addon-pick-your-curtain-fabric p.form-row').addClass('show fabric-option');

    fabricLabel = '<label for="tectron-fabric"><img src="/wp-content/uploads/2016/08/black-black.jpg" /><strong>Tectron</strong> <p>Black/Black</p></label>';
    Tectron.attr('id','tectron-fabric').attr('checked','checked').after(fabricLabel);
    Tectron.addClass('tectron-fabric');
    removeTextNodes(Tectron);

    fabricLabel = '<label for="robynwhite-fabric"><img src="/wp-content/uploads/2016/08/white-white.jpg" /><strong>Robyn</strong> <p>White/White</p></label>';
    RobynWhite.attr('id','robynwhite-fabric').after(fabricLabel);
    RobynWhite.addClass('robynwhite-fabric');
    removeTextNodes(RobynWhite);

    fabricLabel = '<label for="robynblack-fabric"><img src="/wp-content/uploads/2016/08/black-white.jpg" /><strong>Robyn</strong> <p>Black/White</p></label>';
    RobynBlack.attr('id','robynblack-fabric').after(fabricLabel);
    RobynBlack.addClass('robynblack-fabric');
    removeTextNodes(RobynBlack);

    fabricLabel = '<label for="staph-fabric"><img src="/wp-content/uploads/2016/08/black-black-shiny.jpg" /><strong>Staph</strong> <p>Black/Black</p></label>';
    Staph.attr('id','staph-fabric').after(fabricLabel);
    Staph.addClass('staph-fabric');
    removeTextNodes(Staph);
	  
	  
	  
// Insert the label & image for the Valance radio buttons
    jQuery('.wc-pao-addon-add-a-valance p.form-row').addClass('show valance-option');

    valanceLabel = '<label for="no-valance"><img src="/wp-content/uploads/2016/08/black-black.jpg" /><strong>No Valance</strong> <p>Free</p></label>';
    novalance.attr('id','no-valance').attr('checked','checked').after(valanceLabel);
    novalance.addClass('no-valance');
    removeTextNodes(novalance);

    valanceLabel = '<label for="standard-valance"><img src="/wp-content/uploads/2016/08/white-white.jpg" /><strong>One Sided Valance</strong> <p>$5 per foot</p></label>';
    standardvalance.attr('id','standard-valance').after(valanceLabel);
    standardvalance.addClass('standard-valance');
    removeTextNodes(standardvalance);

    valanceLabel = '<label for="oversized-valance"><img src="/wp-content/uploads/2016/08/black-white.jpg" /><strong>Both Sides Valance</strong> <p>$10 per foot</p></label>';
    oversizedvalance.attr('id','oversized-valance').after(valanceLabel);
    oversizedvalance.addClass('oversized-valance');
    removeTextNodes(oversizedvalance);
	  

	  
// Insert the label & image for the Velcro radio buttons
    jQuery('.wc-pao-addon-velcro-between-panels p.form-row').addClass('show velcro-option');

    velcroLabel = '<label for="add-velcro"><img src="/wp-content/uploads/2021/03/blackout-curtains-velcro.jpg" /><strong>Add Velcro</strong> <p>$35 per panel</p></label>';
    addvelcro.attr('id','add-velcro').attr('checked','checked').after(velcroLabel);
    addvelcro.addClass('add-velcro');
    removeTextNodes(addvelcro);

    velcroLabel = '<label for="no-velcro"><img src="/wp-content/uploads/2021/03/blackout-curtains-velcro-no-no.jpg" /><strong>No Velcro</strong> <p>Free</p></label>';
    novelcro.attr('id','no-velcro').after(velcroLabel);
    novelcro.addClass('no-velcro');
    removeTextNodes(novelcro);
	  
	  
	  
// Insert the label & image for the Weights radio buttons
    jQuery('.wc-pao-addon-weighted-hem p.form-row').addClass('show weight-option');

    weightsLabel = '<label for="add-weights"><img src="/wp-content/uploads/2021/03/blackout-curtains-weighted-hems.jpg" /><strong>Add Weights</strong> <p>$5 per foot</p></label>';
    addweights.attr('id','add-weights').attr('checked','checked').after(weightsLabel);
    addweights.addClass('add-weights');
    removeTextNodes(addweights);

    weightsLabel = '<label for="no-weights"><img src="/wp-content/uploads/2021/03/blackout-curtains-weighted-hems-no.jpg" /><strong>No Weights</strong> <p>Free</p></label>';
    noweights.attr('id','no-weights').after(weightsLabel);
    noweights.addClass('no-weights');
    removeTextNodes(noweights);	  

	  
	  
// Insert the label & image for the Mount radio buttons
    jQuery('.wc-pao-addon-mount-type p.form-row').addClass('show mount-option');

    mountLabel = '<label for="ceiling-mount"><img src="/wp-content/uploads/2016/08/black-black.jpg" /><strong>Ceiling</strong></label>';
    ceiling.attr('id','ceiling-mount').attr('checked','checked').after(mountLabel);
    ceiling.addClass('ceiling-mount');
    removeTextNodes(ceiling);

    mountLabel = '<label for="wall-or-outside-window"><img src="/wp-content/uploads/2016/08/white-white.jpg" /><strong>Wall or Outside Window</strong></label>';
    outsidewall.attr('id','wall-or-outside-window').after(mountLabel);
    outsidewall.addClass('wall-or-outside-window');
    removeTextNodes(outsidewall);	
	  
    mountLabel = '<label for="inside-window"><img src="/wp-content/uploads/2016/08/white-white.jpg" /><strong>Inside Window</strong></label>';
    insidewindow.attr('id','inside-window').after(mountLabel);
    insidewindow.addClass('inside-window');
    removeTextNodes(insidewindow);		  
	  
	  
	  
// Insert the label & image for the Curtain Length radio buttons
    jQuery('.wc-pao-addon-curtain-length p.form-row').addClass('show length-option');

    lengthLabel = '<label for="standard-length"><img src="/wp-content/uploads/2016/08/black-black.jpg" /><strong>Standard Length</strong><p>Free</p></label>';
    standardlength.attr('id','standard-length').attr('checked','checked').after(lengthLabel);
    standardlength.addClass('standard-length');
    removeTextNodes(standardlength);

    lengthLabel = '<label for="kiss-the-floor"><img src="/wp-content/uploads/2016/08/white-white.jpg" /><strong>Kiss the Floor</strong><p>Free</p></label>';
    kissfloor.attr('id','kiss-the-floor').after(lengthLabel);
    kissfloor.addClass('kiss-the-floor');
    removeTextNodes(kissfloor);
	  

// Insert the label & image for the Curtain Fullness radio buttons
    jQuery('.wc-pao-addon-curtain-fullness p.form-row').addClass('show fullness-option');

    fullnessLabel = '<label for="standard-fullness"><img src="/wp-content/uploads/2016/08/black-black.jpg" /><strong>Standard Fullness</strong><p>Free</p></label>';
    standardfullness.attr('id','standard-fullness').attr('checked','checked').after(fullnessLabel);
    standardfullness.addClass('standard-fullness');
    removeTextNodes(standardfullness);

    fullnessLabel = '<label for="same-as-track"><img src="/wp-content/uploads/2016/08/white-white.jpg" /><strong>Same as Track</strong><p>Free</p></label>';
    sametrack.attr('id','same-as-track').after(fullnessLabel);
    sametrack.addClass('same-as-track');
    removeTextNodes(sametrack);	  
	  
	  

// Insert the label & image for the track style radio buttons
    jQuery('.wc-pao-addon-pick-your-track-style p.form-row').addClass('show track-style-option');

    styleLabel = '<label for="style-1"><img src="/wp-content/uploads/2021/03/blackout-curtains-style-1.jpg" /><strong>Style 1 </strong><p>One side</p></label>';
    Style_1.attr('id','style-1').attr('checked','checked').after(styleLabel);
    Style_1.addClass('style-1');
    removeTextNodes(Style_1);

    styleLabel = '<label for="style-2"><img src="/wp-content/uploads/2021/03/blackout-curtains-style-2.jpg" /><strong>Style 2 </strong><p>Two sides with one 90º bend to the right</p></label>';
    Style_2.attr('id','style-2').attr('checked','checked').after(styleLabel);
    Style_2.addClass('style-2');
    removeTextNodes(Style_2);
	  
    styleLabel = '<label for="style-3"><img src="/wp-content/uploads/2021/03/blackout-curtains-style-3.jpg" /><strong>Style 3 </strong><p>Two sides with one 90º bend to the left</p></label>';
    Style_3.attr('id','style-3').attr('checked','checked').after(styleLabel);
    Style_3.addClass('style-3');
    removeTextNodes(Style_3);

    styleLabel = '<label for="style-4"><img src="/wp-content/uploads/2021/03/blackout-curtains-style-4.jpg" /><strong>Style 4 </strong><p>Three sides with two 90º bends</p></label>';
    Style_4.attr('id','style-4').attr('checked','checked').after(styleLabel);
    Style_4.addClass('style-4');
    removeTextNodes(Style_4);	  

    styleLabel = '<label for="style-5"><img src="/wp-content/uploads/2021/03/blackout-curtains-style-5.jpg" /><strong>Style 5 </strong><p>Two sides with one 45º bend to the right</p></label>';
    Style_5.attr('id','style-5').attr('checked','checked').after(styleLabel);
    Style_5.addClass('style-5');
    removeTextNodes(Style_5);
	  
    styleLabel = '<label for="style-6"><img src="/wp-content/uploads/2021/03/blackout-curtains-style-6.jpg" /><strong>Style 6 </strong><p>Two sides with one 45º bend to the left</p></label>';
    Style_6.attr('id','style-6').attr('checked','checked').after(styleLabel);
    Style_6.addClass('style-6');
    removeTextNodes(Style_6);

    styleLabel = '<label for="style-7"><img src="/wp-content/uploads/2021/03/blackout-curtains-style-7.jpg" /><strong>Style 7 </strong><p>Four sides with four 90º bends</p></label>';
    Style_7.attr('id','style-7').attr('checked','checked').after(styleLabel);
    Style_7.addClass('style-7');
    removeTextNodes(Style_7);	  
    

    

    // Create checkbox for including the valance
    jQuery('.wc-pao-addon-valance p.form-row').hide();
    valanceCheck = '<p class="form-row form-row-wide show"><input type="checkbox" id="cb_valance" class="wc-pao-addon wc-pao-addon-checkbox valancecheck" name="valancecheck" checked><label for="cb_valance">&nbsp;&nbsp;Include Valance</label></p>';
    valanceSection.after(valanceCheck);
    valanceSmall.data('unit-price', valanceSmall.data('raw-price'));
    valanceBig.data('unit-price', valanceBig.data('raw-price'));

    // Hide the area price
    jQuery('.wc-pao-addon-area-price').hide();
    jQuery('.summary-container .price').hide();

    /* CSS Class Addition - Keep below DOM Manipulations */
    jQuery('.wc-pao-addon .form-row select').wrap( "<div class='avada-select-parent'></div>" ).after('<div class="select-arrow" style="height: 27px; width: 27px; line-height: 27px;"></div>');
  }

  function bindEvents() {
    jQuery('.valancecheck').click(updatePricing);
    jQuery('.wc-pao-addon-track input').click(updatePricing);
    jQuery('.wc-pao-addon-screws input').click(updatePricing);
    jQuery('.wc-pao-addon-color').change(updatePricing);
    jQuery('.wc-pao-addon-mount-type').change(updatePricing);
    jQuery('#fullness-standard').click(updatePricing);
    jQuery('#fullness-exact').click(updatePricing);
    jQuery('.wholeNum').keyup(updatePricing);
    jQuery('input[name*="-width-"]').change(updatePricing);
    jQuery('input[name*="-height-"]').change(updatePricing);
    jQuery('input[name*="-width-"]').keyup(updatePricing);
    jQuery('input[name*="-height-"]').keyup(updatePricing);
    jQuery('select.fraction-box').change(updatePricing);

    
  }


  function updatePricing() {
    // Add the whole number and fraction value together to make the width
    jQuery('input[name*="-width-"], input[name*="-height-"]').each(function(){
      wholeNum = jQuery(this).siblings(".wholeNum").val();
      fractionVal = jQuery(this).parent().find(".fraction-box").val();
      originalNum = Math.floor(wholeNum);

      if(fractionVal > 0){
        jQuery(this).val(wholeNum + fractionVal);
      } else {
        jQuery(this).val(originalNum);
      }
    });

    const curtainHeight = Number(jQuery('input[name*="-height-"]').val());
    const totalLength = getTotalLength();

    // Dimension Errors
    dimension_error = false;
    jQuery('input[name*="-height-"]').parent('.form-row').toggleClass('dimension-error-height', (totalLength > 0 && curtainHeight == 0));
    jQuery('.wc-pao-addon-color').toggleClass('dimension-error', isColorSelected == false);
    jQuery('.wc-pao-addon-mount-type').toggleClass('dimension-error', isMountSelected == false);
    var isColorSelected = jQuery('.wc-pao-addon-color .wc-pao-addon-select').prop('selectedIndex') != 0;
    var isMountSelected = jQuery('.wc-pao-addon-mount-type .wc-pao-addon-select').prop('selectedIndex') != 0;

    if(!isColorSelected || !isMountSelected){
      dimension_error = true;
    }
    if(totalLength < 16 || curtainHeight <= 0){
      dimension_error = true;
    }

    // Disable the button if we have a dimension_error
    jQuery('.single_add_to_cart_button').prop('disabled', dimension_error ? 'disabled' : '');

    // Set Prices
    setAreaPrice(totalLength, curtainHeight);
    setValancePrice(totalLength);
    setTrackPrice(totalLength);
  }

  function calculateAreaPrice(length, height) {
    const lengthSnaps = [45, 75, 102, 129, 156, 183, 210, 242, 269, 348, 377, 406];
    const heightSnaps = [48, 60, 72, 84, 96, 108, 120, 132, 144, 156];
    const pricingPerInch = {
      'height48': [0.0407, 0.0339, 0.0349, 0.0388, 0.0374, 0.0389, 0.0477, 0.0575, 0.0714, 0.0761, 0.0970, 0.1243],
      'height60': [0.0350, 0.0300, 0.0300, 0.0326, 0.0314, 0.0327, 0.0401, 0.0483, 0.0600, 0.0639, 0.0815, 0.1044],
      'height72': [0.0340, 0.0278, 0.0270, 0.0285, 0.0275, 0.0286, 0.0351, 0.0422, 0.0525, 0.0560, 0.0713, 0.0910],
      'height84': [0.0340, 0.0280, 0.0260, 0.0257, 0.0248, 0.0258, 0.0316, 0.0380, 0.0472, 0.0540, 0.0642, 0.0809],
      'height96': [0.0340, 0.0270, 0.0270, 0.0270, 0.0260, 0.0260, 0.0310, 0.0370, 0.0460, 0.0500, 0.0589, 0.0755],
      'height108': [0.0320, 0.0270, 0.0270, 0.0288, 0.0277, 0.0260, 0.0310, 0.0370, 0.0445, 0.0460, 0.0550, 0.0705],
      'height120': [0.0300, 0.0270, 0.0270, 0.0272, 0.0262, 0.0273, 0.0310, 0.0350, 0.0445, 0.0450, 0.0520, 0.0670],
      'height132': [0.0300, 0.0270, 0.0270, 0.0260, 0.0250, 0.0260, 0.0310, 0.0384, 0.0445, 0.0450, 0.0496, 0.0660],
      'height144': [0.0290, 0.0270, 0.0270, 0.0250, 0.0241, 0.0250, 0.0301, 0.0370, 0.0442, 0.0440, 0.0478, 0.0652],
      'height156': [0.0280, 0.0270, 0.0270, 0.0242, 0.0233, 0.0245, 0.0297, 0.0358, 0.0445, 0.0440, 0.0480, 0.0631],
    }
    const heightSnapped = heightSnaps.find(value => height <= value) || heightSnaps.slice(-1)[0];
    const lengthSnapped = lengthSnaps.find(value => length <= value) || lengthSnaps.slice(-1)[0];
    const lengthIndex = lengthSnaps.findIndex(value => value === lengthSnapped);
    const pricePerInch = pricingPerInch[`height${heightSnapped}`][lengthIndex];
    const squareInches = length * height;
    const total = squareInches * pricePerInch;
    return total.toFixed(2);
  }

  function adjustLengthForFullness(length) {
    const standardFullness = document.getElementById('fullness-standard').checked;
    const fullnessAdjustment = standardFullness ? length * .15 : 0;
    const adjustedLength = length + fullnessAdjustment;
    return adjustedLength;
  }

  function getTotalLength() {
    var wA = 0;
    var wB = 0;
    var wC = 0;
    var wD = 0;
    if (jQuery('input[name*="width-a-inches"]').length){
      wA = jQuery('input[name*="width-a-inches"]').val();
      checkDimensions(jQuery('input[name*="width-a-inches"]'));
    }
    if (jQuery('input[name*="width-b-inches"]').length){
      wB = jQuery('input[name*="width-b-inches"]').val();
      checkDimensions(jQuery('input[name*="width-b-inches"]'));
    }
    if (jQuery('input[name*="width-c-inches"]').length){
      wC = jQuery('input[name*="width-c-inches"]').val();
      checkDimensions(jQuery('input[name*="width-c-inches"]'));
    }
    if (jQuery('input[name*="width-d-inches"]').length){
      wD = jQuery('input[name*="width-d-inches"]').val();
      checkDimensions(jQuery('input[name*="width-d-inches"]'));
    }
    const totalLength = wA*1 + wB*1 + wC*1 + wD*1;
    return totalLength;
  }

  function setAreaPrice(length, height) {
    const adjustedLength = adjustLengthForFullness(length);
    const price = calculateAreaPrice(adjustedLength, height);
    jQuery('.wc-pao-addon-custom-price').val(price);
    jQuery('.wc-pao-addon-custom-price').keyup(); // this is required so subtotal is updated
  }

  function setValancePrice(length) {
    valanceSmall.data('raw-price',0);
    valanceSmall.data('price',0);
    valanceBig.data('raw-price',0);
    valanceBig.data('price',0);
    if (jQuery('input.valancecheck').is(":checked")) {
      valanceNone.data('label',"Included").attr('checked','checked');
    } else {
      valanceNone.data('label',"None").attr('checked','checked');
    }
    if (jQuery('input.valancecheck').is(":checked") && length > 0) {
      if (length < 210) {
        let price = calculateAreaPrice(length + 4, 12);
        valanceSmall.data('raw-price', price);
        valanceSmall.data('price', price);
        valanceSmall.attr('checked','checked');
      } else if (length >= 210) {
        let price = calculateAreaPrice(length + 4, 12);
        valanceBig.data('raw-price', price);
        valanceBig.data('price', price);
        valanceBig.attr('checked','checked');
      }
    }
  }

  function setTrackPrice(length) {
    alumTrack.data('raw-price',0);
    alumTrack.data('price',0);
    flexTrack.data('raw-price',0);
    flexTrack.data('price',0);

    if(length > 0){
      if(jQuery('input.trackcheck-alum').is(":checked")){
        let price = Number(alumTrack.data('unit-price'));
        alumTrack.data('raw-price',(length * price));
        alumTrack.data('price',(length * price));
      }
      if(jQuery('input.trackcheck-flex').is(":checked")){
        let price = Number(flexTrack.data('unit-price'));
        flexTrack.data('raw-price',(length * price));
        flexTrack.data('price',(length * price));
      }
    }
  }

  function checkDimensions(el){
    let value = el.val();
    let belowMinLength = (value > 0 && value < 16);

    if(belowMinLength){
      dimension_error = true;
    }
    el.parent('.form-row').toggleClass('dimension-error-width', belowMinLength);
  }

  function removeTextNodes(elem){
    elem.parent().contents().filter(function(){
          return (this.nodeType == 3);
      }).remove();
  }



});



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



    //IMG TEXT OVERLAY (not working)

    var image1Pre = document.getElementsByClassName('woocommerce-product-gallery__image')
    var image1 = image1Pre[0];
    var image1img = image1.getElementsByTagName("img");
    var image1img1 = image1img[0];

    image1img1.classList.add('image-child')

    var newImage1Container = document.createElement('div')
    newImage1Container.classList.add('image-container')

    newImage1Container.appendChild(image1img1)


    //CREATE BOTTOM MENU
    var mainThing1 = document.getElementById('main');
    

    const bottomMenu = document.createElement('div');
    bottomMenu.classList.add('bottom-menu');

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.id = "menu-item-1";
    menuItem1.innerHTML = 'Track Info';

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.id = "menu-item-2";
    menuItem2.innerHTML = 'Fabric Info';

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.id = "menu-item-3";
    menuItem3.innerHTML = 'How to Measure and Install';

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');
    menuItem4.id = "menu-item-4";
    menuItem4.innerHTML = 'Track Types';

    const menuItem5 = document.createElement('div');
    menuItem5.classList.add('menu-item');
    menuItem5.id = "menu-item-5";
    menuItem5.innerHTML = 'Shipping and Production';
	
	const menuItem6 = document.createElement('div');
    menuItem6.classList.add('menu-item');
    menuItem6.id = "menu-item-6";
    menuItem6.innerHTML = 'Collapse';


    bottomMenu.appendChild(menuItem1);
    bottomMenu.appendChild(menuItem2);
    bottomMenu.appendChild(menuItem3);
    bottomMenu.appendChild(menuItem4);
    bottomMenu.appendChild(menuItem5);
    bottomMenu.appendChild(menuItem6);
  
	
	
    var footerPre = document.getElementsByClassName('content');
    var footer = footerPre[0];
	
	var BoxColor = '<?php echo $color;?>';
    
    mainThing1.insertBefore(bottomMenu, footer);


    //CREATE BOTTOM MENU CONTENT

    const bottomContainer = document.createElement('div');
    bottomContainer.classList.add('bottom-container');
    bottomContainer.id = "bottom-container";

    const bottomElement1 = document.createElement('div')
    bottomElement1.classList.add('bottom-element')
    bottomElement1.id = "bottom-element-1"
    bottomElement1.style.display = "none"
    bottomElement1.innerHTML = 'track info block'

    const bottomElement2 = document.createElement('div')
    bottomElement2.classList.add('bottom-element')
    bottomElement2.id = "bottom-element-2"
    bottomElement2.style.display = "none"
    bottomElement2.innerHTML = 'fabric info block'

    const bottomElement3 = document.createElement('div')
    bottomElement3.classList.add('bottom-element')
    bottomElement3.id = "bottom-element-3"
    bottomElement3.style.display = "none"
    bottomElement3.innerHTML = 'how to measure and install block'

    const bottomElement4 = document.createElement('div')
    bottomElement4.classList.add('bottom-element')
    bottomElement4.id = "bottom-element-4"
    bottomElement4.style.display = "none"
    bottomElement4.innerHTML = 'track types block'

    const bottomElement5 = document.createElement('div')
    bottomElement5.classList.add('bottom-element')
    bottomElement5.id = "bottom-element-5"
    bottomElement5.style.display = "none"
    bottomElement5.innerHTML = 'shipping and production block'

    bottomContainer.appendChild(bottomElement1)
    bottomContainer.appendChild(bottomElement2)
    bottomContainer.appendChild(bottomElement3)
    bottomContainer.appendChild(bottomElement4)
    bottomContainer.appendChild(bottomElement5)

    mainThing1.insertBefore(bottomContainer, footer)


    this.document.getElementById("menu-item-1").addEventListener("click", function(event) {
      event.preventDefault(); 
      bottomElement1.style.display = "" 
      bottomElement2.style.display = "none"
      bottomElement3.style.display = "none"
      bottomElement4.style.display = "none"
      bottomElement5.style.display = "none"
    })

    this.document.getElementById("menu-item-2").addEventListener("click", function(event) {
      event.preventDefault(); 
      bottomElement1.style.display = "none" 
      bottomElement2.style.display = ""
      bottomElement3.style.display = "none"
      bottomElement4.style.display = "none"
      bottomElement5.style.display = "none"
    })

    this.document.getElementById("menu-item-3").addEventListener("click", function(event) {
      event.preventDefault(); 
      bottomElement1.style.display = "none" 
      bottomElement2.style.display = "none"
      bottomElement3.style.display = ""
      bottomElement4.style.display = "none"
      bottomElement5.style.display = "none"
    })

    this.document.getElementById("menu-item-4").addEventListener("click", function(event) {
      event.preventDefault(); 
      bottomElement1.style.display = "none" 
      bottomElement2.style.display = "none"
      bottomElement3.style.display = "none"
      bottomElement4.style.display = ""
      bottomElement5.style.display = "none"
    })

    this.document.getElementById("menu-item-5").addEventListener("click", function(event) {
      event.preventDefault(); 
      bottomElement1.style.display = "none" 
      bottomElement2.style.display = "none"
      bottomElement3.style.display = "none"
      bottomElement4.style.display = "none"
      bottomElement5.style.display = ""
    })



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

    const fabMore = document.createElement('div')
      fabMore.innerHTML = 
      '<p style="text-align: right">Learn more about our fabrics</p>'
      wrapper.appendChild(fabMore)




    curtFabFeat.map(each => wrapper.appendChild(each));
    mainThing.insertBefore(wrapper, mountSpot);

    var newButton = document.createElement('button');
    newButton.innerHTML = 'Pick Your Curtain Fabric and Features';
    newButton.classList.add("accordion");
    newButton.id = "button2";
    mainThing.insertBefore(newButton, wrapper);

	
	//new code
	 
	

      //CREATE ACCORDION FOR MOUNT TYPE AND FASTENERS

      var mountFast = [curtFabFeatPre[5],curtFabFeatPre[6]];
      var newSpotPre = document.getElementsByClassName('wc-pao-addon-curtain-dimensions');
      var newSpot = newSpotPre[0];

      const newWrapper = document.createElement('div');
      newWrapper.classList.add('newWrapper');
      newWrapper.classList.add('panel');
      mountFast.map(each => newWrapper.appendChild(each));
      mainThing.insertBefore(newWrapper, newSpot);

      var newButton2 = document.createElement('button');
      newButton2.innerHTML = 'Select Your Mount Position and Fasteners';
      newButton2.classList.add("accordion");
      newButton2.id = "button3";
      mainThing.insertBefore(newButton2, newWrapper);


      this.document.getElementById("button3").addEventListener("click", function(event) {
      event.preventDefault();  
      this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      })


      //CREATE ACCORDION FOR TRACK DIMENSIONS


      var trackDim = [curtFabFeatPre[7],curtFabFeatPre[8],curtFabFeatPre[9],curtFabFeatPre[10],curtFabFeatPre[11],curtFabFeatPre[12],curtFabFeatPre[13],curtFabFeatPre[14]];
      var newSpotPre1 = document.getElementsByClassName('wc-pao-addon-track');
      var newSpot1 = newSpotPre1[0];

      const newWrapper2 = document.createElement('div');
      newWrapper2.classList.add('newWrapper2');
      newWrapper2.classList.add('panel');

      const learnHowToMeasureLink = document.createElement('div')
      learnHowToMeasureLink.innerHTML = '<p style="text-align: right">Learn How To Measure</p>'

      newWrapper2.appendChild(learnHowToMeasureLink)

      trackDim.map(each => newWrapper2.appendChild(each));
      mainThing.insertBefore(newWrapper2, newSpot1);

      var newButton3 = document.createElement('button');
      newButton3.innerHTML = 'Enter Your Track Dimensions';
      newButton3.classList.add("accordion");
      newButton3.id = "button4";
      mainThing.insertBefore(newButton3, newWrapper2);


      this.document.getElementById("button4").addEventListener("click", function(event) {
      event.preventDefault();  
      this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      })


      //CREATE ACCORDION FOR TRACK TYPE
	  
      var trackType = [curtFabFeatPre[15]]
      var newSpot2Pre = document.getElementsByClassName('wc-pao-addon-area-price');
      var newSpot2 = newSpot2Pre[0];
      

      const newWrapper3 = document.createElement('div');
      newWrapper3.classList.add('newWrapper3');
      newWrapper3.classList.add('panel');


      const trackInfo = document.createElement('div')
      trackInfo.innerHTML = 
        '<p style="text-align: right">Learn more about types of track and hardware</p>'

      newWrapper3.appendChild(trackInfo)




      trackType.map(each => newWrapper3.appendChild(each));
      mainThing.insertBefore(newWrapper3, newSpot2);

      var newButton3 = document.createElement('button');
      newButton3.innerHTML = 'Pick Your Track Material';
      newButton3.classList.add("accordion");
      newButton3.id = "button5";
      mainThing.insertBefore(newButton3, newWrapper3);


      this.document.getElementById("button5").addEventListener("click", function(event) {
      event.preventDefault();  
      this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      })




    //CREATE ACCORDION FOR STYLES


    var stylesAcc = [curtFabFeatPre[0]]
      var newSpot9 = document.getElementById('button2');
      
      

      const newWrapper9 = document.createElement('div');
      newWrapper9.classList.add('newWrapper3');
      newWrapper9.classList.add('panel');

      const planView = document.createElement('div')
      planView.innerHTML = 
        '<div style="display:flex; flex-direction:row; justify-content: space-between"><p class="protip">Plan view-as seen from above</p><p style="text-align: right">Learn more about track styles</p></div><p>Custom styles available. Call us at 1.800.BLACKOUT or <a>start a custom quote</a></p>'

      newWrapper9.appendChild(planView)



      stylesAcc.map(each => newWrapper9.appendChild(each));
      mainThing.insertBefore(newWrapper9, newSpot9);




      var newButton9 = document.createElement('button');
      newButton9.innerHTML = 'Pick Your Track Style';
      newButton9.classList.add("accordion");
      newButton9.id = "button9";
      mainThing.insertBefore(newButton9, newWrapper9);


      this.document.getElementById("button9").addEventListener("click", function(event) {
      event.preventDefault();  
      this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      })

      


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
    trackSection.after('<span> - supplied by <a href="https://americantracksupply.com"  target="_blank" style="display: inline-block;  vertical-align: text-bottom;"><img src="https://blackoutcurtains.com/wp-content/uploads/2016/08/americantracksupply.png" /></a></span>');
    jQuery('.wc-pao-addon-track p.form-row').addClass('show track-option');
    jQuery('.wc-pao-addon-track .amount').remove();

    trackLabel = '<label for="track-none"><img src="/wp-content/uploads/2017/09/commercial-no-track.jpg" />No Track</label>';
    noTrack.attr('id','track-none').attr('checked','checked').after(trackLabel);
    noTrack.addClass('trackcheck-none');
    removeTextNodes(noTrack);

    trackLabel = '<label for="track-alum"><img src="/wp-content/uploads/2017/09/commercial-aluminum-track.jpg" />Aluminum Track</label>';
    alumTrack.attr('id','track-alum').after(trackLabel);
    alumTrack.addClass('trackcheck-alum');
    alumTrack.data('unit-price', alumTrack.data('raw-price'));
    removeTextNodes(alumTrack);

    trackLabel = '<label for="track-flex"><img src="/wp-content/uploads/2017/09/commercial-flexible-track.jpg" />Flexible Track</label>';
    flexTrack.attr('id','track-flex').after(trackLabel);
    flexTrack.addClass('trackcheck-flex');
    flexTrack.data('unit-price', flexTrack.data('raw-price'));
    removeTextNodes(flexTrack);

    // Insert the label & image for the screw radio buttons
    jQuery('.wc-pao-addon-screws p.form-row').addClass('show screw-option');

    screwLabel = '<label for="screw-none"><img src="/wp-content/uploads/2018/02/no-screws.jpg" />No Screws</label>';
    noScrews.attr('id','screw-none').attr('checked','checked').after(screwLabel);
    noScrews.addClass('screw-none');
    removeTextNodes(noScrews);

    screwLabel = '<label for="screw-self"><img src="/wp-content/uploads/2017/11/tek-screws.jpg"" />Self Tapping Screws</label>';
    selfTapScrews.attr('id','screw-self').after(screwLabel);
    selfTapScrews.addClass('screw-self');
    removeTextNodes(selfTapScrews);

    screwLabel = '<label for="screw-anchor"><img src="/wp-content/uploads/2017/11/anchor-screws.jpg" />Anchor Screws</label>';
    anchorScrews.attr('id','screw-anchor').after(screwLabel);
    anchorScrews.addClass('screw-anchor');
    removeTextNodes(anchorScrews);
	  
	  
	  
	  
	// Insert the label & image for the fabric radio buttons
    jQuery('.wc-pao-addon-pick-your-curtain-fabric p.form-row').addClass('show fabric-option');

    fabricLabel = '<label for="tectron-fabric"><img src="/wp-content/uploads/2016/08/black-black.jpg" />Tectron <p>Black/Black</p></label>';
    Tectron.attr('id','tectron-fabric').attr('checked','checked').after(fabricLabel);
    Tectron.addClass('tectron-fabric');
    removeTextNodes(Tectron);

    fabricLabel = '<label for="robynwhite-fabric"><img src="/wp-content/uploads/2016/08/white-white.jpg" />Robyn <p>White/White</p></label>';
    RobynWhite.attr('id','robynwhite-fabric').after(fabricLabel);
    RobynWhite.addClass('robynwhite-fabric');
    removeTextNodes(RobynWhite);

    fabricLabel = '<label for="robynblack-fabric"><img src="/wp-content/uploads/2016/08/black-white.jpg" />Robyn <p>Black/White</p></label>';
    RobynBlack.attr('id','robynblack-fabric').after(fabricLabel);
    RobynBlack.addClass('robynblack-fabric');
    removeTextNodes(RobynBlack);

    fabricLabel = '<label for="staph-fabric"><img src="/wp-content/uploads/2016/08/black-black-shiny.jpg" />Staph <p>Black/Black</p></label>';
    Staph.attr('id','staph-fabric').after(fabricLabel);
    Staph.addClass('staph-fabric');
    removeTextNodes(Staph);
    

    

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



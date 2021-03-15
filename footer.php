<?php
/**
 * The footer template.
 *
 * @package Avada
 * @subpackage Templates
 */

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Direct script access denied.' );
}
?>


					<?php do_action( 'avada_after_main_content' ); ?>

				</div>  <!-- fusion-row -->
			</main>  <!-- #main -->
			
			
	<?php
	if (  is_product() ) { ?>
	
	<div class="tabbottom">
		  <button class="tablinks" onclick="tabinfo(event, 'TrackInfo')">Track Info</button>
		  <button class="tablinks" onclick="tabinfo(event, 'FabricInfo')">Fabric Info</button>
		  <button class="tablinks" onclick="tabinfo(event, 'HowtoMeasure')">How to Measure and Install</button>
		  <button class="tablinks" onclick="tabinfo(event, 'TrackTypes')">Track Types</button>
		  <button class="tablinks" onclick="tabinfo(event, 'ShipandProd')">Shipping and Production</button>
	</div>
	
	<div id="TrackInfo" class="tabcontent">
		<div class="width40 featuredimg"><?php if(function_exists('show_text_block')) { echo show_text_block('track-info-left', true); } ?></div>
		<div class="width60"><?php echo do_shortcode('[text-blocks id="4521" slug="track-info"]'); ?></div>
	</div>

	<div id="FabricInfo" class="tabcontent">
	 <?php if(function_exists('show_text_block')) { echo show_text_block('fabric-info', true); } ?>
	</div>

	<div id="HowtoMeasure" class="tabcontent">
	  <?php if(function_exists('show_text_block')) { echo show_text_block('how-to-measure-and-install', true); } ?>
	</div>

	<div id="TrackTypes" class="tabcontent">
	 <?php if(function_exists('show_text_block')) { echo show_text_block('track-types', true); } ?>
	</div>

	<div id="ShipandProd" class="tabcontent">
	  <?php if(function_exists('show_text_block')) { echo show_text_block('shipping-and-production', true); } ?>
	</div>
	
		<script>
			function tabinfo(evt, cityName) {
			  var i, tabcontent, tablinks;
			  tabcontent = document.getElementsByClassName("tabcontent");
			  for (i = 0; i < tabcontent.length; i++) {
				tabcontent[i].style.display = "none";
			  }
			  tablinks = document.getElementsByClassName("tablinks");
			  for (i = 0; i < tablinks.length; i++) {
				tablinks[i].className = tablinks[i].className.replace(" active", "");
			  }
			  document.getElementById(cityName).style.display = "block";
			  evt.currentTarget.className += " active";
		}
		
		</script>
	
	<?php } ?>

			
			
			<?php do_action( 'avada_after_main_container' ); ?>

			<?php global $social_icons; ?>

			<?php
			/**
			 * Get the correct page ID.
			 */
			$c_page_id = Avada()->fusion_library->get_page_id();
			?>

			<?php
			/**
			 * Only include the footer.
			 */
			?>
			<?php if ( ! is_page_template( 'blank.php' ) ) : ?>
				<?php $footer_parallax_class = ( 'footer_parallax_effect' === Avada()->settings->get( 'footer_special_effects' ) ) ? ' fusion-footer-parallax' : ''; ?>

				<div class="fusion-footer<?php echo esc_attr( $footer_parallax_class ); ?>">
					<?php get_template_part( 'templates/footer-content' ); ?>
				</div> <!-- fusion-footer -->
			<?php endif; // End is not blank page check. ?>

			<?php
			/**
			 * Add sliding bar.
			 */
			?>
			<?php if ( Avada()->settings->get( 'slidingbar_widgets' ) && ! is_page_template( 'blank.php' ) ) : ?>
				<?php get_template_part( 'sliding_bar' ); ?>
			<?php endif; ?>
		</div> <!-- wrapper -->

		<?php
		/**
		 * Check if boxed side header layout is used; if so close the #boxed-wrapper container.
		 */
		$page_bg_layout = 'default';
		if ( $c_page_id && is_numeric( $c_page_id ) ) {
			$fpo_page_bg_layout = get_post_meta( $c_page_id, 'pyre_page_bg_layout', true );
			$page_bg_layout = ( $fpo_page_bg_layout ) ? $fpo_page_bg_layout : $page_bg_layout;
		}
		?>
		<?php if ( ( ( 'Boxed' === Avada()->settings->get( 'layout' ) && 'default' === $page_bg_layout ) || 'boxed' === $page_bg_layout ) && 'Top' !== Avada()->settings->get( 'header_position' ) ) : ?>
			</div> <!-- #boxed-wrapper -->
		<?php endif; ?>
		<?php if ( ( ( 'Boxed' === Avada()->settings->get( 'layout' ) && 'default' === $page_bg_layout ) || 'boxed' === $page_bg_layout ) && 'framed' === Avada()->settings->get( 'scroll_offset' ) && 0 !== intval( Avada()->settings->get( 'margin_offset', 'top' ) ) ) : ?>
			<div class="fusion-top-frame"></div>
			<div class="fusion-bottom-frame"></div>
			<?php if ( 'None' !== Avada()->settings->get( 'boxed_modal_shadow' ) ) : ?>
				<div class="fusion-boxed-shadow"></div>
			<?php endif; ?>
		<?php endif; ?>
		<a class="fusion-one-page-text-link fusion-page-load-link"></a>
		
		
		
		<?php wp_footer(); ?>
	</body>
</html>

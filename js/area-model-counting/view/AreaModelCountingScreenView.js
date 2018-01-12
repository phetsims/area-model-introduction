// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var areaModelCounting = require( 'AREA_MODEL_COUNTING/areaModelCounting' );

  /**
   * @param {AreaModelCountingModel} areaModelCountingModel
   * @constructor
   */
  function AreaModelCountingScreenView( areaModelCountingModel ) {

    ScreenView.call( this );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        areaModelCountingModel.reset();
      },
      right:  this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  areaModelCounting.register( 'AreaModelCountingScreenView', AreaModelCountingScreenView );

  return inherit( ScreenView, AreaModelCountingScreenView, {

    //TODO Called by the animation loop. Optional, so if your view has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle view animation here.
    }
  } );
} );
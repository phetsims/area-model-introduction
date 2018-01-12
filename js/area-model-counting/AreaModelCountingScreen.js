// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var areaModelCounting = require( 'AREA_MODEL_COUNTING/areaModelCounting' );
  var AreaModelCountingModel = require( 'AREA_MODEL_COUNTING/area-model-counting/model/AreaModelCountingModel' );
  var AreaModelCountingScreenView = require( 'AREA_MODEL_COUNTING/area-model-counting/view/AreaModelCountingScreenView' );

  /**
   * @constructor
   */
  function AreaModelCountingScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new AreaModelCountingModel(); },
      function( model ) { return new AreaModelCountingScreenView( model ); },
      options
    );
  }

  areaModelCounting.register( 'AreaModelCountingScreen', AreaModelCountingScreen );

  return inherit( Screen, AreaModelCountingScreen );
} );
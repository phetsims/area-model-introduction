// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var MultiplyScreen = require( 'AREA_MODEL_COMMON/screens/MultiplyScreen' );
  var PartitionScreen = require( 'AREA_MODEL_COMMON/screens/PartitionScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var areaModelIntroductionTitleString = require( 'string!AREA_MODEL_INTRODUCTION/area-model-introduction.title' );

  var simOptions = {
    credits: {
      leadDesign: 'Amy Hanson, Amanda McGarry',
      softwareDevelopment: 'Jonathan Olson',
      team: 'Karina Hensberry, Kathy Perkins, Ariel Paul, Susan Miller',
      qualityAssurance: 'Steele Dalton, Ethan Johnson, Liam Mulhall',
      graphicArts: 'Amanda McGarry, Diana Lopez Tavares, Mariah Hermsmeyer'
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( areaModelIntroductionTitleString, [
      new MultiplyScreen(),
      new PartitionScreen()
    ], simOptions );
    sim.start();
  } );
} );
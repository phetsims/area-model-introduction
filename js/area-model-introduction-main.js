// Copyright 2018-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const MultiplyScreen = require( 'AREA_MODEL_COMMON/screens/MultiplyScreen' );
  const PartitionScreen = require( 'AREA_MODEL_COMMON/screens/PartitionScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  const areaModelIntroductionTitleString = require( 'string!AREA_MODEL_INTRODUCTION/area-model-introduction.title' );

  var simOptions = {
    credits: {
      leadDesign: 'Amy Hanson, Amanda McGarry',
      softwareDevelopment: 'Jonathan Olson',
      team: 'Karina Hensberry, Susan Miller, Ariel Paul, Kathy Perkins',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Clara Wilson, Kathryn Woessner',
      graphicArts: 'Mariah Hermsmeyer, Amanda McGarry, Diana L\u00f3pez Tavares'
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

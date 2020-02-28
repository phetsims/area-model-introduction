// Copyright 2018-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import MultiplyScreen from '../../area-model-common/js/screens/MultiplyScreen.js';
import PartitionScreen from '../../area-model-common/js/screens/PartitionScreen.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import areaModelIntroductionStrings from './area-model-introduction-strings.js';

const areaModelIntroductionTitleString = areaModelIntroductionStrings[ 'area-model-introduction' ].title;

const simOptions = {
  credits: {
    leadDesign: 'Amy Hanson, Amanda McGarry',
    softwareDevelopment: 'Jonathan Olson',
    team: 'Karina Hensberry, Susan Miller, Ariel Paul, Kathy Perkins',
    qualityAssurance: 'Steele Dalton, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Clara Wilson, Kathryn Woessner',
    graphicArts: 'Mariah Hermsmeyer, Amanda McGarry, Diana L\u00f3pez Tavares'
  }
};

SimLauncher.launch( function() {
  const sim = new Sim( areaModelIntroductionTitleString, [
    new MultiplyScreen(),
    new PartitionScreen()
  ], simOptions );
  sim.start();
} );
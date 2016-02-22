/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Create a website like BodyBuilding.com',
      info: 'Compare popular websites like bodybuilding.com ' +
            'side-by-side in our comparison grid. Read reviews ' +
            'of site trustworthiness, site security and customer service.',
      tag: 'Web App'
    }, {
      name: 'IOS running record application',
      info: 'Running apps that can track your speed, distance traveled, ' +
            'calories burned and even map your route',
      tag: 'Mobile App'
    }, {
      name: 'Android navigation application',
      info: 'These days most people use Google Maps or Apple Maps ' +
            'but are always curious what their navigation app options are.',
      tag: 'Mobile App'
    }, {
      name: 'Test IOS game application',
      info: ' Interface and general functionality of the game app ' +
            'should be tested only on a real devices, not just emulators.',
      tag: 'Test'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Guan',
      email: 'guan@example.com',
      password: 'guan',
      special: 'Web App'
    },{
      provider: 'local',
      name: 'Lee',
      email: 'lee@example.com',
      password: 'lee',
      special: 'Software'
    },{
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin',
      special:[
        'Web App',
        'Software',
        'Mobile App',
        'Test'
        ]
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

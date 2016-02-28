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
      tag: 'Web App',
      money: '1000',
      position: '5',
      taken: '2',
      email: 'guan@example.com'
    }, {
      name: 'Android navigation application',
      info: 'These days most people use Google Maps or Apple Maps ' +
            'but are always curious what their navigation app options are.',
      tag: 'Mobile App',
      money: '800',
      position: '2',
      taken: '2',
      email: 'lee@example.com'
    }, {
      name: 'Test IOS game application',
      info: ' Interface and general functionality of the game app ' +
            'should be tested only on a real devices, not just emulators.',
      tag: 'Test',
      money: '200',
      position: '1',
      taken: '0',
      email: 'guan@example.com'
    }, {
      name: 'IOS running record application',
      info: 'Running apps that can track your speed, distance traveled, ' +
            'calories burned and even map your route',
      tag: 'Mobile App',
      money: '600',
      position: '2',
      taken: '1',
      email: 'lee@example.com'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Guan',
      email: 'guan@example.com',
      password: 'guan',
      money: '1000',
      special: 'Web App'
    },{
      provider: 'local',
      name: 'Lee',
      email: 'lee@example.com',
      password: 'lee',
      money: '500',
      special: 'Mobile App'
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

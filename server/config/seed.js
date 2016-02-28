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
      taken: '1',
      email: 'mike@example.com'
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
      money: '500',
      position: '2',
      taken: '1',
      email: 'kim@example.com'
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
      money: '600',
      special: 'Mobile App'
    },{
      provider: 'local',
      name: 'Kim',
      email: 'kim@example.com',
      password: 'kim',
      money: '500',
      special: 'Mobile App'
    },{
      provider: 'local',
      name: 'Mike',
      email: 'mike@example.com',
      password: 'mike',
      money: '500',
      special: 'Mobile App'
    },{
      provider: 'local',
      name: 'Tony',
      email: 'tony@example.com',
      password: 'tony',
      money: '800',
      special: 'Mobile App'
    },{
      provider: 'local',
      name: 'Tom',
      email: 'tom@example.com',
      password: 'tom',
      money: '1000',
      special: 'Web App'
    },{
      provider: 'local',
      name: 'Amanda',
      email: 'amanda@example.com',
      password: 'amanda',
      money: '200',
      special: 'Test'
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

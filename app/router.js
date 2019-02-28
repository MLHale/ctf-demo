/**
 * @Author: Matthew Hale <mlhale>
 * @Date:   2019-02-28T16:42:46-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: router.js
 * @Last modified by:   mlhale
 * @Last modified time: 2019-02-28T16:49:24-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.hostURL
});

Router.map(function() {
});

export default Router;

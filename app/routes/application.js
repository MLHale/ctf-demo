/**
 * @Author: Matthew Hale <mlhale>
 * @Date:   2019-02-28T17:01:02-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: application.js
 * @Last modified by:   mlhale
 * @Last modified time: 2019-02-28T17:02:02-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return $.getJSON("https://github.com/MLHale/ctf-demo/teamdata.json");
  }
});

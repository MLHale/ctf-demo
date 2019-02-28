/**
 * @Author: Matthew Hale <mlhale>
 * @Date:   2019-02-28T16:55:10-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: application.js
 * @Last modified by:   mlhale
 * @Last modified time: 2019-02-28T17:00:43-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Controller from '@ember/controller';

export default Controller.extend({
  data: [
      ['team1', 'team2', 'team3'],
      ['time1', 1000, 400],
      ['time2', 1170, 460],
      ['time3', 660, 1120],
      ['time4', 1030, 540],
    ]
});

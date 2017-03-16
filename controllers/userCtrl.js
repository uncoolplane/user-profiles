var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  },
  {
    name: 'Becky Hall',
    password: '1',
    friends: ['Preston McNeil']
  }
];

module.exports = {
  users : users,
  login : function(req, res) {
    var username = req.body.name;
    var password = req.body.password;

    var user;
    for(var i = 0; i < users.length; i++) {
      if( users[i].name == username
          && users[i].password == password) {
        user = users[i];
        break;
      }
    }

    if(user) {
      console.log('userCtrl [login]', user);
      req.session.currentUser = user;
      res.send({ userFound: true });
      console.log('userCtrl [login/session]', req.session);
    } else {
      res.send({ userFound: false });
    }
  },
  getSessionUser: function(req, res) {
    var user = req.session.currentUser;
    console.log('userCtrl [getSessionUser]', user);

    if(user) {
      res.send({userFound: true, user: user});
    } else {
      res.send({userFound: false});
    }
  }
}
console.log('loaded users...');

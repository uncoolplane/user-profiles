var profiles = [{
        name: 'Preston McNeil',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
        status: 'Everything is bigger in Texas'
    },
    {
        name: 'Ryan Rasmussen',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
        status: 'RR Rules'
    },
    {
        name: 'Terri Ruff',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
        status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
        name: 'Lindsey Mayer',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
        status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
];

module.exports = {
    getProfiles: function(req, res) {
        console.log('profileCtrl [getProfiles]', profiles);
        res.send(profiles);
    },
    getFriendsProfiles: function(req, res) {
        var user = req.session.currentUser;

        if (user) {
            var friends = user.friends;
            var myfriends = [];
            for (var i = 0; i < profiles.length; i++) {
                var profile = profiles[i];
                for (var j = 0; j < friends.length; j++) {
                    var friend = friends[j];
                    if (profile.name == friend) {
                        myfriends.push(profile);
                    }
                }
            }

            res.send({
                currentUser: user,
                friends: myfriends
            });
        } else {
            res.send({
                currentUser: undefined,
                friends: []
            })
        }

    }
}
console.log('loaded profiles...');

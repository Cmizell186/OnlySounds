'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {
        userId:1,
        title: '3005 Beach Pinic Version',
        songUrl: 'https://onlysounds.s3.us-west-1.amazonaws.com/songs/Childish+Gambino+-+3005+(Beach+Picnic+Version).mp3',
        imageUrl: "https://i1.sndcdn.com/artworks-000093054923-g63qxm-t500x500.jpg"
      },
      {
        userId:7,
        title: 'Juice',
        songUrl: 'https://onlysounds.s3.us-west-1.amazonaws.com/songs/Chance+The+Rapper+-+Juice.mp3',
        imageUrl:'https://upload.wikimedia.org/wikipedia/en/5/5b/Chance_the_rapper_acid_rap.jpg'
      },
      {
        userId:5,
        title: 'Drowning',
        songUrl: 'https://onlysounds.s3.us-west-1.amazonaws.com/songs/A+Boogie+Wit+Da+Hoodie+-+Drowning+(feat.+Kodak+Black)+%5BOfficial+Audio%5D.mp3',
        imageUrl:'https://i1.sndcdn.com/artworks-01Mx398PKTW7JCdf-cmObYA-t500x500.jpg'
      },
      {
        userId:5,
        title: 'Tunnel Vision',
        songUrl: 'https://onlysounds.s3.us-west-1.amazonaws.com/songs/Tunnel+Vision.mp3',
        imageUrl:'https://m.media-amazon.com/images/I/81rL0yCjteL._SS500_.jpg'
      },
      {
        userId:1,
        title: 'Praise da lord',
        songUrl: 'https://onlysounds.s3.us-west-1.amazonaws.com/songs/A%24AP+Rocky+-+Praise+The+Lord+(Da+Shine)+(Official+Audio)+ft.+Skepta.mp3',
        imageUrl:'https://upload.wikimedia.org/wikipedia/en/b/b3/Praise_The_Lord_Da_Shine.jpeg'
      },
      {
        userId:1,
        title: 'Johnny Ps Caddy',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Benny+The+Butcher+%26+J.+Cole+-+Johnny+P's+Caddy+(AUDIO).mp3",
        imageUrl:'https://images.genius.com/2ccfbdbc0fc04285f41c12383ffa6a4d.1000x1000x1.png'
      },
      {
        userId:7,
        title: 'Chain Smoker',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Chance+The+Rapper+-+Chain+Smoker.mp3",
        imageUrl:'https://upload.wikimedia.org/wikipedia/en/5/5b/Chance_the_rapper_acid_rap.jpg'
      },
      {
        userId:4,
        title: 'Heartbeat',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Childish+Gambino-Heartbeat(Lyrics).mp3",
        imageUrl:'https://static.wikia.nocookie.net/donald-glover/images/a/a2/Maxresdefault_%283%29.jpg/revision/latest?cb=20170227234908'
      },
      {
        userId:4,
        title: 'Walking',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Denzel+Curry+-+Walkin+(Lyrics).mp3",
        imageUrl:'https://static.stereogum.com/uploads/2022/01/Denzel-Curry-Walkin-1643035668.jpeg'
      },
      {
        userId:4,
        title: 'East',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Earl+Sweatshirt+-+EAST+(Official+Video).mp3",
        imageUrl:'https://media.pitchfork.com/photos/5dbc57e8ac499900082d19b0/4:3/w_1280,h_960,c_limit/Earl%20Sweatshirt.png'
      },
      {
        userId:3,
        title: 'Famous',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Famous.mp3",
        imageUrl:'https://m.media-amazon.com/images/M/MV5BZDY4NDQyNGItMzZmZi00NGM4LThjNjYtYjY0YzY0N2MwMzYwXkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_.jpg'
      },
      {
        userId:6,
        title: 'As It Was',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Harry+Styles+-+As+It+Was+(Lyrics).mp3",
        imageUrl:'https://images.genius.com/d98059a0f2afd10b04b912355c0e8ceb.1000x1000x1.png'
      },
      {
        userId:6,
        title: 'Falling',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Harry+Styles+-+Falling+(Official+Audio).mp3",
        imageUrl:'https://pbs.twimg.com/media/EIi0CiOWwAI_9l0?format=jpg&name=900x900'
      },
      {
        userId:6,
        title: 'Sweet Creature',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Harry+Styles+-+Sweet+Creature+(Audio).mp3",
        imageUrl:'https://m.media-amazon.com/images/I/51+MrUiDDSL.jpg'
      },
      {
        userId:3,
        title: 'Bound 2',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Kanye+West+-+Bound+2+%5BLyrics%5D.mp3",
        imageUrl:'https://m.media-amazon.com/images/I/712e5dKhjpL._SS500_.jpg'
      },
      {
        userId:5,
        title: 'ZEZE',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Kodak+Black+-+ZEZE+(feat.+Travis+Scott+%26+Offset)+%5BOfficial+Audio%5D.mp3",
        imageUrl:'https://upload.wikimedia.org/wikipedia/en/2/23/Zeze_%28official_single_cover%29.png'
      },
      {
        userId:8,
        title: 'Fireproof',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/One+Direction+-+Fireproof+(Audio).mp3",
        imageUrl:'https://i1.sndcdn.com/artworks-000092821307-wvh05a-t500x500.jpg'
      },
      {
        userId:8,
        title: 'Night Changes',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/One+Direction+-+Night+Changes+(Lyrics).mp3",
        imageUrl:'https://upload.wikimedia.org/wikipedia/en/d/d1/One_Direction_-_Night_Changes_Single_Cover.png'
      },
      {
        userId:8,
        title: 'You & I',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/One+Direction+-+You+%26+I+(Audio).mp3",
        imageUrl:'https://upload.wikimedia.org/wikipedia/en/3/3b/One_Direction_-_You_And_I_%28Official%29.png'
      },
      {
        userId:4,
        title: 'Tears',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/Post+Malone+-+TEAR%24.mp3",
        imageUrl:'https://i1.sndcdn.com/artworks-000109778981-r85g0v-t500x500.jpg'
      },
      {
        userId:2,
        title: 'Selfish ft XXXTentacion',
        songUrl: "https://onlysounds.s3.us-west-1.amazonaws.com/songs/XXXTENTACION+%26+Kanye+West+-+Selfish.mp3",
        imageUrl:'https://i1.sndcdn.com/artworks-8JswDwyscYjTaf8I-A7xPeA-t500x500.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};

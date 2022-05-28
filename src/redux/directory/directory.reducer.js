const INITAIL_STATE = {
    sections : [
        {
          title: 'CONTrollers',
          imageUrl: 'https://images.unsplash.com/photo-1604846887565-640d2f52d564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHw%3D&w=1000&q=80',
          id: 1,
          linkUrl: 'shop/Controllers'
        },
        {
          title: 'AUDIO',
          imageUrl: 'https://www.groovypost.com/wp-content/uploads/2018/05/home-studio-computer-music-sound-audio-settings-pc-featured.jpg',
          id: 2,
          linkUrl: 'shop/Audio'
        },
        {
          title: 'hardware',
          imageUrl: 'https://www.itreseller.ch/imgserver/artikel/Produkte/2018/mid/Lenovo_PCs_180713_110757.jpg',
          id: 3,
          linkUrl: 'shop/Hardware'
        },
        {
          title: 'games',
          imageUrl: 'https://cdn.wallpapersafari.com/84/70/yphEzQ.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/Games'
        },
        {
          title: 'Accessories',
          imageUrl: 'https://static.techspot.com/images2/news/bigimage/2017/01/2017-01-30-image-18.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/Accessories'
        }
      ]
};

const directoryReducer  = (state = INITAIL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;
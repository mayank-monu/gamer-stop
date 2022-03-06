import React from "react";
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'CONTrollers',
                  imageUrl: 'https://images.unsplash.com/photo-1604846887565-640d2f52d564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHw%3D&w=1000&q=80',
                  id: 1,
                  linkUrl: 'controllers'
                },
                {
                  title: 'AUDIO',
                  imageUrl: 'https://www.groovypost.com/wp-content/uploads/2018/05/home-studio-computer-music-sound-audio-settings-pc-featured.jpg',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'hardware',
                  imageUrl: 'https://www.itreseller.ch/imgserver/artikel/Produkte/2018/mid/Lenovo_PCs_180713_110757.jpg',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'games',
                  imageUrl: 'https://cdn.wallpapersafari.com/84/70/yphEzQ.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'Accessories',
                  imageUrl: 'https://static.techspot.com/images2/news/bigimage/2017/01/2017-01-30-image-18.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
              
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key = {id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
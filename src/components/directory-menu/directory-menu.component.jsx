import React from 'react';
import MenuItem from "../menu-item/menu-item.component";

import './directory-menu.style..scss';

class DirectoryMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sections: [
                {
                    id: 1,
                    title: "Hats",
                    imgURL: "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    urlLink: '/hats'
                },
                {
                    id: 2,
                    title: "Jackets",
                    imgURL: "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    urlLink: ''
                },
                {
                    id: 3,
                    title: "Pants",
                    imgURL: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    urlLink: ''
                },
                {
                    id: 4,
                    title: "Mens",
                    imgURL: "https://images.pexels.com/photos/3595231/pexels-photo-3595231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    urlLink: '',
                    size: "large"
                },
                {
                    id: 5,
                    title: "Womens",
                    imgURL: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    urlLink: '',
                    size: "large"
                }
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(
                        ({id, title, imgURL, size, urlLink}) => (
                            <MenuItem key={id} title={title} imgURL={imgURL} size={size} urlLink={urlLink} />
                        )
                    )
                }
            </div>
        )
    }
}

export default DirectoryMenu;
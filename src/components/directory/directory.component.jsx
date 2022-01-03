import React from "react";

import './directory.styles.scss';

import MenuItem from "../menu-items/menu-item.component";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'Shoes',
                    imageUrl: ''
                },
                {
                    id: 2,
                    title: 'Jackets',
                    imageUrl: ''
                },
                {
                    id: 3,
                    title: 'Sneakers',
                    imageUrl: ''
                },
                {
                    id: 4,
                    title: 'Womens',
                    size: 'large',
                    imageUrl: ''
                },
                {
                    id: 5,
                    title: 'Mens',
                    size: 'large',
                    imageUrl: ''
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory">
                {this.state.sections.map( ({ id, title, imageUrl, size }) => 
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} /> 
                )}
            </div>
        );
    }
}

export default Directory;
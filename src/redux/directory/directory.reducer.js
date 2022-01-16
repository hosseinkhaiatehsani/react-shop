const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl: 'hats'
        },
        {
            id: 2,
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl: 'jackets'
        },
        {
            id: 3,
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkUrl: 'sneakers'
        },
        {
            id: 4,
            title: 'Womens',
            size: 'large',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            linkUrl: 'womens'
        },
        {
            id: 5,
            title: 'Mens',
            size: 'large',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            linkUrl: 'mens'
        },
    ]
}

const DirectoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default DirectoryReducer;
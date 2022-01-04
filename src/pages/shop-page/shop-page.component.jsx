import React from "react";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: []
        }
    }

    render () {
        return (
            <div className="shop-page">
                Shop Page
            </div>
        )
    }
}

export default ShopPage;
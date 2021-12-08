// frontend/src/components/app.js

import React, {Component} from 'react'
import {connect} from "react-redux";

import CardPage from "./cardPage"

class App extends Component {

    render() {
        const {pageType} = this.props;
        console.log(pageType)
        return (
            <div>
                {pageType === "card" && <CardPage/>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {page} = state;
    const {type} = page;
    return {
        pageType: type
    };
}

export default connect(mapStateToProps)(App);
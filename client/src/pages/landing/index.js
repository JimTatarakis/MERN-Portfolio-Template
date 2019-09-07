import React from 'react';
import Media from 'react-media';
import SmallScreen from '../../components/smallScreenLanding'
import LargeScreen from '../../components/largeScreenLanding'

export default class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Media query={{ maxWidth: 599 }}>
                    {matches =>
                        matches ? (
                            <SmallScreen />
                        ) : (
                            <LargeScreen />
                            )
                    }
                </Media>
            </React.Fragment>
        );
    }
}
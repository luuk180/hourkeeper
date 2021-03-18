import React from 'react'
import NavigationBar from './navbar';

const Home = () => (
    <div>
        <NavigationBar loggedin="false" />
        <p>
            This is the home page!
        </p>
    </div>
)

export default Home;
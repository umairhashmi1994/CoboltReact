import React, { Component } from 'react'
import Footer from '../../Common/Footer'
import Header from '../../Common/Header'
import Banner from './Banner'
import SolutionSectionOne from './SolutionSectionOne'
import Line from '../Line'

export default class Solution extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <SolutionSectionOne/>
                
            </div>
        )
    }
}

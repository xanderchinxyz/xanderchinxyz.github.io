import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { update } from 'react-spring';

import DER from '../DER.pdf'

const clickable = {
    cursor: 'pointer',
}

export default function Projects() {
    const navigate = useNavigate()
    const [tabStyle, updateTabStyle] = useState(["bold", "normal", "normal"])

    return(
        <div id="projects">
            <div id="title-container">
                <h1 id="title">Projects</h1>
            </div>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <ul>
                <li 
                    style={{...clickable, fontWeight: tabStyle[0]}}
                    onClick={() => {
                        navigate('/projects-featured')
                        updateTabStyle(["bold", "normal", "normal"])
                    }}
                >Featured</li>
                <li 
                    style={{...clickable, fontWeight: tabStyle[1]}}
                    onClick={() => {
                        navigate('/projects-hackcomps')
                        updateTabStyle(["normal", "bold", "normal"])
                    }}
                >Hackathons and Competitions</li>
                <li 
                    style={{...clickable, fontWeight: tabStyle[2]}}
                    onClick={() => {
                        navigate('/projects-others')
                        updateTabStyle(["normal", "normal", "bold"])
                    }}
                >Other Projects</li>
                <li 
                    style={{...clickable, fontWeight: "normal"}}
                ><a href={DER} target="_blank">Portfolio Writeup (PDF)</a></li>
            </ul>
        </div>
    )
}
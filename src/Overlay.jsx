import './App.css';
import { a } from '@react-spring/web'
import { Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'

import Home from './MainPages/Home.jsx'
import About from './MainPages/About.jsx'
import Experience from './MainPages/Experience.jsx'
import Projects from './MainPages/Projects.jsx'
import Resume from './MainPages/Resume.jsx'

import Featured from './ProjectCategories/Featured.jsx'
import Others from './ProjectCategories/Others.jsx'
import Hackcomps from './ProjectCategories/Hackcomps.jsx'

import PingPongLEDWall from './ProjectPages/PingPongLEDWall.jsx'

import {ReactComponent as Logo} from './Logos/logo2.svg';



function Navbar() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [small, setSmall] = useState(false)

    const navigateTo = (link) => {
        navigate(link)
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(!open);
    };
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 900) {
                setSmall(true)
            } else {
                setSmall(false) 
                setOpen(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize);
    }, []);
    return(
        <>
        <div id='navbar'>
           {/* <div id="home" onClick={() => navigate('/')}>HOME</div> */}
           <Logo style={{width: "55px", padding: "0.5em", cursor: "pointer"}} onClick={() => navigate('/')}/>
           <div id="tabs">
            {small ? (
                <div id="dropdown" onClick={handleOpen}>Menu</div>
            ) : (
                <ul>
                    <li onClick={() => navigateTo('/about')}>About Me</li>
                    <li onClick={() => navigateTo('/experience')}>Experience</li>
                    <li onClick={() => navigateTo('/projects-featured')}>Projects</li>
                    <li onClick={() => navigateTo('/resume')}>Resume</li>
                </ul>
            )}
           </div>
           <div id="contacts">
                <ul>
                    <li><AiFillLinkedin size={30} onClick={() => window.location.href = 'https://www.linkedin.com/in/xanderchinxyz/'}/></li>
                    <li><AiFillYoutube size={30} onClick={() => window.location.href = 'https://www.youtube.com/@xanderchinxyz'}/></li>
                    <li><AiFillGithub size={30} onClick={() => window.location.href = 'https://github.com/xanderchinxyz'}/></li>
                </ul>
           </div>
        </div>
        {open ? (
            <ul id="menu">
                <li onClick={() => navigateTo('/about')}>About Me</li>
                <li onClick={() => navigateTo('/experience')}>Experience</li>
                <li onClick={() => navigateTo('/projects-featured')}>Projects</li>
                <li onClick={() => navigateTo('/resume')}>Resume</li>
            </ul>
        ) : null}
        </>
    )
}

function Overlay({fill}) {
    return (
        <a.div id="overlay-main" style={fill}>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects-featured" element={<><Projects/><Featured/></>}/>
            <Route path="/projects-hackcomps" element={<><Projects/><Hackcomps/></>}/>
            <Route path="/projects-others" element={<><Projects/><Others/></>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/pingpong" element={<PingPongLEDWall/>}/>
        </Routes>
        </a.div>
    )
}

export default Overlay;
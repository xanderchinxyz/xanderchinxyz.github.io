import { useEffect } from 'react';
import Work from './Experience'

export default function Home() {
    //on load:
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <div id="front-page">
            <div id="front-page-container" style={{pointerEvents: 'none'}}>
                <h1>Xander Chin</h1>
                <p>Innovator + Problem Solver</p>
                <p>Artist + Craftsman</p>
                <p>Hardware, Software & Design Enthusiast</p>
                <p>Engineer in the Making</p>
                {/* <p>I am an engineering student at Western University.</p> */}
                {/* <p>I love building things and sharing them on the internet!</p> */}
            </div>
        </div>
    )
}
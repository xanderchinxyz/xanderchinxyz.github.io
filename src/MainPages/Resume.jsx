import { useEffect } from 'react';

export default function Resume() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
        <div id="resume-container">
            <div id="title-container">
                <h1 id="title">Resume</h1>
            </div>
            <iframe src="https://drive.google.com/file/d/1HZMFyga9XTO07HIcuUQwb9gtJ_sJcJ3f/preview"></iframe>
        </div>
        </>
    )
}
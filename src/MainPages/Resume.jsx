import { useEffect } from 'react';

export default function Resume() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
        <div id="resume-container">
            <div id="title-container">
                <h1 id="title">My Master Resume</h1>
            </div>
            <iframe src="https://drive.google.com/file/d/1ePdv_ZxaeTg93yCuNdoc6c159zEiWi5Z/preview"></iframe>
        </div>
        </>
    )
}
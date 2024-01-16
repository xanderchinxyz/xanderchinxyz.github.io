import './Hackcomps.css';

const clickable = {
    cursor: 'pointer',
    textDecoration: 'underline'
}

const posts = [
    {   
        title: 'INFU (I\'ll Never Forget U) - 2nd Place & Best Use of Google Cloud', 
        desc:
            <p>
                Worked with a team of 4 to develop a webapp and wearable that helps a user remember people's names and the
                conversations that they've had with them using facial recognition, Google Cloud Speech to Text API, hardware, 
                summaraization with the OpenAI API, and databases. My most complex hackathon project so far!
            </p>,
        link: 'https://devpost.com/software/infu'
    },
    {   
        title: 'Visionary - Most Innovative Eye Tracking Application', 
        desc:
            <p>
                Worked with a team of 4 to develop a webapp that uses Adhawk eye tracking glasses to reduce myopia by ensuring
                a user looks 20 feet away for 20 seconds after 20 minutes of staring at their screen and developing an eye movement
                game. Used Python, Flask, React, React Three Fiber, and Firebase to log eye data to gauge eye health.
            </p>,
        link: 'https://devpost.com/software/visionary-bzvo5p'
    },
    {   
        title: 'Predicting Hotel Bookings - 1st Place', 
        desc:
            <p>
                Worked with a team of 4 to develop a machine learning classification model that predicts hotel cancellations 
                and offers business recommendations to help lower cancellation rates. Used Python, Pandas, NumPy, Seaborn, 
                Matplotlib, and Scikit-learn.
            </p>,
        link: 'https://devpost.com/software/the-best-solution'
    },
    {   
        title: 'ClimateSnap - Best Climate Hack', 
        desc:   
            <p>
                Worked in a team of 4 to develop a webapp to raise awareness and education on climate change. 
                It uses ones camera to detect different objects and relays information on how that object affects 
                climate change, solutions to reducing its carbon footprint, and some statistics on its carbon emissions.
            </p>,
        link: 'https://devpost.com/software/climatesnap'
    },
    {   
        title: 'HoverTouch - Placed 4th out of 72 teams', 
        desc:   
            <p>
                As a team of 4, we developed a program to write notes on a computer screen by tracing words in the air in front 
                of ones a camera. These written words are then converted into typed text. This was my first ever hackathon!
            </p>,
        link: "https://devpost.com/software/hovertouch"
    },
    {   
        title: 'FocusBand', 
        desc:
            <p>
                In a team of 2, we created a webapp research tool that uses a MUSE headband to log and track ones focus throughout a 
                15 second interval. I was responsible for the prototype which included hacking and gathering the EEG data
                from the MUSE and creating a full-stack application consisting of Python, Flask and HTML.
            </p>,
        link: 'https://devpost.com/software/focusbracelet'
    },
]

function HackcompContainer({title, desc, link}) {
    return(
        <div id="hackcomp-container">
            <h1 
                style={clickable}
                onClick={() => window.location.href = link}
            >{title}</h1>
            {desc}
        </div>
    )
}

export default function Featured() {
    return(
        <>
            {posts.map((post) =>
                <HackcompContainer title={post.title} desc={post.desc} link={post.link}/>
            )}
            <br />
        </>
    )
}
import './Hackcomps.css';

const clickable = {
    cursor: 'pointer',
    textDecoration: 'underline'
}

const posts = [
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
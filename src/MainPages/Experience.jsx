import { a } from '@react-spring/web'

import {useNavigate} from 'react-router-dom';
import Fast from '../Pictures/fast.png'
import CAO from '../Pictures/cao.png'
import UHN from '../Pictures/uhn.png'

const clickable = {
    cursor: 'pointer',
    textDecoration: 'underline'
}

const posts = [
    {
        imgSrc: CAO,
        title: 'Condominium Authority of Ontario | Data Analyst Intern',
        desc:
            <p>
                Performed data cleaning and extraction of survey responses using Python and Pandas and 
                wrote Python scripts to classify survey responses by modifying LLM text classifiers using TensorFlow.
                Also created interactive maps of all Condominium Corporations in Ontario using Python, Pandas, Matplotlib and Excel.
            </p>
    },
    {
        imgSrc: Fast,
        title: 'FAST Lab | Undergraduate Summer Research Internship',
        projectTitle: 'Optimization of Solar Panel Placement on Arbitrary Buildings',
        desc: 
            <p>
                Developed an optimization algorithm using Python and Blender to maximize the tiling of building-integrated 
                photovoltaics (BIPV) on the external surfaces of arbitrarily shaped buildings or objects. 
                Supports are then generated and modeled in Blender. This involves the use of complex packing algorithms, 
                computational geometry, and Python. Wrote up results into a first-author scientific paper currently under review with Nature Energy.
            </p>
    },      
    {
        imgSrc: Fast,
        title: 'FAST Lab | Undergraduate Researcher',
        desc: 
            <p>
                Currently designing a wireless protocol and user interface for an open-source data acquisition and automation device.
                Previously researched and developed of a new version of the Recyclebot extruder that converts plastic 
                pellets into 3D printer filament.
            </p>
    },
    {
        imgSrc: UHN,
        title: 'University Health Network | Research Assistant',
        projectTitle: 'Voice Control Syringe Pump',
        desc: 
            <p>
                Designed and built an open-source wireless voice-controlled 3D-printed infusion syringe pump 
                for developing countries in collaboration with an anesthesiologist. I designed the hardware, 
                coded the microprocessor controller, and developed the mobile app with React Native.

            </p>,
        style: clickable,
        onClick: () => window.location.href = 'https://youtu.be/I03g0Dz7DDU',
    },
]

function ExperienceContainer({imgSrc, title, projectTitle, desc, style, onClick}) {
    return(
        <div id="work-row">
            <div id="img-container">
                <img src={imgSrc} alt=""/>
            </div>
            <div style={{width: "100%"}}>
                <h2>{title}</h2>
                <a.hr style={{backgroundColor: "currentColor"}}/>
                <h3 style={style} onClick={onClick}>{projectTitle}</h3>
                {desc}
            </div>
        </div>
    )
}

export default function Experience() {
    const navigate = useNavigate()
    return (
        <div id="work">
            <div id="title-container">
                <h1 id="title">Experience</h1>
            </div>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            {posts.map((post) =>
                <ExperienceContainer 
                    imgSrc={post.imgSrc} 
                    projectTitle={post.projectTitle} 
                    title={post.title} 
                    desc={post.desc}
                    style={post.style}
                    onClick={post.onClick}
                />
            )}
            <br /> <br />
        </div>
    )
  }
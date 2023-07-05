import './Featured.css';
import DER from '../DER.pdf'

const clickable = {
    cursor: 'pointer',
    textDecoration: 'underline'
}

const posts = [
    {   
        title: 'Ping Pong LED Wall (Part 2)', 
        desc:   
            <p>
                Optimized my custom protocol by transitioning from register level code to assembly which can now display the camera output from a computer 
                and allow screen sharing and drawing. This is also facilitated through several Processing sketches and UART communication at 2
                million bits per second. I also stuck ping pong balls on top as diffusers. 
            </p>,
        imgSrc: "https://img.youtube.com/vi/1C1XGq-2Q_g/maxresdefault.jpg",
        pageLink: DER + '#page=275',
        videoLink: 'https://youtu.be/1C1XGq-2Q_g'
    },
    {   
        title: 'Ping Pong LED Wall (Part 1)', 
        desc:   
            <p>
                Built a lightweight LED Wall with 24 by 32 resolution. I designed the PCBs to be modular, lightweight and cheap
                as possible. I also created a custom register level parallel bit-banging protocol for the nescessary speed to run it
                with an ATmega328P MCU without using a library. Made use of the Flash storage to display pictures, GIFs and cool patterns. 
            </p>,
        imgSrc: "https://img.youtube.com/vi/KatHkq3PDNg/maxresdefault.jpg",
        pageLink: DER + '#page=231',
        videoLink: 'https://youtu.be/KatHkq3PDNg'
    },
    {   
        title: 'EEG and EMG Headset', 
        desc: 
            <p>
                Built a 2 channel electroencephalography (EEG) and electromyography (EMG) reader to "mind control" devices.
                Designed a PCB to amplify cognitive signals and attenuate noise, soldered SMT components, and wrote a 
                Processing sketch to further filter the signal with an FFT algorithm and display the output.
            </p>,
        imgSrc: "https://img.youtube.com/vi/Dr2lxEIa05U/maxresdefault.jpg",
        pageLink: DER + '#page=199',
        videoLink: 'https://youtu.be/Dr2lxEIa05U'
    },
    {   
        title: '4-bit Breadboard Computer (Part 2)', 
        desc: 
            <p>
                The final custom 4-bit computer build from 1980's era TTL Integrated Circuits, coded in specific machine language. It executes 16 
                lines of code, capable of loading, adding, subtracting, storing, and reading memory, as well as
                a go-to command and conditional if zero commands.
            </p>,
        imgSrc: "https://img.youtube.com/vi/fg3poC2dT2o/maxresdefault.jpg",
        pageLink: DER + '#page=175',
        videoLink: 'https://youtu.be/fg3poC2dT2o'
    },
    {   
        title: '4-bit Breadboard Computer (Part 1)', 
        desc: 
            <p>
                The beginning of a 4-bit breadboard computer. The first part goes over the custom "Chumpanese" code to
                program the computer, the adjustable clock circuit, and the counter circuit to keep track and execute the 
                current instruction.
            </p>,
        imgSrc: "https://img.youtube.com/vi/b5qDwCN9Q2c/maxresdefault.jpg",
        pageLink: DER + '#page=164',
        videoLink: 'https://youtu.be/b5qDwCN9Q2c',
    },
    {   
        title: 'IR Nixie Tube Clock', 
        desc: 
            <p>
                A 4-digit nixie tube clock with alarm, timer, date, and temperature features controlled with an infrared remote. Programmed in C++
                on a standalone ATmega328 IC. Designed a custom PCB in EAGLE and laser-cut acrylic in Adobe Illustrator.
            </p>,
        imgSrc: "https://img.youtube.com/vi/nEOyhyJHx2M/maxresdefault.jpg",
        pageLink: DER + '#page=132',
        videoLink: 'https://youtu.be/nEOyhyJHx2M',
    },
    {   
        title: 'LiDAR Measurement and Mapping Device', 
        desc: 
            <p>
                 A device that measures distance and models the surrounding room using LiDAR, servo motors, and an ESP32 programmed in C++.
                 I also coded a Processing program in Java to display a 3D point cloud, perform measurements, and control the ESP32 with 
                 Bluetooth.
            </p>,
        imgSrc: "https://img.youtube.com/vi/frzUmAhQT3E/maxresdefault.jpg",
        pageLink: DER + '#page=90',
        videoLink: 'https://youtu.be/frzUmAhQT3E'
    },
    {   
        title: 'Traffic Light Driven with Integrated Circuits', 
        desc: 
            <p>
                Built a traffic light with a pedestrian countdown system driven by various integrated circuits, resistors, and capacitors. 
                A breadboard prototype was first built, then soldered to a board and finally encased in a custom 3D printed enclosure.
            </p>,
        imgSrc: 'https://i3.ytimg.com/vi/O-rvWUiZsPw/maxresdefault.jpg',
        pageLink: DER + '#page=33',
        videoLink: 'https://youtu.be/O-rvWUiZsPw'
    },
];

function FeaturedContainer({title, desc, imgSrc, pageLink, videoLink}) {
    return(
        <div id="project-container">
            <div>
                <h2 style={clickable} onClick={() => window.location.href = pageLink}>{title}</h2>
                <div id="text-container">
                    {desc}
                </div>
            </div>
            <img src={imgSrc} alt="" onClick={() => window.location.href = videoLink}/>
        </div>
    )
}

export default function Featured() {
    return(
        <>
        {posts.map((post) =>
            <FeaturedContainer title={post.title} desc={post.desc} imgSrc={post.imgSrc} pageLink={post.pageLink} videoLink={post.videoLink}/>
        )}
        <br />
        </>
    )
}
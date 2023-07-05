import './Others.css';

const posts = [
    {   
        imgSrc: 'https://img.youtube.com/vi/3-Q4QqpksrE/maxresdefault.jpg',
        title: 'Joystick Positioning Visualiser', 
        desc:   
            <p>
                Used an ATtiny84 programmed in assembly and an 8 by 8 matrix to display the position
                of a joystick.
            </p>,
        videoLink: 'https://youtu.be/3-Q4QqpksrE'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/nX0koJXdlao/maxresdefault.jpg',
        title: 'Digital Combination Lock', 
        desc:   
            <p>
                Built a circuit that emulates a combination lock using a rotary encoder and an Arduino NANO's pin change 
                interrupts. The NANO is programmed with register level code.
            </p>,
        videoLink: 'https://youtu.be/nX0koJXdlao'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/GJCeeS7HzAk/maxresdefault.jpg',
        title: 'Resistor Capacitor Filtering', 
        desc:   
            <p>
                Demonstrated how resistor and capacitor filters can turn a square wave into a sine wave using an oscilloscope.
            </p>,
        videoLink: 'https://youtu.be/GJCeeS7HzAk'
    },

    {   
        imgSrc: 'https://img.youtube.com/vi/K975ZXLuv1w/maxresdefault.jpg',
        title: 'Electronic Sunflower', 
        desc:  
            <p>
                Used a servo motor controlled with an Arduino UNO programmed with register level code 
                to control it's motion using light.
            </p>,
        videoLink: 'https://youtu.be/K975ZXLuv1w'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/SkQtCr-GAQM/maxresdefault.jpg',
        title: '555 Timer Frequency Calculator Part 2', 
        desc:   
            <p>
                The 555 timer frequency calculator is now on a perma protoboard! This part invovles the journey of 
                transitioning from a breadboard to a soldered prototype and the required planning and dexterity needed.
            </p>,
        videoLink: 'https://youtu.be/SkQtCr-GAQM'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/4NGWaetlcpA/maxresdefault.jpg',
        title: '555 Timer Frequency Calculator Part 1', 
        desc:   
            <p>
                This device calculates the square wave frequency outputted by certain resistor capacitor pairs when
                connected to a 555 timer integrated circuit. The first part includes progrmaming a standalone ATmega328P MCU 
                and a breadboard prototype.
            </p>,
        videoLink: 'https://youtu.be/4NGWaetlcpA'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/41g1aDzq_po/maxresdefault.jpg',
        title: 'Exploring Infrared Communication', 
        desc:   
            <p>
                Demonstrated and explained the use infrared signals to control a bargraph using only a remote, 
                Arduino UNO, and a IR receiver. No wiring or breadboard required!
            </p>,
        videoLink: 'https://youtu.be/41g1aDzq_po'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/IRZPm464c-M/maxresdefault.jpg',
        title: 'Exploring UART Communication', 
        desc:   
            <p>
                Demonstrated wired UART communication between an Arduino UNO and an Arduino NANO by building a calculator.
                One device receives the equation and other calculates the answer where its displayed on an LCD screen.
            </p>,
        videoLink: 'https://youtu.be/IRZPm464c-M'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/4KbFu0teXwE/maxresdefault.jpg',
        title: 'Driving Displays with Persistence of Vision', 
        desc:   
            <p>
                Demonstrated the persistence of vision effect with a dual alphanumeric display and two 595 shift registers. 
                I also made a fun game out of it!
            </p>,
        videoLink: 'https://youtu.be/4KbFu0teXwE'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/fSRU5WQWoZU/hqdefault.jpg',
        title: 'Traffic Light Driven with Arduino', 
        desc:   
            <p>
                Built a traffic light system driven by an Arduino using the Schaffer traffic light PCB. No wiring or breadboard
                required!
            </p>,
        videoLink: 'https://youtu.be/fSRU5WQWoZU'
    },
    {   
        imgSrc: 'https://i3.ytimg.com/vi/r2jyUD1W5HM/maxresdefault.jpg',
        title: 'Counting Circuit with Integrated Circuits Part 2', 
        desc:   
            <p>
                The second part of the counting circuit introduces various integrated circuits that ultimately form a 
                circuit that can count up or down on one or two 7-segement displays.
            </p>,
        videoLink: 'https://youtu.be/r2jyUD1W5HM'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/Wj4ZiwTUSnk/maxresdefault.jpg',
        title: 'Counting Circuit with Integrated Circuits Part 1', 
        desc:   
            <p>
                The first part of the counting circuit introduces the oscillator used to count 
                which is formed from different logic gates chips.
            </p>,
        videoLink: 'https://youtu.be/Wj4ZiwTUSnk'
    },
    {   
        imgSrc: 'https://i3.ytimg.com/vi/o5JJ0ilo2Eo/maxresdefault.jpg',
        title: 'Properties of Transistors', 
        desc:   
            <p>
                Demonstrated how transistors work with an oscillating circuit controlled by resistor and capacitor timing.
            </p>,
        videoLink: 'https://youtu.be/o5JJ0ilo2Eo'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/Y5R257CdEeA/maxresdefault.jpg',
        title: 'Properties of Capacitors', 
        desc:   
            <p>
                Demonstrated how capacitors work with a circuit that charges a capacitor to light up bi-color and normal LEDs.
            </p>,
        videoLink: 'https://youtu.be/Y5R257CdEeA'
    },
    {   
        imgSrc: 'https://img.youtube.com/vi/9rcGfo8x2Zw/maxresdefault.jpg',
        title: 'Voltage Division', 
        desc:   
            <p>
                Demonstrated the basics of voltage division and Kirchoff's Voltage Law with a circuit that controls a bi-color LED
                with a potentiometer.
            </p>,
        videoLink: 'https://youtu.be/9rcGfo8x2Zw'
    },
]

function OthersContainer({imgSrc, title, desc, videoLink}) {
    return(
        <div id="project-container">
            <img src={imgSrc} alt="" onClick={() => window.location.href = videoLink}/>
            <div>
                <h2>{title}</h2>
                <div>{desc}</div>
            </div>
        </div>
    )
}

export default function Others() {
    return(
        <div style={{display: "grid", placeItems: "center"}}>
            <div id="others">
                {posts.map((post) =>
                    <OthersContainer imgSrc={post.imgSrc} title={post.title} desc={post.desc} videoLink={post.videoLink}/>
                )}
            </div>
        </div>
    )
}
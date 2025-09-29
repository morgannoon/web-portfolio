import "../../styles/steel.css";

export default function steel2() {
    return (
        <div className={`relative min-h-screen flex`}>
            <div className="steel2">
                <h1 className="orange">
                    Persona
                </h1>
                <h3 className="purple">Meet Taylor Stormes</h3>
                <text className="row">
                    <strong>Persona Characterized:</strong> Dedicated concert-goers value quality
                    over quantity. They want to feel more connected to the artists. Being tech-savvy,
                    she wants a seamless and fair ticket-buying process.
                </text>
                <text>
                    <strong>Age:</strong>26
                </text>
                <text>
                    <strong>Occupation:</strong>Software Developer
                </text>
                <text>
                    <strong>Gear:</strong>iPhone
                </text>
                <text>
                    <strong>Quote:</strong>“I don’t want to miss out on the experience because of
                    bots or crashes, it should be fair to all.”
                </text>
                <text>
                    <strong>Customer Profile (desires & behaviors):</strong>tech savvy, impatient when it comes to wait times
                </text>
                <h1 className="orange">
                    Wireframes
                </h1>
                <div className="figma-wrapper" style={{ width: '100%', height: '600px', border: '1px solid #ccc' }}>
                    <iframe
                        style={{ border: 'none', width: '100%', height: '100%' }}
                        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/EAz4xa0afKuplLw59uzLGc/INFSCI-1420-Group-8?node-id=0-1&p=t:PAHUNIMBsh7p8ngp-0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="relfect">
                    <div className="header-wrapper">
                        <h1 className="orange">
                            Reflection
                        </h1>
                        <text>
                            Building a Unity game from scratch was both challenging and rewarding.
                            I especially enjoyed designing the environment, fine-tuning the camera work, and bringing the game
                            to life through audio and editing.
                            These creative aspects allowed me to fully immerse myself in shaping the player’s experience.
                            <br />
                            However, working on the controls and physics proved to be more difficult,
                            requiring extra problem-solving and troubleshooting. In the end, the process gave me a deeper
                            appreciation for the balance between technical implementation and creative design in game development.
                        </text>
                    </div>
                    <h3 className="purple">Team Credit</h3>
                    <text>Luke Cusato</text>
                    <text>Max Lasky</text>
                    <text>Alinea Yue</text>

                </div>
            </div>
        </div>
    )
}
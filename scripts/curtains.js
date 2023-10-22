import React from 'react';
class Curtains extends React.Component {
    constructor(props) {
        super(props);
        this.startAnimRefs = React.createRef();
        this.startAnimRefs.current = []
        this.endAnimRefs = React.createRef();
        this.endAnimRefs.current = []
        this.populateStartAnims = (elem) => {
            if (elem && !this.startAnimRefs.current.includes(elem)) {
                this.startAnimRefs.current.push(elem)
            }
        }
        this.populateEndAnims = (elem) => {
            if (elem && !this.endAnimRefs.current.includes(elem)) {
                this.endAnimRefs.current.push(elem)
            }
        }
    }

    startAnimations = (animRefCurr) => {
        for (let anim of animRefCurr) {
            anim.beginElement();
        }
    }

    startEventHandler = () => {
        this.startAnimations(this.startAnimRefs.current)
    }

    endEventHandler = () => {
        this.startAnimations(this.endAnimRefs.current)
    }

    render() {
        return (
            <div id="svgContainer" onMouseEnter={this.startEventHandler} onMouseLeave={this.endEventHandler}>
                <div className="projimg"><img src={`./${this.props.projid}/${this.props.projid}.png`} alt="project picture" /></div>
                <div className="actualSvg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <g id="elements" style={{ isolation: 'isolate' }}>
                            <defs id="dynamic-definitions">
                                <linearGradient id="path-79l66b7vtk4--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-79l66b7vtk4--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-79l66b7vtk4--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                                <linearGradient id="path-yet8kqqu93--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-yet8kqqu93--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-yet8kqqu93--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                                <linearGradient id="path-zoyvbk2rckm--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-zoyvbk2rckm--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-zoyvbk2rckm--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                                <linearGradient id="path-m89wsvszwul--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-m89wsvszwul--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-m89wsvszwul--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                                <linearGradient id="path-nbgop0asfhi--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-nbgop0asfhi--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-nbgop0asfhi--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                                <linearGradient id="path-8y1q48xnp9--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-8y1q48xnp9--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-8y1q48xnp9--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                                <linearGradient id="path-dpxkca3r2s--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-dpxkca3r2s--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-dpxkca3r2s--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                                <linearGradient id="path-j780jpdrb1g--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-j780jpdrb1g--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-j780jpdrb1g--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                                <linearGradient id="path-riiu3xmu1x--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-riiu3xmu1x--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-riiu3xmu1x--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                                <linearGradient id="path-nw6qc4nfc7--fill" x1="1" y1="0.5" x2="-0.448899" y2="0.5" spreadMethod="pad"
                                    gradientUnits="objectBoundingBox">
                                    <stop id="path-nw6qc4nfc7--fill-stop-0" offset="0" stopColor="rgb(221,179,58)"></stop>
                                    <stop id="path-nw6qc4nfc7--fill-stop-1" offset="1" stopColor="rgb(109,87,42)"></stop>
                                </linearGradient>
                            </defs>
                            <defs id="definitions"></defs>
                            <g id="elements-wrapper">
                                <path id="path-ntu18ukjcf8"
                                    d="M39.602901,231.096947C39.659544,184.839504,39.79171,76.90547,39.79171,76.90547L150,76.90547C150,76.90547,150,76.90547,150,76.90547C150,76.90547,150,113.984894,150,113.984894C150,113.984894,150.66202,231.791672,149.99999,230.716414C135.119318,206.547493,122.852228,230.71641,122.852228,230.71641C122.852228,230.71641,108.940754,207.061075,97.949093,230.71641C96.369872,234.115078,83.349055,206.547493,69.641596,230.71641C69.641596,230.71641,53.338719,206.547493,39.79171,230.71641"
                                    fill="rgb(175,14,53)" stroke="none" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                    <animate begin="indefinite" attributeName="d"
                                        to="M39.602901,231.096947C39.659544,184.839504,39.79171,76.90547,39.79171,76.90547L150,76.90547C150,76.90547,150,76.90547,150,76.90547C130.607683,99.652817,80.074323,92.109365,80.074322,113.809061C80.074321,126.276761,80.822986,231.733248,80.074322,230.71641C74.273143,222.837233,69.133078,230.71641,69.133078,230.71641C69.133078,230.71641,64.179934,223.235649,59.833021,230.71641C59.641832,231.045433,54.750753,222.571622,50.168256,230.71641C50.168256,230.71641,45.05596,220.712347,39.79171,230.71641"
                                        dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                    <animate begin="indefinite" attributeName="d"
                                        to="M39.602901,231.096947C39.659544,184.839504,39.79171,76.90547,39.79171,76.90547L150,76.90547C150,76.90547,150,76.90547,150,76.90547C150,76.90547,150,113.984894,150,113.984894C150,113.984894,150.66202,231.791672,149.99999,230.716414C135.119318,206.547493,122.852228,230.71641,122.852228,230.71641C122.852228,230.71641,108.940754,207.061075,97.949093,230.71641C96.369872,234.115078,83.349055,206.547493,69.641596,230.71641C69.641596,230.71641,53.338719,206.547493,39.79171,230.71641"
                                        dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                </path>
                                <path id="path-hmuyri7hsvq"
                                    d="M39.602901,231.096947C39.659544,184.839504,39.79171,76.90547,39.79171,76.90547L150,76.90547C150,76.90547,150,76.90547,150,76.90547C150,76.90547,150,113.984894,150,113.984894C150,113.984894,150.66202,231.791672,149.99999,230.716414C135.119318,206.547493,122.852228,230.71641,122.852228,230.71641C122.852228,230.71641,108.940754,207.061075,97.949093,230.71641C96.369872,234.115078,83.349055,206.547493,69.641596,230.71641C69.641596,230.71641,53.338719,206.547493,39.79171,230.71641"
                                    transform="matrix(-1 0 0 1 300 0)" fill="rgb(175,14,53)" stroke="none"
                                    style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                    <animate begin="indefinite" attributeName="d"
                                        to="M39.602901,231.096947C39.659544,184.839504,39.79171,76.90547,39.79171,76.90547L150,76.90547C150,76.90547,150,76.90547,150,76.90547C130.607683,99.652817,80.074323,92.109365,80.074322,113.809061C80.074321,126.276761,80.822986,231.733248,80.074322,230.71641C74.273143,222.837233,69.133078,230.71641,69.133078,230.71641C69.133078,230.71641,64.179934,223.235649,59.833021,230.71641C59.641832,231.045433,54.750753,222.571622,50.168256,230.71641C50.168256,230.71641,45.05596,220.712347,39.79171,230.71641"
                                        dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                    <animate begin="indefinite" attributeName="d"
                                        to="M39.602901,231.096947C39.659544,184.839504,39.79171,76.90547,39.79171,76.90547L150,76.90547C150,76.90547,150,76.90547,150,76.90547C150,76.90547,150,113.984894,150,113.984894C150,113.984894,150.66202,231.791672,149.99999,230.716414C135.119318,206.547493,122.852228,230.71641,122.852228,230.71641C122.852228,230.71641,108.940754,207.061075,97.949093,230.71641C96.369872,234.115078,83.349055,206.547493,69.641596,230.71641C69.641596,230.71641,53.338719,206.547493,39.79171,230.71641"
                                        dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                </path>
                                <g id="g-09qso9ksobuj" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                    <path id="path-79l66b7vtk4"
                                        d="M45.98306,233.491415L50.62237,233.491415L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,50.77953,250.36356,48.30271,250.36356C45.8259,250.36356,43.81804,248.35571,43.81804,245.87889C43.81804,244.25105,44.68534,242.82578,45.98305,242.03996L45.98306,233.491415Z"
                                        transform="translate(20.896932 -6.16082)" fill="url(#path-79l66b7vtk4--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="1.618554 -5.996526" dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="20.896932 -6.16082" dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                    </path>
                                    <path id="path-yet8kqqu93"
                                        d="M45.98306,230.71641L50.62237,230.71641L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,50.77953,250.36356,48.30271,250.36356C45.8259,250.36356,43.81804,248.35571,43.81804,245.87889C43.81804,244.25105,44.68534,242.82578,45.98305,242.03996L45.98306,230.71641Z"
                                        transform="translate(48.560708 -2.818387)" fill="url(#path-yet8kqqu93--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="11.352706 -2.804351" dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="48.56078 -2.818387" dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                    </path>
                                    <path id="path-zoyvbk2rckm"
                                        d="M45.98306,230.71641L50.62237,230.71641L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,50.77953,250.36356,48.30271,250.36356C45.8259,250.36356,43.81804,248.35571,43.81804,245.87889C43.81804,244.25105,44.68534,242.82578,45.98305,242.03996L45.98306,230.71641Z"
                                        transform="translate(74.426722 -3.757232)" fill="url(#path-zoyvbk2rckm--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="20.990323 -2.804351" dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="74.426722 -3.757232" dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                    </path>
                                    <path id="path-m89wsvszwul"
                                        d="M47.680709,230.71641L50.62237,230.71641L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,51.607757,249.815412,49.130937,249.815412C46.654127,249.815412,45.377405,248.35571,45.377405,245.87889C45.377405,244.25105,46.382999,242.82578,47.680709,242.03996L47.680709,230.71641Z"
                                        transform="translate(99.515924 -4.33495)" fill="url(#path-m89wsvszwul--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="29.605937 -2.804351" dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="99.515924 -4.33495" dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                    </path>
                                    <path id="path-nbgop0asfhi"
                                        d="M45.98306,230.71641L50.62237,230.71641L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,50.77953,250.36356,48.30271,250.36356C45.8259,250.36356,43.81804,248.35571,43.81804,245.87889C43.81804,244.25105,44.68534,242.82578,45.98305,242.03996L45.98306,230.71641Z"
                                        transform="translate(-6.374116 -5.933088)" fill="url(#path-nbgop0asfhi--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                    </path>
                                </g>
                                <g id="g-w7qic84fjmd" transform="matrix(-1 0 0 1 299.928553 -0.000003)"
                                    style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                    <path id="path-8y1q48xnp9"
                                        d="M45.98306,233.491415L50.62237,233.491415L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,50.77953,250.36356,48.30271,250.36356C45.8259,250.36356,43.81804,248.35571,43.81804,245.87889C43.81804,244.25105,44.68534,242.82578,45.98305,242.03996L45.98306,233.491415Z"
                                        transform="translate(20.896932 -6.16082)" fill="url(#path-8y1q48xnp9--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="1.618554 -5.996526" dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="20.896932 -6.16082" dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                    </path>
                                    <path id="path-dpxkca3r2s"
                                        d="M45.98306,230.71641L50.62237,230.71641L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,50.77953,250.36356,48.30271,250.36356C45.8259,250.36356,43.81804,248.35571,43.81804,245.87889C43.81804,244.25105,44.68534,242.82578,45.98305,242.03996L45.98306,230.71641Z"
                                        transform="translate(48.560708 -2.818387)" fill="url(#path-dpxkca3r2s--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="11.352706 -2.804351" dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="48.560708 -2.818387" dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                    </path>
                                    <path id="path-j780jpdrb1g"
                                        d="M45.98306,230.71641L50.62237,230.71641L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,50.77953,250.36356,48.30271,250.36356C45.8259,250.36356,43.81804,248.35571,43.81804,245.87889C43.81804,244.25105,44.68534,242.82578,45.98305,242.03996L45.98306,230.71641Z"
                                        transform="translate(74.426722 -3.757232)" fill="url(#path-j780jpdrb1g--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="20.990323 -2.804351" dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="74.426722 -3.757232" dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                    </path>
                                    <path id="path-riiu3xmu1x"
                                        d="M47.680709,230.71641L50.62237,230.71641L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,51.607757,249.815412,49.130937,249.815412C46.654127,249.815412,45.377405,248.35571,45.377405,245.87889C45.377405,244.25105,46.382999,242.82578,47.680709,242.03996L47.680709,230.71641Z"
                                        transform="translate(99.515924 -4.33495)" fill="url(#path-riiu3xmu1x--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}>
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="29.605937 -2.804351" dur="2s" fill="freeze" ref={this.populateStartAnims} />
                                        <animateTransform begin="indefinite" attributeName="transform" type="translate" to="99.515924 -4.33495" dur="2s" fill="freeze" ref={this.populateEndAnims} />
                                    </path>
                                    <path id="path-nw6qc4nfc7"
                                        d="M45.98306,230.71641L50.62237,230.71641L50.62237,242.03996C51.92009,242.82578,52.78738,244.25105,52.78738,245.87889C52.78738,248.3557,50.77953,250.36356,48.30271,250.36356C45.8259,250.36356,43.81804,248.35571,43.81804,245.87889C43.81804,244.25105,44.68534,242.82578,45.98305,242.03996L45.98306,230.71641Z"
                                        transform="translate(-6.374116 -5.933088)" fill="url(#path-nw6qc4nfc7--fill)" stroke="none"
                                        strokeWidth="0" style={{ mixBlendMode: "normal", paintOrder: "fill" }}></path>
                                </g>
                            </g>
                        </g>
                    </svg>

                </div>
            </div>)
    }
}
export default Curtains;
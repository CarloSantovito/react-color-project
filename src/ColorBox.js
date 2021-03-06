import React, {Component} from 'react';
import './ColorBox.css'
import './Palette.css'
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import { Link } from 'react-router-dom';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
    }

    changeCopyState = e => {
        this.setState({ copied: true}, () => {
            setTimeout(() => this.setState({ copied: false}), 1500);
        });
    }

    render() {
        const { name, background, moreUrl, showLink } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={ { background } } className='ColorBox'>
                    <div style={{ background }}
                         className={`copy-overlay ${copied && "show"}`}
                    />
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>copied!</h1>
                        <p>{ background }</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    {showLink && (<Link to={moreUrl} onClick={evt => evt.stopPropagation()}>
                        <span className='see-more'>More</span>
                    </Link>)}
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
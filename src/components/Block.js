import React from 'react'
import './Block.css'

function Block() {
    return (
        <div>
            <div className="block-container">
                <div className="prev-hash">
                    <div>Previous Hash</div>
                    <div className="">PREV-HASH</div>
                </div>
                <div className="data">
                    <div>DATA</div>
                    <input type="text" className="data-field" placeholder={"Enter Data here"}/>
                </div>
                <div className="nonce">
                    <div>Nonce</div>
                    <div className="nonce-data">NONCE DATA</div>
                </div>
                <div className="current-hash">
                    <div>Current Hash</div>
                    <div className="current-hash-field">CURRENT HASH FIELD</div>
                </div>
            </div>
        </div>
    )
}

export default Block

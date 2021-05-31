import React, {useState, useRef} from 'react'
import {createHash} from 'crypto'
import './Block.css'

const hashText = (text) => {
  return createHash("sha256").update(text).digest("hex")
}


function Block() {
    const inputRef = useRef()
    const [currentHash, changeCurrentHash] = useState("00000000000000000000000000")

    const clickHandler = (inputRef) => {
        changeCurrentHash(hashText(inputRef.current.value))
    }

    return (
        <div>
            <div className="block-container">
                <div className="prev-hash">
                    <div>Previous Hash</div>
                    <div className="">PREV-HASH</div>
                </div>
                <div className="data">
                    <div>DATA</div>
                    <input type="text" ref={inputRef} className="data-field" placeholder={"Enter Data here"}/>
                </div>
                <div className="nonce">
                    <div>Nonce</div>
                    <div className="nonce-data">NONCE DATA</div>
                </div>
                <div className="current-hash">
                    <div>Current Hash</div>
                    <div className="current-hash-field">{currentHash}</div>
                </div>
                <div className="mine-button">
                    <button className="mine-crypto" onClick={() => clickHandler(inputRef)}>
                        Mine Me!!!!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Block

import React from "react";
import './colorPickerModal.style.scss'

const ColorPickerModal = ({ setIsOpen, setCopyFormat }) => {
    return (
        <div>
            <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <h5 className='heading'>Dialog</h5>
                    </div>
                    <div className='modalContent'>
                        <div className='picking-button' onClick={() => { setCopyFormat('HEX (#AA1923)'); setIsOpen(false) }}>
                            HEX (#AA1923)
                        </div>
                        <div className='picking-button' onClick={() => { setCopyFormat('HEX (AA1923)'); setIsOpen(false) }}>
                            HEX (AA1923)
                        </div>
                        <div className='picking-button' onClick={() => { setCopyFormat('RGB - (1, 2, 3)'); setIsOpen(false) }}>
                            RGB - (1, 2, 3)
                        </div>
                        <div className='picking-button' onClick={() => { setCopyFormat('RGBA - (1, 2, 3, 1)'); setIsOpen(false) }}>
                            RGBA - (1, 2, 3, 1)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorPickerModal;
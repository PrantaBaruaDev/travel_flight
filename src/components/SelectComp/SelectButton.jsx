import React from 'react';

const SelectButton = ({ label, selectData, isActive, onClick, buttonRef, style }) => {
    
    return (
        <div
            ref={buttonRef}
            className={`search-input-button text-gray-600 border-primary rounded-xl pl-5 pr-5 py-3 cursor-pointer ${
                isActive ? "bg-gray-100" : ""
            } ${style}`}
            onClick={onClick}
        >
            <div className="p-0 m-0 text-start">
                <p>{label}</p>
                <input type="text"
                    className="focus:outline-none font-bold cursor-pointer bg-transparent"
                    value={selectData.value}
                    readOnly
                />
                <div>
                    <small>
                        <span>{selectData.smvalue}</span>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default SelectButton;
import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '../assets/search.svg?react';
import PlainIcon from '../assets/plane.svg?react';

const SelectInput = (props) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isActive, setActive] = useState(false);
    const overlayRef = useRef(null);
    const buttonRef = useRef(null);

    // Function to toggle overlay visibility
    const toggleOverlay = () => {
        setOverlayVisible(prevState => !prevState);
        setActive(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        // Check if the clicked target is outside the overlay and button
        if (overlayRef.current && !overlayRef.current.contains(event.target) &&
            buttonRef.current && !buttonRef.current.contains(event.target)) {
            setOverlayVisible(false); 
            setActive(false);
        }
    };

    // Set up the event listener for clicks outside the overlay
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMouseDown = (e) => {
        e.preventDefault(); 
    };

    const selectLocation = () => {
        return(
            <div ref={overlayRef} className='overlay-styles w-80'>
                <div className='bg-white drop-shadow-2xl px-3 py-2 rounded-xl'>
                    <div className="flex align-middle px-2 py-2 border-b-2 border-b-gray-400 text-black">
                        <div className='w-5 text-red-500 m-0 mr-3'>
                            <SearchIcon className="fill-current" />
                        </div>
                        <input type="text" 
                        placeholder='Type for the airport name or airport code'
                        className='search-form w-full focus:outline-none placeholder:text-xs' />
                    </div>
                    <div className='search-input-container text-gray-600'>
                        <div className="item flex cursor-pointer justify-between align-middle items-center">
                            <div className="flex items-center">
                                <div className="icon w-5 text-sm text-red-500 mr-3">
                                    <PlainIcon className='fill-current' />
                                </div>
                                <div className="ms-1 p-0 text-left">
                                    <p className='font-bold'>Dhaka, Bangladesh</p>
                                    <p className='text-xs'>Hazrat Shahjalal International Airport</p>
                                </div>
                            </div>
                            <p>DAC</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const selectDate = () => {
        return(
            <div ref={overlayRef} className='overlay-styles w-80'>
                <div className='bg-white drop-shadow-2xl px-3 py-2 rounded-xl'>
                    <input type="date" />
                </div>
            </div>
        );
    }


    return (
        <div className='field-wrapper'>
            <div ref={buttonRef} 
            className={`search-input-button text-gray-600 border-gray-200 border rounded-xl w-fit pl-5 pr-5 py-3 cursor-pointer ${isActive ? 'bg-gray-100' : ''} ${props.style && props.style}`}
            onClick={toggleOverlay} 
            onMouseDown={handleMouseDown} >
                <div className='p-0 m-0 text-start '>
                    <p>From</p>
                    <input type="text" 
                    className='focus:outline-none font-bold cursor-pointer bg-transparent'
                    value={'Dhaka'} 
                    readOnly />
                    <div>
                        <small>
                            <span>Hazrat Shahjalal International Airport</span>
                        </small>
                    </div>
                </div>
            </div>
            {isOverlayVisible && 
                selectLocation()
                // selectDate()
            }
        </div>
    );
};

export default SelectInput;
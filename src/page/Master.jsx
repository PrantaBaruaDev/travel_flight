import React from 'react';

const Master = ({children}) => {
    return (
        <div className='master-page'>
            <main>{children}</main>
        </div>
    );
};

export default Master;
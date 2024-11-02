import React from 'react';
import SelectInput from 'src/components/SelectInput';
import DatePicker from 'src/components/DatePicker';

const Home = () => {
    return (
        <div>
            <h1 className='text-6xl'>Home page</h1>
            <div className="pt-5">
                <SelectInput />
                <SelectInput style="pl-8" />
                <DatePicker />
            </div>
        </div>
    );
};

export default Home;
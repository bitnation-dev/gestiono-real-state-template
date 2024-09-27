
import React from 'react';

const cities = ["Santo Domingo", "La Vega", "Santiago De Los Caballeros", "Moca"];

const CityCard = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            {cities.map((city, index) => (
                <div key={index} className="w-80 h-12 justify-center items-center flex" style={{ backgroundImage: `url(/imagen3.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h1 className="font-bold text-white text-center">{city}</h1>
                </div>
            ))}
        </div>
    );
};


export default CityCard;
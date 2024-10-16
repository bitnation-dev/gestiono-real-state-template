
import React from 'react';

const cityBackgrounds = {
    "g": "/lavegaimage.png",
    "d": "/mocaImage.png",
    "s": "/santiagoimage.png",
    "": "/puntaCanaimage.png",
};

const CityCard = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            {Object.entries(cityBackgrounds).map(([city, background], index) => (
                <div 
                    key={index} 
                    className="w-80 h-12 justify-center items-center flex" 
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/*<h1 className="font-bold text-white text-center">{city}</h1>*/}
                </div>
            ))}
        </div>
    );
};


export default CityCard;
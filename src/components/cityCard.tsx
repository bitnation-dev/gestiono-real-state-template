
import React from 'react';

const cityBackgrounds = [
    "/lavegaimage.png",
    "/mocaImage.png",
    "/santiagoimage.png",
    "/puntaCanaimage.png",
]

const CityCard = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            {cityBackgrounds.map((background, index) => (
                <div 
                    key={index} 
                    className="w-80 h-12 justify-center items-center flex" 
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                </div>
            ))}
        </div>
    );
};


export default CityCard;
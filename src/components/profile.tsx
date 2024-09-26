import Image from "next/image"

const Profile = () => { 
    return (
        <div>
            <div className="">
                <div className="w-[400px] h-[450px] bg-gray-200 px-4">
                    <Image src={"/imagenP.png"} alt="Imagen de portada"  width={380} height={400}/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-[#3B4504] text-3xl font-[Neco]">Migue A Nova</h1>
                    <p className=" text-[#3B4504]  font-[Neco]">Broker Inmobilario</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
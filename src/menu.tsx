const Menu = () => {
    return (
        <div className="flex justify-between items-center p-3 bg-black text-white fixed top-0 w-full z-50">
            <h1 className="text-2xl font-bold">Emira.</h1>
            <div className="flex space-x-4">
                <a href="#">Home</a>
                <a href="#">Inmuebles</a>
                <a href="#">Nosotros</a>
            </div>
        </div>
    )
}

export default Menu;
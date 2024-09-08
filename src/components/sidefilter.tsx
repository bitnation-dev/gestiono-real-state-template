import { MoneyIcon } from "./icons";

type SideFilterProps = {
    title: string;
    options: string[];
}

export const SideFilter = ({ title, options }: SideFilterProps) => {
    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            {options.map((opcion, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        id={`opcion-${index}`}
                        className="mr-2"
                    />
                    <label htmlFor={`opcion-${index}`} className="text-sm">
                        {opcion}
                    </label>
                </div>
            ))}
        </div>
    )
}

type SideFilterMoneyProps = {       
    title: string;
    options: string[];
}

export const SideFilterMoney = ({ title, options }: SideFilterMoneyProps) => {
    return (
        <div className='h-24'>
            <div className='flex items-center space-x-4 text-center space-y-2'>
                <p className='text-lg font-semibold text-[#3B4504] w-12'>{title}</p>
                <div className='relative '>
                    <select className='border border-[#3B4504] p-3 pl-8 bg-white appearance-none hover:cursor-pointer'>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <MoneyIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image";

interface props {
    items: string[]
}

export const Select = ({items}: props) => {
    return (
        <div className="relative max-w-[220px] w-full h-[40px]">
            <select className="text-[14px] bg-background-select rounded-[16px] px-[16px] py-[10px] appearance-none w-full leading-[20px]">
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Image src={"/sprite/select_arrow.svg"} alt="Select" height={24} width={24}/>
            </div>
        </div>

    )
}
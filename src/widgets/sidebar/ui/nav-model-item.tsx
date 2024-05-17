import Image from "next/image";

interface props {
    id: number
    name: string
    icon: string
    isActive: boolean
    onClick: () => void
}

export const NavModelItem = (props: props) => {
    return (
        <button className={`flex p-[8px] rounded-[16px] ${props.isActive ? 'bg-gradient-active-sidebar-item' : ''}`} type="button" onClick={props.onClick}>
            <Image src={props.icon} alt={props.name} height={24} width={24} style={props.isActive ? {filter: "brightness(0) saturate(100%) invert(100%)"} : {}}/>
        </button>
    )
}
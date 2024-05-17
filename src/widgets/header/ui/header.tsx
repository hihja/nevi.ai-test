import {Balance} from "@/widgets/header/ui/balance";

export const Header = () => {
    return (
        <header className="w-full flex bg-background h-[80px] mb-[2px] pl-[100px] px-[20px] items-center justify-between fixed z-10">
            <div className="flex">
                <svg width="73" height="13" viewBox="0 0 73 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.972 13V9.76H7.02C3.186 9.76 0.72 7.474 0.72 3.28V0.399999H6.408V3.28C6.408 4.45 7.038 5.08 8.208 5.08H18.972V0.399999H24.66V13H18.972ZM38.7921 4.36L36.1641 7.6H41.4201L38.7921 4.36ZM35.5881 0.399999H41.9961L52.2021 13H45.7941L44.3361 11.2H33.2481L31.7901 13H25.3821L35.5881 0.399999ZM57.3593 13V4.72H48.2513V0.399999H72.1913V4.72H63.0473V13H57.3593Z" fill="white"/>
                </svg>
            </div>
            <Balance/>
        </header>
    )
}
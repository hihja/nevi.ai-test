import { Sidebar } from '@/widgets/sidebar';
import { ReactNode } from 'react';
import {Header} from "@/widgets/header";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-full bg-background-dark text-white">
            <div className="fixed inset-y-0 z-30 hidden h-full flex-col md:flex">
                <Sidebar/>
            </div>
            <Header/>
            <main className="h-full bg-background-dark">{children}</main>
        </div>
    )
}

export default MainLayout;

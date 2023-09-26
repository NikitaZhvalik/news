import React from "react";
import Header from "./header";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container">
            <Header />
            {children}
        </div>
    )
}

export default Layout;

import React from 'react';

const Header = () => {
    return (
        <div className="drawer z-[1000] drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className=" drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="min-h-full p-4 menu bg-base-200 text-base-content w-80">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
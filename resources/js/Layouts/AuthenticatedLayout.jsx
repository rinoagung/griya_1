import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const elements = document.querySelectorAll("[data-page]");
    elements.forEach((element) => {
        element.setAttribute("data-page", "");
    });

    return (
        <div>
            {header && (
                <header className="bg-white shadow">
                    <div className="p-4">{header}</div>
                </header>
            )}

            <main className="pt-4">{children}</main>
        </div>
    );
}

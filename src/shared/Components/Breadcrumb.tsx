"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../routes";

const BreadcrumbWithCustomSeparator = () => {

    const pathname = usePathname(); ///fetching pages addresses from url
    const segments = pathname.split("/").filter(Boolean); ///split the pathname by "/" and filter out empty segments create an array of the path components.


    if (segments.length === 0) return null;     ///only hidden on the main page
    let accumulatedPath = ""; ///initialize an empty string to build the full path
    return (
        <section className="ml-8 mt-10">
            <div className="inline-block">
                <Link href={routes.home}>Home</Link>
                <span className="mx-2">{">"}</span>
            </div>

            {segments.map((segment, index) => {
                accumulatedPath += `/${segment}`; //updates the accumulated path by appending a slash and the current segment
                const isLast = index === segments.length - 1; //checks if the current segment is the last one in the segment array
                const label = 
                segment.charAt(0).toUpperCase() + segment.slice(1); //creates a display label by capitalizing 
                // the first letter of the segment and appending the rest(lowercase)
                return (
                    <div key={accumulatedPath} className="inline-block">
                        {isLast ? (
                            <span className="text-neutral-700">{label}</span>
                        ) : (
                            <>
                                <Link href={accumulatedPath} className="text-black hover:text-neutral-700">
                                    {label}
                                </Link>
                                <span className="mx-2">{">"}</span>
                            </>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default BreadcrumbWithCustomSeparator;
import { useState, useEffect } from 'react';

/**
 * A custom hook to manage the responsiveness of the sidebar.
 * The sidebar will be open by default on wider screens (width >= 1280px)
 * and closed on smaller screens.
 * It also handles resizing and updates the sidebar state accordingly.
 *
 * @returns {object} An object containing the `open` state and the `setOpen` function to control it.
 */

function useResponsiveSidebar() {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1280) {
                setOpen(false);
            } else {
                setOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially to set the correct state based on window width.

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { open, setOpen };
}

export default useResponsiveSidebar;

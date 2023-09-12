import { useState, useEffect } from 'react';

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

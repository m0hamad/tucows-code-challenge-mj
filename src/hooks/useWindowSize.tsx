import { useEffect, useState } from "react"


/**
 * @returns window dimensions to use app-wide for creating a responsive app
 */
const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize;
}

export default useWindowSize
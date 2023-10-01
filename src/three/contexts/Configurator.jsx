import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext({})

export const CameraModes = {
    'FREE': 'FREE',
    'HEAD': 'HEAD',
    'TOP': 'TOP',
    'BOTTOM': 'BOTTOM',
}

export const ConfiguratorProvider = ({children}) => {
    const [cameraMode, setCameraMode] = useState(CameraModes.FREE)
    const [skinColor, setSkinColor] = useState()

    return (
    <ConfiguratorContext.Provider value={{cameraMode, setCameraMode}}>
        {children}
    </ConfiguratorContext.Provider>
    )
}

export const useConfigurator = () => {
    return useContext(ConfiguratorContext)
}


import { createContext, useContext } from "react";

const ConfiguratorContext = createContext()

export const ConfiguratorProvider = ({children}) => {
    const [legs, setLegs] = useState(0)
    return 
    <ConfiguratorContext.Provider value={{legs, setLegs}}>
        {children}
    </ConfiguratorContext.Provider>
}

export const useConfigurator = () => {
    return useContext(ConfiguratorContext)
}


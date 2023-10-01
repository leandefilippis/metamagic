import { CameraModes, useConfigurator } from "../contexts/Configurator"

const Interface = () => {
    const { cameraMode, setCameraMode } = useConfigurator()

    return (
        <>
            {
                Object.keys(CameraModes).map((mode) => (
                    <button key={mode} onClick={() => setCameraMode(mode)}>{mode}</button>
                ))
            }
        </>
    )
}

export default Interface
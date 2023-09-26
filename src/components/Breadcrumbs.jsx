import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const Breadcrumbs = () => {
    const location = useLocation()
    let current = ""

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            current =+ `/${crumb}`
            return (
                <div className="crumb" key={crumb}>
                <Link to={current}>{crumb}</Link>
                </div>
            )
        })

    return (
        <div className="breadcrumbs">
            <div className="crumb" key="home">
                <Link to="/">Home</Link>
            </div>
            {crumbs}
        </div>
    )
}

export default Breadcrumbs
import './loader.scss';

/**
 * A simple loader used to be active when user is waiting for datas
 * @returns Loader.jsx
 */
function Loader() {
    return (
        <div className="lds-ripple">
            <div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Loader
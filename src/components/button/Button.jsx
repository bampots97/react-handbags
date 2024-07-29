import {handleClick} from "../../helpers/handle-click.js";

function Button({name, disabled}) {

    return (
        <button
            disabled={disabled}
            type="button"
            onClick={() => handleClick({name})} >
            <h2>{name}</h2>
        </button>
    )
}console.log(Button)

export default Button
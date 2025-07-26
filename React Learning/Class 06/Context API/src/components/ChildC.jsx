
import { Data } from '../App'
const ChildC = () => {


    return (
        <Data.Consumer>
            {
                (userName) => (
                    <h1>My name is {userName}</h1>
                )
            }

        </Data.Consumer>



    )
}

export default ChildC
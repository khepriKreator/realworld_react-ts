import {HeaderNavAuth, HeaderNavNoAuth} from "../../04_features";

export const Header = ({auth}) => {
    return (
        <>
            {!auth ? <HeaderNavAuth/> : <HeaderNavNoAuth/>}
        </>
    )
}
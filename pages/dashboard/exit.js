import Cookies from "js-cookie";

const exit = () => {
    console.log(Cookies.remove('access'))
    return (
        <>
        </>
    );
}
 
export default exit;
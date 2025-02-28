import Nav from "./Nav";

function Header() {
    return(
        <div style={{ width: '80%', margin: 'auto', padding: '20px' }}>
            <img src="/images/logo.png" alt="logo"/>
            <Nav/>
        </div>
    );
}
export default Header;
'use client'

import TokenStore from "@/app/store/TokenStore";
import axios from "axios";
// import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

export default function Header() {

    // const cookieStore = cookies();
    // const accessToken = cookieStore.get("accessToken")?.value;

    const {accessToken, setToken} = TokenStore();
    const API_URL = `http://localhost:8080/api/v1/members/logout`;
    const router = useRouter();

    function logout() {
        axios.post(API_URL, {}, {
            withCredentials: true,
            headers: {
                "Content-Type":"application/json"
            }
        }).then((res) => {
            console.log(res.data.msg);
            if(res.status == 200){
                if(res.data.msg == 'logout'){
                    // Cookies.remove("accessToken");
                    // Cookies.remove("refreshToken");
                    setToken(null);
                }
                router.push("/");
            }
        })
    }

    return (
        <header className="header">
            <div className="navBar">
            <Link href="/">Home</Link>
            <Link href="/members">Members</Link>
            <Link href="/bbs">Board</Link>
            </div>

            <div className="fr">
                {
                    accessToken == null
                    ?<Link href="/members/login">Login</Link>
                    :<a href="#" onClick={logout}>Logout</a>
                }
                <Link href="/member/signup">Signup</Link>
                
            </div>
        </header>
    );
}
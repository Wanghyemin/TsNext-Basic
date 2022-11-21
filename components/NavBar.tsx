import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <div style={{float:"right"}}>
                <Link href="/"> 홈 </Link>
                <Link href="/board/list"> 공지사항 </Link>
                <Link href="/board/write"> 글작성 </Link>
            </div>
        </>
    );
}
import Link from "next/link";
import Image from "next/image";

export default function LinkButton({buttonType}) {
    if (buttonType === "youtube") {
        return (
            <Link href={"https://www.youtube.com/@BANANAICE/"}>
                <Image src="/icons/youtube.png" alt="youtube link image" width={40} height={40}/>
            </Link>
        )
    }
    if (buttonType === "insta") {
        return (
            <Link href={"https://www.instagram.com/kithbill/"}>
                <Image src="/icons/insta.png" alt="insta link image" width={40} height={40}/>
            </Link>
        )
    }
}
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"



import Image from "next/image"
import Logo from "../../img/logo.png"
import Link from "next/link"


export default function Header() {
    return (
        <main className="mainHeader">
            <header>
                <div className="logo">
                    <Image src={Logo} alt="logo" />
                </div>
                <div className="header1Div">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/reviews">Testimonials</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="header2Div">
                    <Sheet>
                        <SheetTrigger><Menu /></SheetTrigger>
                        <SheetContent side="right" className="header3Div">
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/reviews">Testimonials</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </main>
    )
}
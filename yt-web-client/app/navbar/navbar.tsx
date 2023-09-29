import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image
                    src="/yt-logo.png"
                    alt="youtube logo"
                    width={40}
                    height={32}
                />
            </Link>
        </nav>
    );
};

export default Nav;

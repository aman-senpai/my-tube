"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import SingIn from "./sign-in";
import { onAuthStateChangedHelper } from "../firebase/fireabase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

const Nav = () => {
    // Init user state
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    });
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
            {/* TODO: Add a upload button. */}
            <SingIn user={user} />
        </nav>
    );
};

export default Nav;

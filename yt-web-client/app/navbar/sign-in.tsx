import { Fragment } from "react";
import { signInWithGoogle, signOut } from "../firebase/fireabase";

import styles from "./sign-in.module.css";
import { User } from "firebase/auth";

export default function SingIn({ user }: { user: User | null }) {
    return (
        <Fragment>
            {user ? (
                <button
                    className={styles.signin}
                    onClick={signOut}
                >
                    Sign Out
                </button>
            ) : (
                <button
                    className={styles.signin}
                    onClick={signInWithGoogle}
                >
                    Sign In
                </button>
            )}
        </Fragment>
    );
}

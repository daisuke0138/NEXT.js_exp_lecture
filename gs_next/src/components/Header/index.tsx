import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>アプリを開発しよう</h1>
            <ul>
                <li>
                    <Link href={"/login"}>ログイン</Link>
                </li>
                <li>
                    <Link href={"/signup"}>登録</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
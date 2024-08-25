import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Button from "@mui/material/Button";
import apiClient from "@/lib/apiClient";

import Post from "../Post";
import { PostType } from "@/types";

const Timeline = () => {
    const [postData, setPostdata] = useState<PostType[]>([]);

    // 取得のuseEffectを記述🤗
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await apiClient.get("/get_post");
                console.log(res.data, "データ取得");
                setPostdata(res.data);
            } catch (err) {
                console.log(err, "err");
            }
        };

        fetchPost();
    }, []);

    return (
        <>
            {postData &&
                postData.map((item, index) => (
                    <Post
                        key={index}
                        username={item.author.username}
                        content={item.content}
                        createdAt={item.createdAt}
                        author={item.author}
                    />
                ))}
        </>
    );
};

export default Timeline;
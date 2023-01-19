import fs from "fs";
import { sync } from "glob";
import path from "path";


const POSTS_PATH = path.join(process.cwd(), "Projects");

export const getSlugs = () => {
    const paths = sync(`${POSTS_PATH}/*.json`);

    return paths.map((path) => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        // eslint-disable-next-line no-unused-vars
        const [slug, _ext] = fileName.split(".");
        return slug;
    });
};

export const getAllProjects = () => {
    const posts = getSlugs()
        .map((slug) => getProjectFromSlug(slug))
        .sort((a, b) => {
            if (new Date(a.meta.date) > new Date(b.meta.date)) return 1;
            if (new Date(a.meta.date) < new Date(b.meta.date)) return -1;
            return 0;
        })
        .reverse();
    return posts;
};


export const getProjectFromSlug = (slug) => {
    const postPath = path.join(POSTS_PATH, `${slug}.json`);
    const source = JSON.parse(fs.readFileSync(postPath));
    console.log(source);
    return {
        source
    };
};



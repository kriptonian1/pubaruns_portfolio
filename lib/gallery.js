import fs from "fs";
import { sync } from "glob";
import path from "path";


const POSTS_PATH = path.join(process.cwd(), "public/gallery");

export const getPaths = () => {
    const paths = sync(`${POSTS_PATH}/**/*.jpg`);

    return paths.map((path) => {
        let index = path.indexOf("/projects");
        let truncatedPath = path.substring(index);
        return truncatedPath;
    });
};

export const getAllProjects = () => {
    const picture_path = getPaths()
        .map((slug) => getProjectFromSlug(slug))
        .sort((a, b) => {
            if (new Date(a.meta.date) > new Date(b.meta.date)) return 1;
            if (new Date(a.meta.date) < new Date(b.meta.date)) return -1;
            return 0;
        })
        .reverse();
    return picture_path;
};




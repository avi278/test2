import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import "./index.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Playground from "../geovisto_demos/playground";

export const Home = (): JSX.Element => (
    <Layout
        title={`Playground`}
        description="Description will go into a meta tag in <head />"
    >
        <main>
            <div
                className="container-fluid w-100 p-3 pt-lg-4 text-center display-6"
                id="playground-hook"
            >
                Playground
            </div>
            <div className="container-fluid w-100 p-3 pb-lg-5 text-center lead">
                <Render_geovisto />
            </div>
        </main>
    </Layout>
);



export function Render_geovisto(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Playground = require('../geovisto_demos/playground').default;
                return <Playground />;
            }}
        </BrowserOnly>
    );
}

export default Home;

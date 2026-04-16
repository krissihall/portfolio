import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Stinky Craft",
    description: "This was a personal project for a Minecraft server friends played on. Many of these friends were Twitch streamers so it has integration with the Twitch API.",
};

export default function StinkyCraft() {
    return (
        <main className="development-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Stinky Craft</h1>
            <p>
                This website was created for a Minecraft server I created for a group of online friends to play and enjoy
                each others company. In addition, many of these players were also streamers on Twitch so the Twitch API
                was integrated to show when different players were live streaming as well as online on the server.
            </p>
            <section className="rounded-box d-block">
                <h2>Stinky Craft Season 6</h2>
                <div className="float-right w-5/12 pr-4">
                    <Image
                        src="/images/development/stinky-craft/homepage.png"
                        alt="Stinky Craft Homepage"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <p className="mb-4">
                    This was a multi-season run Minecraft server set up for a small group of friends online. Throughout
                    the various seasons, different plugins were used to make the server more interesting for players and
                    also to give users a refresh on the game. This server was set up to allow both Bedrock and Java players
                    to play on the server. There were six different seasons played with different plugins loaded up each time
                    around. It was a very community-driven server with most players contributing to a shared spawn area that
                    showcased many different users builds. Some seasons used pre-made modpacks that are listed in the About
                    section, but many of them were modified for our use and had some mods that were specific to each season.
                </p>
                <p className="mb-4">
                    The server is no longer active but does have a Discord channel for players on the server. It could possibly
                    be revived in the future.
                </p>
                <p className="text-right">
                    <Link href="https://www.stinkycraft.us/" target="_blank" className="btn btn-primary">
                        Visit Website
                    </Link>
                </p>
            </section>
        </main>
    );
}

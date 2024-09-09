import NextDefault from "@/components/trash/NextDefault";
import MainWallpaper from "@/components/wallpaper/MainWallpaper";

export default function Home() {
    return (
        <div>
            {/* <MainWallpaper /> */}

            <div className="font-serif text-7xl p-5">
                <div>Hi,</div>
                <div>I&apos;m Rifat Noor.</div>
                <div>This site is not ready yet. 😔</div>
                <div>
                    But you can visit{" "}
                    <a
                        className="text-violet-800 hover:underline"
                        target="_blank"
                        href="https://rifatsworks.netlify.app/"
                    >
                        here
                    </a>{" "}
                    for my old portfolio.
                </div>
            </div>
        </div>
    );
}

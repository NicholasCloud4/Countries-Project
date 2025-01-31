import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Countries App" },
        {
            name: "Making a Countries App",
            content: "Making a Countries App with React Router",
        },
    ];
}

export default function Home() {
    return (
        <>
            <h1>HOME PAGE!</h1>
        </>
    );
}

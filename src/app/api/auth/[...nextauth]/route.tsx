import NextAuth from "next-auth";
import { authConfig } from "../../../../configs/auth";

export async function generateStaticParams() {
    return [
        {path: "https://github.com/settings/apps"},
        {path: "https://oauth.yandex.com/client/new"},
    ];
}

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

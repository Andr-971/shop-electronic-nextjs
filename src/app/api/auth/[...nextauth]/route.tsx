import NextAuth from "next-auth";
import { authConfig } from "../../../../configs/auth";

export async function generateStaticParams() {
    return [
        "https://github.com/settings/apps",
        "https://oauth.yandex.com/client/new",
    ];
}

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

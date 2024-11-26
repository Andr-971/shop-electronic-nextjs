import NextAuth from "next-auth";
import { authConfig } from "../../../../configs/auth";

export async function generateStaticParams() {
    return [
        { slug: ["https://github.com/settings/apps"] },
        { slug: ["https://oauth.yandex.com/client/new"] },
    ];
}

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

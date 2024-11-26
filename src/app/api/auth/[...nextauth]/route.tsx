import NextAuth from "next-auth";
import { authConfig } from "../../../../configs/auth";

export async function generateStaticParams() {
    return [];
}

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

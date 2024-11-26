import NextAuth from "next-auth";
import { authConfig } from "../../../../configs/auth";

// export async function generateStaticParams() {
//     return [
//         { nextauth: "http://localhost:3000/api/auth/callback/github" },
//         { nextauth: "http://localhost:3000/api/auth/callback/yandex" },
//     ];
// }
// "https://github.com/settings/apps", "https://oauth.yandex.com/client/new"
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

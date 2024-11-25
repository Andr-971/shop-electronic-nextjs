import type { AuthOptions, User } from "next-auth";
import YandexProvider from "next-auth/providers/yandex"
import GitHubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
import users from "../../public/users"

export const authConfig: AuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GIT_HUB_CLIENT_ID!,
            clientSecret: process.env.GIT_HUB_SECRET!,
        }),
        YandexProvider({
            clientId: process.env.YANDEX_CLIENT_ID!,
            clientSecret: process.env.YANDEX_SECRET!,
        }),
        Credentials({
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    recuest: true,
                },
                password: {
                    label: "password",
                    type: "password",
                    recuest: true,
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;
                const currentUsers = users.find(
                    (item) => item.email === credentials.email,
                );
                if (
                    currentUsers &&
                    currentUsers.password === credentials.password
                ) {
                    const { password, ...userWithoutPass } = currentUsers;
                    return userWithoutPass as User;
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/",
    },
};
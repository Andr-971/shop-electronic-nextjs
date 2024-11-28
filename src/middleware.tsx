export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        "/personal",
        "/personal/user_data",
        "/personal/history_purchase",
        "/personal/favourite",
        "/personal/change_password",
        "/basket",
        "/compare",
    ],
};

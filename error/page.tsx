
"use client";

import { useSearchParams } from "next/navigation";

enum Error {
    Configuration = "Configuration",
}

const errorMap = {
    [Error.Configuration]: (
        <p>
            При попытке аутентификации была проблема. Пожалуйста, свяжитесь с нами
            Если эта ошибка сохраняется. Уникальный код ошибки:{" "}
            <code className="rounded-sm bg-slate-100 p-1 text-xs">
                Конфигурация
            </code>
        </p>
    ),
};

export default function AuthErrorPage() {
    const search = useSearchParams();
    const error = search.get("error") as Error;

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center">
            <a
                href="#"
                className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <h5 className="mb-2 flex flex-row items-center justify-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Что-то пошло не так!
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                    {errorMap[error] ||
                        "Пожалуйста, свяжитесь с нами, если эта ошибка сохранится."}
                </div>
            </a>
        </div>
    );
}
import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    // Получение заголовков, но не изменение
    const headerList = headers()
    const type = headerList.get("Content-Type") // "Application/json"
    // Работа с куками
    const cookiesList = cookies()
    const name = cookiesList.get("name")?.value

    // Логика удаления
    redirect("/blog") // Возврат на какую либо страницу

    return NextResponse.json({ id })
    // return Response("Удалено")
}
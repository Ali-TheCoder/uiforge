import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, plan, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // اینجا بعداً ایمیل می‌فرستیم
        console.log("New contact form:", {
            name,
            email,
            plan,
            message,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}

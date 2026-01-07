import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, plan, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // kevetsahedrakh@hotmail.com
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`, // MUST be yours
            to: "uiforge.team@gmail.com",
            replyTo: email, // user email
            subject: "New Contact Form Message",
            text: `
            Name: ${name}
            Email: ${email}
            Plan: ${plan}

            Message:
            ${message}
                        `,
             });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Email failed" },
            { status: 500 }
        );
    }
}

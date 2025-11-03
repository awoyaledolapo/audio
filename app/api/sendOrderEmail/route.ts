/** @jsxImportSource react */
import * as React from "react";
import { NextResponse } from "next/server";
import { resend } from "@/app/lib/resend";
import { OrderEmail } from "@/app/components/email-template";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId, customerEmail, customerName, items, total } = body;

    await resend.emails.send({
      from: "orders@yourstore.com",
      to: customerEmail,
      subject: `Order Confirmation #${orderId}`,
      react: React.createElement(OrderEmail, {
        order: { orderId, customerName, items, total },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

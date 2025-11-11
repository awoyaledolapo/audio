/** @jsxImportSource react */
// import * as React from "react";
// import { NextResponse } from "next/server";
// import { resend } from "@/app/lib/resend";
// import { OrderEmail } from "@/app/components/email-template";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { orderId, customerEmail, customerName, items, total } = body;

//     await resend.emails.send({
//       from: "audiospace.com",
//       to: customerEmail,
//       subject: `Order Confirmation #${orderId}`,
//       react: React.createElement(OrderEmail, {
//         order: { orderId, customerName, items, total },
//       }),
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email send failed:", error);
//     return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
//   }
// }
/** @jsxImportSource react */
import * as React from "react";
import { NextResponse } from "next/server";
import { resend } from "@/app/lib/resend";
import { OrderEmail } from "@/app/components/email-template";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1) Basic validation so we don't call Resend with bad data
    const {
      orderId,
      customerEmail,
      customerName,
      items,
      total
    } = body ?? {};

    console.log("DEBUG /api/sendOrderEmail body:", JSON.stringify(body));

    if (!orderId || !customerEmail || !items) {
      console.error("Missing required fields:", { orderId, customerEmail, items });
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 2) Attempt to send email (Resend accepts a React element)
  const result  =await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "johsonmeli33@gmail.com",
      subject: `Order Confirmation #${orderId}`,
     react: React.createElement(OrderEmail, {
        order: { orderId, customerName, items, total },
     }),
   });
console.log(result)
    return NextResponse.json({ success: true });
  } catch (err: any) {
    // 3) Catch everything and log helpful details
    console.error("Email send failed - error object:", err);

    // Resend/HTTP libraries often carry useful details in err.message or err.response
    const message = err?.message ?? "Unknown error";
    const extra = (err?.response && err.response.data) || err?.body || null;

    console.error("Email send failed - message:", message);
    if (extra) console.error("Email send failed - extra details:", extra);

    // Return error info to the client (useful for dev)
    return NextResponse.json({ error: "Failed to send email", details: message }, { status: 500 });
  }
}


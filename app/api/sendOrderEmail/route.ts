

// /** @jsxImportSource react */
// import * as React from "react";
// import { NextResponse } from "next/server";
// import { resend } from "@/app/lib/resend";
// import { OrderEmail } from "@/app/components/email-template";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const {
//       orderId,
//       customerEmail,
//       customerName,
//       items,
//       total
//     } = body ?? {};

//     console.log("DEBUG /api/sendOrderEmail body:", JSON.stringify(body));

//     if (!orderId || !customerEmail || !items) {
//       console.error("Missing required fields:", { orderId, customerEmail, items });
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Attempt to send email (Resend accepts a React element)
//     const result = await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: "johsonmeli33@gmail.com",
//       subject: `Order Confirmation #${orderId}`,
//       react: React.createElement(OrderEmail, {
//         order: { orderId, customerName, items, total },
//       }),
//     });

//     console.log("Email send result:", result);

//     return NextResponse.json({ success: true });
//   } catch (err: unknown) {
//     // Narrow unknown to Error safely
//     if (err instanceof Error) {
//       console.error("Email send failed - error object:", err);

//       const message = err.message ?? "Unknown error";
//       const extra = (err as any)?.response?.data || (err as any)?.body || null;

//       if (extra) console.error("Email send failed - extra details:", extra);

//       return NextResponse.json(
//         { error: "Failed to send email", details: message },
//         { status: 500 }
//       );
//     }

//     // Fallback for non-Error objects
//     console.error("Email send failed - unknown error:", err);
//     return NextResponse.json(
//       { error: "Failed to send email", details: "Unknown error" },
//       { status: 500 }
//     );
//   }
// }
/** @jsxImportSource react */
import * as React from "react";
import { NextResponse } from "next/server";
import { resend } from "@/app/lib/resend";
import { OrderEmail } from "@/app/components/email-template";

// Define a type for possible Resend errors
interface ResendError extends Error {
  response?: { data?: unknown };
  body?: unknown;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { orderId, customerEmail, customerName, items, total } = body ?? {};

    console.log("DEBUG /api/sendOrderEmail body:", JSON.stringify(body));

    if (!orderId || !customerEmail || !items) {
      console.error("Missing required fields:", { orderId, customerEmail, items });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Attempt to send email (Resend accepts a React element)
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: customerEmail, // dynamically use customer email
      subject: `Order Confirmation #${orderId}`,
      react: React.createElement(OrderEmail, {
        order: { orderId, customerName, items, total },
      }),
    });

    console.log("Email send result:", result);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    // Narrow unknown to our ResendError type
    if (err instanceof Error) {
      const e = err as ResendError;
      const message = e.message ?? "Unknown error";
      const extra = e.response?.data ?? e.body ?? null;

      console.error("Email send failed - message:", message);
      if (extra) console.error("Email send failed - extra details:", extra);

      return NextResponse.json(
        { error: "Failed to send email", details: message },
        { status: 500 }
      );
    }

    // fallback for non-Error objects
    console.error("Email send failed - unknown error:", err);
    return NextResponse.json(
      { error: "Failed to send email", details: "Unknown error" },
      { status: 500 }
    );
  }
}

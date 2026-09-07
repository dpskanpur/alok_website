import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, honeypot, captchaAnswer, captchaExpected } = body;

    // Silent drop for honeypot spam bots
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ success: true, message: "Delivered" });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    if (parseInt(String(captchaAnswer).trim(), 10) !== parseInt(String(captchaExpected).trim(), 10)) {
      return NextResponse.json(
        { success: false, message: "Human verification challenge was incorrect." },
        { status: 400 }
      );
    }

    // Forward to FormSubmit via server-side fetch with explicit Origin
    const formSubmitRes = await fetch("https://formsubmit.co/ajax/aks2103@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://alokksingh.com",
        "Referer": "https://alokksingh.com/",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Executive Inquiry: ${name} via alokksingh.com`,
        _replyto: email,
        _captcha: "false",
        _template: "table",
      }),
    });

    const data = await formSubmitRes.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to transmit message." },
      { status: 500 }
    );
  }
}

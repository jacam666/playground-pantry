// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   const { name, email, message } = await request.json();

//   if (!name || !email || !message) {
//     return NextResponse.json({ error: "All fields are required." }, { status: 400 });
//   }

//   const { error } = await resend.emails.send({
//     from: "Playground Pantry <onboarding@resend.dev>",
//     to: "playgroundpantryltd@gmail.com",
//     replyTo: email,
//     subject: `New message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//   });

//   if (error) {
//     return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
//   }

//   return NextResponse.json({ success: true });
// }

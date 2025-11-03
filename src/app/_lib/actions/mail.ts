"use server";
import nodemailer from "nodemailer";

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  throw new Error("EMAIL_USER and EMAIL_PASSWORD must be set in .env.local");
}

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.verify((error: unknown, success: unknown) => {
  if (error) {
    console.error(" Email configuration error:", error);
    console.error("Check your EMAIL_USER and EMAIL_PASSWORD in .env.local");
  } else {
    console.log(" Email server ready. Can send to any email address!");
  }
});

interface SendEmailParams {
  from?: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ from, to, subject, html }: SendEmailParams) {
  try {
    const info = await transporter.sendMail({
      from: from || process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to,
      subject,
      html,
    });

    console.log(` Email sent to ${to}:`, info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(` Failed to send email to ${to}:`, error);
    throw error;
  }
}

import { sendEmail } from "@/app/_lib/actions/mail";

export async function sendOrderConfirmationEmail(
  customerEmail: string,
  orderData: {
    customerName: string;
    orderNumber: string;
    items: Array<{ name: string; quantity: number; price: number }>;
    shippingAddress: string; // Add this
  },
) {
  const total = orderData?.items?.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );

  // Make order number uppercase
  const orderNumberUpper = orderData.orderNumber.toUpperCase();

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .item { padding: 10px; border-bottom: 1px solid #e5e7eb; }
          .total { font-size: 20px; font-weight: bold; text-align: right; margin-top: 20px; }
          .address-section { 
            background: #f0fdf4; 
            border: 1px solid #bbf7d0; 
            border-radius: 8px; 
            padding: 15px; 
            margin-top: 20px; 
          }
          .address-title { 
            font-weight: bold; 
            color: #065f46; 
            margin-bottom: 10px; 
            font-size: 16px; 
          }
          .address-text { 
            color: #374151; 
            white-space: pre-line; 
            line-height: 1.6; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Order Confirmed! 🎉</h1>
          </div>
          <div class="content">
            <p>Hi ${orderData.customerName},</p>
            <p>Thank you for your order!</p>
            <p><strong>Order #${orderNumberUpper}</strong></p>
            
            <h3>Items:</h3>
            ${orderData.items
              .map(
                (item) => `
              <div class="item">
                <strong>${item.name}</strong><br>
                Qty: ${item.quantity} × $${item.price.toFixed(2)} = $${(item.quantity * item.price).toFixed(2)}
              </div>
            `,
              )
              .join("")}
            
            <div class="total">Total: $${total.toFixed(2)}</div>

            <div class="address-section">
              <div class="address-title">📦 Shipping Address</div>
              <div class="address-text">${orderData.shippingAddress}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  return await sendEmail({
    from: "Audiophile <ronkishtv@gmail.com>",
    to: customerEmail,
    subject: `Audiophile - Order Confirmation #${orderNumberUpper}`,
    html,
  });
}

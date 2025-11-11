import * as React from "react";

type OrderEmailProps = {
  order: {
    orderId: string;
    customerName: string;
    items: { name: string; price: number; quantity: number }[];
    total: number;
  };
};

export const OrderEmail: React.FC<OrderEmailProps> = ({  order: { orderId, customerName, items, total }}) => (
  <div>
    <h2>Thank you for your order, {customerName}!</h2>
    <p>Your order ID: <strong>{orderId}</strong></p>

    <h3>Items:</h3>
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {item.name} × {item.quantity} — ${item.price * item.quantity}
        </li>
      ))}
    </ul>

    <p><strong>Total: ${total.toFixed(2)}</strong></p>
    <p>We’ll send you another email when your order ships!</p>
  </div>
);
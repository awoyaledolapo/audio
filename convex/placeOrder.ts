import { mutation } from "./_generated/server";
import { z } from "zod";

const orderSchema = z.object({
  name: z.string(),
  email: z.string(),
  address: z.string(),
  zipcode: z.string(),
  city: z.string(),
  country: z.string(),
  phone: z.string(),
  payment: z.string(),
  cart: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
    })
  ),
  total: z.number(),
  vat: z.number(),
  shipping: z.number(),
  grandTotal: z.number(),
});

export const placeOrder = mutation(async ({ db }, data) => {
  const parsed = orderSchema.parse(data);

  const orderId = await db.insert("orders", {
    ...parsed,
    createdAt: Date.now(),
  });

  return { orderId };
});
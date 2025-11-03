// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    name: v.string(),
    email: v.string(),
    address: v.string(),
    zipcode: v.string(),
    city: v.string(),
    country: v.string(),
    phone: v.string(),
    payment: v.string(),
    cart: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    total: v.number(),
    vat: v.number(),
    shipping: v.number(),
    grandTotal: v.number(),
    createdAt: v.number(),
  }),
});


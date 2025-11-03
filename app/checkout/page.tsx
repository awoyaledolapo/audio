"use client"
import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { useCart } from '../context/CardContext';
import Image from 'next/image';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import OrderConfirmationModal from '../components/OrderConfirmed';
import { api } from "../../convex/_generated/api";

import { useMutation } from "convex/react";





const formSchema = z.object({
    name: z.string().min(6, { message: "Name must be at least 6 characters." }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    address: z.string().min(12, { message: "Address must be at least 12 characters." }),
    zipcode: z.string().regex(/^\d{5}$/, { message: "ZIP code must be 5 digits" }),
    city: z.string().min(2, { message: "City must be at least 2 characters." }),
    country: z.string().min(3, { message: "Country must be at least 2 characters." }),
    phone: z.string().regex(/^\d{10,15}$/, { message: "Phone number must be 10–15 digits." }),
});

type MyFormType = z.infer<typeof formSchema>;

const Page = () => {

    const placeOrder = useMutation(api.placeOrder.placeOrder);
    
    const [payment, setPayment] = useState("cash");
    const { cart } = useCart();
    const [showModal, setShowModal] = useState(false);
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")


    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 50; // flat shipping (you can make dynamic later)
    const vat = total * 0.2; // assuming 20% VAT
    const grandTotal = total + shipping + vat;




    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {

            name: "",
            email: "",
            address: "",
            zipcode: "",
            city: "",
            country: "",
            phone: "",
        },
    });



    const onSubmit = async (data: MyFormType) => {
        const orderData = {
            ...data,
            payment,
            cart,
            total,
            vat,
            shipping,
            grandTotal,

        }
        try {
    // Save order in Convex and get orderId
    const { orderId } = await placeOrder(orderData);
    setShowModal(true);

    // Send order confirmation email
    const res = await fetch("/api/sendOrderEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId,
        customerEmail: data.email,
        customerName: data.name,
        items: cart,   // your cart items
        total,
      }),
    });

    const emailResult = await res.json();
    console.log("Email sent:", emailResult);
  } catch (err) {
    console.error("Order submission or email failed:", err);
  }
};
 
   

    return (
        <div>
            <div className="mx-auto max-w-[1110px] px-6 pt-4 py-6 md:pt-[2.063rem]">

            </div>
            <form className="mx-auto max-w-[1110px]" role="form" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="lg:flex lg:flex-row lg:items-start lg:gap-x-[1.875rem]">

                    <div className="bg-white p-6 mx-6 rounded-lg mb-8 lg:mr-0 lg:flex-1">
                        <h1 className="uppercase text-[1.75rem] tracking-[0.0625em] font-bold pb-8">Checkout</h1>

                        <div className="pb-8">
                            <p className="uppercase text-[0.813rem] tracking-[0.0580625em] font-bold text-raw-sienna leading-[1.563rem] pb-4 text-red-900">Billing Details</p>

                            <div className="flex flex-col gap-y-6 md:flex-row md:flex-wrap md:gap-x-4">
                                <div className="space-y-2 md:basis-[48%]">
                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-[0.75rem] font-bold leading-[normal] peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Name</label>

                                    </div>
                                    <input required className="flex h-[56px] w-full rounded-lg border border-input-border bg-white px-6 py-[1.125rem] text-sm focus-visible:outline-none focus-visible:border-raw-sienna focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Name" id=":r0:-form-item" aria-describedby=":r0:-form-item-description" aria-invalid="false" {...form.register("name")} onChange={(e) => setName(e.target.value)} />
                                    {form.formState.errors.name && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                                    )}


                                </div>
                                <div className="space-y-2 md:basis-[48%]">

                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-[0.75rem] font-bold leading-[normal] peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Email Address</label>
                                    </div>
                                    <input required className="flex h-[56px] w-full rounded-lg border border-input-border bg-white px-6 py-[1.125rem] text-sm focus-visible:outline-none focus-visible:border-raw-sienna focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Email Address" id=":r1:-form-item" aria-describedby=":r1:-form-item-description" aria-invalid="false"  {...form.register("email")} onChange={(e) => setEmail(e.target.value)} />
                                    {form.formState.errors.email && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2 md:basis-[48%]">
                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-[0.75rem] font-bold leading-[normal] peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Phone Number</label>
                                    </div>
                                    <input required className="flex h-[56px] w-full rounded-lg border border-input-border bg-white px-6 py-[1.125rem] text-sm focus-visible:outline-none focus-visible:border-raw-sienna focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Phone Number" id=":r2:-form-item" aria-describedby=":r2:-form-item-description" aria-invalid="false" type="number"  {...form.register("phone")} />
                              {form.formState.errors.phone && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>
                                    )}
                              
                                </div>

                            </div>



                        </div>
                        <div className="pb-8">
                            <p className="uppercase text-[0.813rem] tracking-[0.0580625em] font-bold text-raw-sienna leading-[1.563rem] pb-4 text-red-900">Shipping Info</p>

                            <div className="flex flex-col gap-y-6 md:flex-row md:flex-wrap md:gap-x-4">
                                <div className="space-y-2 w-full">
                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-[0.75rem] font-bold leading-[normal] peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Your Address</label>
                                    </div>
                                    <input className="flex h-[56px] w-full rounded-lg border border-input-border bg-white px-6 py-[1.125rem] text-sm focus-visible:outline-none focus-visible:border-raw-sienna focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your Address" id=":r3:-form-item" aria-describedby=":r3:-form-item-description" aria-invalid="false"  {...form.register("address")} />
                                {form.formState.errors.address && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.address.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2 md:basis-[48%]">
                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-[0.75rem] font-bold leading-[normal] peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >ZIP Code</label>
                                    </div>
                                    <input required className="flex h-[56px] w-full rounded-lg border border-input-border bg-white px-6 py-[1.125rem] text-sm focus-visible:outline-none focus-visible:border-raw-sienna focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Zip Code" id=":r4:-form-item" aria-describedby=":r4:-form-item-description" aria-invalid="false" type="number" {...form.register("zipcode")} />
                                {form.formState.errors.zipcode && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.zipcode.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2 md:basis-[48%]">
                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-[0.75rem] font-bold leading-[normal] peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >City</label>
                                    </div>
                                    <input required className="flex h-[56px] w-full rounded-lg border border-input-border bg-white px-6 py-[1.125rem] text-sm focus-visible:outline-none focus-visible:border-raw-sienna focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="City" id=":r8:-form-item" aria-describedby=":r8:-form-item-description" aria-invalid="false"  {...form.register("city")} />
                               {
                                form.formState.errors.city &&(
                                     <p className="text-red-500 text-sm">{form.formState.errors.city.message}</p>
                                )
                               }
                               
                                </div>
                                <div className="space-y-2 md:basis-[48%]">

                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-[0.75rem] font-bold leading-[normal] peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Country</label>
                                    </div>
                                    <input required className="flex h-[56px] w-full rounded-lg border border-input-border bg-white px-6 py-[1.125rem] text-sm focus-visible:outline-none focus-visible:border-raw-sienna focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Country" id=":r9:-form-item" aria-describedby=":r9:-form-item-description" aria-invalid="false"  {...form.register("country")} />
                                 {
                                form.formState.errors.country &&(
                                     <p className="text-red-500 text-sm">{form.formState.errors.country.message}</p>
                                )
                               }
                                </div>
                            </div>
                        </div>
                        <div className="pb-8">
                            <p className="uppercase text-red-900 text-[0.813rem] tracking-[0.0580625em] font-bold text-raw-sienna leading-[1.563rem] pb-4">
                                Payment Details
                            </p>

                            <div className="md:flex md:flex-row md:items-start md:gap-x-6">
                                <p className="font-bold  tracking-[-0.013375em] text-[0.75rem] pb-4 md:basis-[48%]">
                                    Payment Method
                                </p>

                                <div className="grid gap-[1.125rem] pb-8 md:flex-1 md:pl-4">
                                    {/* e-Money */}
                                    <label
                                        className={`flex items-center gap-x-4 px-4 py-[1.125rem] rounded-lg border cursor-pointer transition ${payment === "emoney" ? "border-raw-sienna bg-raw-sienna/5" : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="emoney"
                                            checked={payment === "emoney"}
                                            onChange={() => setPayment("emoney")}
                                            className="hidden"
                                            required
                                        />
                                        <span className="h-5 w-5 flex items-center justify-center rounded-full border border-input-border">
                                            {payment === "emoney" && <FaCheck className="h-3.5 w-3.5 text-red-900" />}
                                        </span>
                                        <span className="text-sm font-bold leading-[normal]">e-Money</span>
                                    </label>

                                    {/* Cash on Delivery */}
                                    <label
                                        className={`flex items-center gap-x-4 px-4 py-[1.125rem] rounded-lg border cursor-pointer transition ${payment === "cash" ? "border-raw-sienna bg-raw-sienna/5" : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cash"
                                            checked={payment === "cash"}
                                            onChange={() => setPayment("cash")}
                                            className="hidden"
                                        />
                                        <span className="h-5 w-5 flex items-center justify-center rounded-full border border-input-border">
                                            {payment === "cash" && <FaCheck className="h-3.5 w-3.5 text-red-900" />}
                                        </span>
                                        <span className="text-sm font-bold leading-[normal]">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>

                            {/* Extra fields if e-Money is selected */}
                            {payment === "emoney" && (
                                <div className="grid gap-4 mt-4 md:grid-cols-2">
                                    <div className="flex flex-col">
                                        <label className="text-xs font-bold mb-2">e-Money Number</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="238521993"
                                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-raw-sienna"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-xs font-bold mb-2">e-Money PIN</label>
                                        <input
                                            required
                                            type="password"
                                            placeholder="6891"
                                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-raw-sienna"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Info box if Cash on Delivery is selected */}
                            {payment === "cash" && (
                                <div className="mt-4 flex items-start gap-3 border rounded-lg p-4 bg-gray-50">
                                    <span className="text-raw-sienna font-bold">💵</span>
                                    <p className="text-sm text-red-900">
                                        The cash will be collected upon delivery of your order.
                                    </p>
                                </div>
                            )}
                        </div>


                    </div>







                    <div className="bg-white p-6 mx-6 rounded-lg mb-[6.125rem] lg:m-0 lg:w-[350px]">
                        <h2 className="text-lg font-bold mb-6">SUMMARY</h2>

                        {/* Cart items */}
                        <div className="space-y-4 mb-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-center">
                                    {/* Left: Image + Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100">
                                            <Image
                                                src={item.images}
                                                alt={item.name}
                                                width={600}
                                                height={100}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">{item.name}</p>
                                            <p className="text-gray-500 text-sm">
                                                ${item.price.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Quantity */}
                                    <p className="text-gray-500">x{item.quantity}</p>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>TOTAL</p>
                                <p className="font-bold text-black">
                                    ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                </p>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>SHIPPING</p>
                                <p className="font-bold text-black">${shipping}</p>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>VAT (INCLUDED)</p>
                                <p className="font-bold text-black">
                                    ${vat.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                </p>
                            </div>
                            <div className="flex justify-between text-sm">
                                <p className="text-gray-500 uppercase">Grand Total</p>
                                <p className="font-bold text-lg text-red-900">
                                    ${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                </p>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <button type="submit"  className="mt-6 w-full bg-red-900 text-white py-3 font-bold uppercase tracking-wide hover:bg-red-600">
                            Continue & Pay
                        </button>
                    </div>


                </div>
            </form>
            <OrderConfirmationModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}

            />
        </div>
    )
}

export default Page
export type ProductDetailsType={
    id:string,
    name:string,
    category:string,
    price:number,
    description:string,
    images:string,
    specs:{
       batteryLife: string,
      connectivity: string,
      weight: string
    },
    features:string,
    inBox:string[]


}
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { MONGO_DB } from "@/app/database/db";
import { product } from "@/app/database/schema/product";

export async function GET(){
   

  let Data = []
   try {
    await mongoose.connect(MONGO_DB)
    Data =await product.find();
   console.log("connected")


    
   } catch (error) {
    Data ={ success :false}
    console.log("error")
   }

    return NextResponse.json({result:Data, success:true})};


    export async function POST(req){
        const payload = await req.json();
        await mongoose.connect(MONGO_DB);
        let product1 = new product(payload);
        const result = await product1.save();
        return NextResponse.json({result,success:true})
    }
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { MONGO_DB } from "@/app/database/db";
import { product } from "@/app/database/schema/product";

export async function GET(){
    let data = [];
    let success=true;
    try {
      await mongoose.connect(MONGO_DB);
    data = await product.findone({name:"abc"});
      
  } catch (error) {
      data={result:"error"}
      success = false
    }
    return NextResponse.json({result:data ,success:true})
  }

    export async function POST(req){
        const payload = await req.json();
        await mongoose.connect(MONGO_DB);
        let product1 = new product(payload);
        const result = await product1.save();
        return NextResponse.json({result,success:true})
    }
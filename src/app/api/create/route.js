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
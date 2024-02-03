import { NextResponse } from "next/server";
export async function POST(req
   ){
   var payload = req.json();
   console.log();

   if (!payload.name || !payload.age || !payload.email) {
      return NextResponse.json({result:"require field not found"},{status:201})
      
   } else {
      return NextResponse.json({result:"user are created"},{status:201})
      
   }

}
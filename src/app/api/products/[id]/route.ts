import { NextRequest, NextResponse } from "next/server";
import { products} from "@/Data";


export async function GET(req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const data = await params;
    const found = products.find(product => product.id === Number(data.id) )
 
    if(!found){
        return NextResponse.json({ message: 'Product not found' })
    }else{
        return NextResponse.json(found)
    }
  
      
    
    
}
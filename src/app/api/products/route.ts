import { NextResponse } from "next/server";
import { products} from "@/Data";

export function GET(){
    return NextResponse.json(products)
}
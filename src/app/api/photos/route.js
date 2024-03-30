import { NextResponse } from "next/server";
import { getAllPhotos } from "@/app/lib/image-data";

export async function GET(){
    const data = await getAllPhotos();
    return NextResponse.json(data);
}
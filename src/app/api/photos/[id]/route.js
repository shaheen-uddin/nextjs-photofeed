import { NextResponse } from "next/server";
import { getPhotoById } from "@/app/lib/image-data";

export async function GET (request, {params}){
    const photoId = params?.id;
    const photo = await getPhotoById(photoId);
    return NextResponse.json(photo);
}
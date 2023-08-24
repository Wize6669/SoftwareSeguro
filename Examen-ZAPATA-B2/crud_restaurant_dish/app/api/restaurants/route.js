import connectMongoDB from "../../../libs/mongodb";
import Restaurant from "../../../models/restaurant";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {name, starts, isOpen, numberBranches} = await request.json();
    await connectMongoDB();

    await Restaurant.create({name, starts, isOpen, numberBranches});
    return NextResponse.json({message: "Restaurant Created"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    await Restaurant.find();
    const restaurants = await Restaurant.find();
    return NextResponse.json({restaurants});
}

export async function DELETE(request) {
    const idRestaurant = request.nextUrl.searchParams.get("idRestaurant");
    await connectMongoDB();
    await Restaurant.findByIdAndDelete(idRestaurant);
    return NextResponse.json({message: "Restaurant deleted"}, {status: 200})
}


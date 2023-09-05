import connectMongoDB from "../../../libs/mongodb";
import Dish from "../../../models/dish";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {name, starts, isTaxes, numberIngredients, idRestaurant} = await request.json();
    await connectMongoDB();
    await Dish.create({name, starts, isTaxes, numberIngredients, idRestaurant});
    return NextResponse.json({message: "Dish Created"}, {status: 201})
}

export async function GET(request) {
    const idRestaurant = request.nextUrl.searchParams.get("idRestaurant");
    await connectMongoDB();
    const dishes = await Dish.find({idRestaurant: idRestaurant});
    return NextResponse.json({dishes});
}

export async function DELETE(request) {
    const idDish = request.nextUrl.searchParams.get("idDish");
    await connectMongoDB();
    await Dish.findByIdAndDelete(idDish);
    return NextResponse.json({message: "Dish deleted"}, {status: 200})
}


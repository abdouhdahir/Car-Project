import { Schema, model } from 'mongoose';

const CarSchema = new Schema({
    isreduckilo: {
        type: Boolean,  // Modifié en Boolean
        required: true,
    },
    isreducprice: {
        type: Boolean,  // Modifié en Boolean
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    kilo: {
        type: Number,
        required: true,
    },
    carburant: {
        type: String,
        required: true,
    },
    gear: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Car = model('Car', CarSchema);

export default Car;

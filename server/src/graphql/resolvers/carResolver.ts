import Car from "../../models/car";

export const getAllCars = async () => {
    try {
        const cars = await Car.find();
        return cars
    } catch  {
        throw new Error("Error fetching cars");
    }
}
export const addCar = async (_: any, args: any) => {
    try {
      const itemsToAdd = {
        isreduckilo: args.isreduckilo,
        isreducprice: args.isreducprice,
        title: args.title,
        desc: args.desc,
        kilo: args.kilo,
        carburant: args.carburant,
        gear: args.gear,
        price: args.price,
      };
      const car = new Car(itemsToAdd);
      await car.save();
      return car;
    } catch {
      throw new Error("Error adding car");
    }
  };

  export const updateCar = async (_: any, args: any) => {
    try {
      const car = await Car.findByIdAndUpdate(args.id , args, {new: true})
      return car
    } catch {
      throw new Error("Error update car")
    }
  } 

  export const deleteCar = async (_: any, args: any) => {
    try {
      const car = await Car.findByIdAndDelete(args.id);
      if (!car) {
        throw new Error("Car non trouvé");
      }
      return car;
    } catch {
        throw new Error("Error delete car")
      }
    } 
    
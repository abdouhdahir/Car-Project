import { Form, Button, message } from "antd";
import Car from "./Car";
import { ADD_CAR } from "../../../graphql/mutation/car";
import { useMutation } from "@apollo/client";
import { GET_ALL_CARS } from "../../../graphql/query/car";

const AddListing = () => {
  const [addCarApi, { loading }] = useMutation(ADD_CAR, {
    refetchQueries: [{ query: GET_ALL_CARS }],
  });
  return (
    <div className="p-8 bg-gray-50 min-h-screen ">
      <div className="bg-white p-6 rounded-xl ">
        <h2 className="text-xl font-bold mb-6">Add Listings</h2>

        <Form
          layout="vertical"
          onFinish={(values) => {
            addCarApi({
              variables: {
                isreduckilo: values.isreduckilo === "oui",
                isreducprice: values.isreducprice === "oui",
                title: values.title,
                desc: values.desc,
                kilo: parseInt(values.kilo, 10),
                carburant: values.carburant,
                gear: values.gear,
                price: parseFloat(values.price),
              },
            })
              .then(() => {
                message.success("Car ajouté avec succès");
              })
              .catch(() => {
                message.error("Erreur lors de l'ajout du car");
              });
          }}
        >
          <Car />

          <Button
            type="primary"
            size="large"
            className="w-full mt-6"
            htmlType="submit"
            loading={loading}
          >
            Submit Listing
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddListing;

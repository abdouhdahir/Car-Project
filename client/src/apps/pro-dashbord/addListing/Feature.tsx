import { Form, Checkbox } from 'antd';

const Features = () => {
  return (
    <div className="mb-8">
      <Form.Item name="features">
        <Checkbox.Group>
          <div className="flex w-full justify-between gap-32">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold mb-2">Convenience</h2>
              <Checkbox value="heatedseats">Heated Seats</Checkbox>
              <Checkbox value="sunroof">Sunroof</Checkbox>
              <Checkbox value="leather">Leather Seats</Checkbox>
              <Checkbox value="bluetooth">Bluetooth</Checkbox>
              <Checkbox value="gps">GPS</Checkbox>
              <Checkbox value="backupcamera">Backup Camera</Checkbox>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold mb-2">Safety</h2>
              <Checkbox value="abs">ABS</Checkbox>
              <Checkbox value="airbags">Airbags</Checkbox>
              <Checkbox value="tractioncontrol">Traction Control</Checkbox>
              <Checkbox value="stabilitycontrol">Stability Control</Checkbox>
              <Checkbox value="laneassist">Lane Assist</Checkbox>
              <Checkbox value="blindspot">Blind Spot Monitoring</Checkbox>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold mb-2">Performance</h2>
              <Checkbox value="turbo">Turbo</Checkbox>
              <Checkbox value="awd">All-Wheel Drive</Checkbox>
              <Checkbox value="sportmode">Sport Mode</Checkbox>
              <Checkbox value="adaptivecruise">Adaptive Cruise Control</Checkbox>
              <Checkbox value="paddle">Paddle Shifters</Checkbox>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold mb-2">Comfort</h2>
              <Checkbox value="airconditioning">Air Conditioning</Checkbox>
              <Checkbox value="heatedsteering">Heated Steering Wheel</Checkbox>
              <Checkbox value="powerseats">Power Seats</Checkbox>
              <Checkbox value="sunshade">Sunshade</Checkbox>
              <Checkbox value="automaticclimate">Automatic Climate Control</Checkbox>
            </div>
          </div>
        </Checkbox.Group>
      </Form.Item>
    </div>
  );
};

export default Features;

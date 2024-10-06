import React from 'react';

const Services = () => {
  return (
    <div className="p-5 h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Visualize Your Data</h2>
          <p>
            Generate informative charts that display the relationship between water usage,fertilizer  crop yield, as well as labor hours spent on your farm. Our intuitive interface makes it easy to see patterns and trends that can inform your farming practices.
          </p>
        </div>
        
        {/* Service 2 */}
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Calculate Correlation</h2>
          <p>
            Understand the correlation between your resource usage and crop yield. By analyzing your historical data, you can identify the most effective strategies for maximizing productivity.
          </p>
        </div>

        {/* Service 3 */}
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Dynamic Yield Calculation</h2>
          <p>
            Input your current farming metrics—water used, fertilizer applied, and labor hours—into our interactive form. Instantly see the predicted yield based on your inputs, allowing you to make informed decisions on resource allocation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

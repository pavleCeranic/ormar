module.exports = {
    // ... other configurations ...
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*", // Allows requests from all origins (not recommended for production)
      },
    },
  };
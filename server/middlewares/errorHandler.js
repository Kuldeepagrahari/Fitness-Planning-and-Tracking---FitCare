const errorHandler = (err, req, res, next) => {
    if (err.name === "ZodError") {
      // Handle Zod validation errors
      const errors = err.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));
      return res.status(400).json({ errors });
    }
  
    // Default error handling
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  };
  
  export default errorHandler;
  
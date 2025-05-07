export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET as string,
    expires: process.env.JWT_EXPIRES as string,
  },
  database: {
    connectionString: process.env.DB_URI as string,
  },
});

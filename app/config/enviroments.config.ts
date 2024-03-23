interface Enviroments {
	NODE_ENV: "production" | "development";
	VITE_URL: string;
	PORT: string;
	DB_HOST: string;
	DB_PORT: number;
	DB_NAME: string;
	DB_USER: string;
	DB_PASS: string;
	SECRET_SESSION_KEY: string;
}
const enviroments: Enviroments = {
	NODE_ENV: process.env.NODE_ENV as Enviroments["NODE_ENV"],
	VITE_URL: process.env.VITE_URL!,
	PORT: process.env.PORT!,
	// db
	DB_HOST: process.env.DB_HOST!,
	DB_PORT: Number(process.env.DB_PORT)!,
	DB_NAME: process.env.DB_NAME!,
	DB_USER: process.env.DB_USER!,
	DB_PASS: process.env.DB_PASS!,

	// session
	SECRET_SESSION_KEY: process.env.SECRET_SESSION_KEY!,
};

export default enviroments;

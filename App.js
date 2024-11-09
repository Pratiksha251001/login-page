import express from "express";
import collection from "./mongo";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Root route
app.get("/", (req, res) => {
    res.json("Welcome to the API");
});

// Login route
app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const check = await collection.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            res.json("noexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

// Signup route
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const data = {
        email: email,
        password: password
    };
    try {
        const check = await collection.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            await collection.insertMany([data]);
            res.json("success"); // Respond with success after inserting
        }
    } catch (e) {
        res.json("fail");
    }
});

// React App Component (Assuming you are using this in a React environment)
/*function App() {
    return (
        <>
            <Login />
            <Home />
            <Signup />
            <mongo />
        </>
    );
}*/

// Export your app if needed
export default app;
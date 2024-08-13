import app from "./app";
import 'dotenv';

const PORT = process.env.PORT || 3000;
console.log("e")
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});